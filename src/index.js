/* eslint-env browser */
let React;

function haveReactComponent(component, subComponent) {
  return React.addons.TestUtils.scryRenderedComponentsWithType(component, subComponent).length > 0;
}

export default function haveComponent(Chai) {
  Chai.Assertion.addMethod('component', function evaluateComponent(component) {
    if (typeof React === 'undefined') {
      React = require('react/addons');
    }

    const dom = React.findDOMNode(this._obj).outerHTML;

    this.assert(
      haveReactComponent(this._obj, component),
      'Expected "' + dom + '" to have component \'' + component.displayName + '\'',
      'Expected "' + dom + '" to not have component \'' + component.displayName + '\''
    );
  });
}
