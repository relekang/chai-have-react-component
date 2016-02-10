/* eslint-env browser */
import {haveXpath, getFindDOMNode} from 'have-xpath';
import paramCase from 'param-case';

let React;
let findDOMNode = findDOMNode || (global && global.findDOMNode);

function haveReactComponent(component, subComponent) {
  return React.addons.TestUtils.scryRenderedComponentsWithType(component, subComponent).length > 0;
}

const create14Message = className => `
      Be aware that since you are using react 0.14.x this library is
      falling back looking for a element with a class name "${className}".
      More info about the fallback can be found at
      https://github.com/relekang/chai-have-react-component
`;

export default function haveComponent(Chai) {
  Chai.Assertion.addMethod('component', function evaluateComponent(component) {
    if (typeof React === 'undefined') {
      React = require('react');
      if (/0\.13/.test(React.version)) {
        React = require('react/addons');
      }
    }
    findDOMNode = findDOMNode || getFindDOMNode();

    const dom = findDOMNode(this._obj).outerHTML;

    if (/0\.13/.test(React.version)) {
      this.assert(
        haveReactComponent(this._obj, component),
        `Expected "${dom}" to have component '${component.displayName}'`,
        `Expected "${dom}" to not have component '${component.displayName}'`
      );
    } else if (/0\.14/.test(React.version)) {
      const className = paramCase(component.displayName);
      const extra = create14Message(className);
      this.assert(
        haveXpath(this._obj, `//*[contains(@class, '${className}')]`),
        `Expected ${dom} to have component '${component.displayName}' ${extra}`,
        `Expected ${dom} to not have component '${component.displayName}' ${extra}`
      );
    } else {
      throw new Error('This version of react is not supported');
    }
  });
}
