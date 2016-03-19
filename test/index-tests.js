/* eslint-env mocha */
/* eslint-disable react/no-multi-comp, react/prefer-es6-class, react/prefer-stateless-function */
import React from 'react/addons'

const { TestUtils } = React.addons
const { expect } = chai

const SuperDuper = React.createClass({
  displayName: 'SuperDuper',
  propTypes: { children: React.PropTypes.any },
  render() { return <div className="super-duper">{this.props.children}</div> },
})

const Sub = React.createClass({
  displayName: 'Sub',
  render: () => <div className="sub"></div>,
})

describe('.have.component(Component)', () => {
  it('should find find given component in rendered react component', () => {
    const component = TestUtils.renderIntoDocument(<div><SuperDuper /></div>)
    expect(component).to.have.component(SuperDuper)
  })

  it('should find find given component in div component', () => {
    expect(<div><SuperDuper /></div>).to.have.component(SuperDuper)
  })

  it('should find find given component in react component', () => {
    expect(<SuperDuper><Sub /></SuperDuper>).to.have.component(Sub)
  })

  describe('when it does not find given component in react component', () => {
    it('should throw', () => {
      expect(() => {
        expect(<blink>hi</blink>).to.have.component(SuperDuper)
      }).to.throw('\'blink\' to have component \'SuperDuper\'')
    })
  })
})
