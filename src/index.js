/* eslint-env browser */
let enzyme

export default function haveComponent(Chai) {
  Chai.Assertion.addMethod('component', function evaluateComponent(component) {
    if (typeof enzyme === 'undefined') {
      enzyme = require('enzyme')
    }
    return this.assert(
      enzyme.mount(this._obj).find(component).length > 0,
      `Expected "${this._obj}" to have component '${component.displayName}'`,
      `Expected "${this._obj}" to not have component '${component.displayName}'`
    )
  })
}
