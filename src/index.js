/* eslint-env browser */
let React
let enzyme

export default function haveComponent(Chai) {
  Chai.Assertion.addMethod('component', function evaluateComponent(component) {
    if (typeof enzyme === 'undefined') {
      enzyme = require('enzyme')
    }

    if (typeof React === 'undefined') {
      React = require('react')
    }

    this.assert(
      enzyme.mount(this._obj).find(component).length > 0,
      `Expected "${this._obj.displayName}" to have component '${component.displayName}'`,
      `Expected "${this._obj.displayName}" to not have component '${component.displayName}'`
    )
  })
}
