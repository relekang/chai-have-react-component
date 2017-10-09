/* eslint-env mocha */
/* eslint-disable react/no-multi-comp, react/prefer-es6-class, react/prefer-stateless-function */
import React from 'react'
import createReactClass from 'create-react-class'

const { expect } = chai

const Super = createReactClass({
  displayName: 'SuperDuper',
  render() { return <div className="super-duper">{this.props.children}</div> },
})

const Sub = createReactClass({
  displayName: 'Sub',
  render: () => <div className="sub"></div>,
})

describe('.have.component(Component)', () => {
  it('should find find given component in div component', () => {
    expect(<div><Super /></div>).to.have.component(Super)
  })

  it('should find find given component in react component', () => {
    expect(<Super><Sub /></Super>).to.have.component(Sub)
  })

  describe('when it does not find given component in react component', () => {
    it('should throw', () => {
      expect(() => {
        expect(<blink>hi</blink>).to.have.component(Super)
      }).to.throw('to have component \'SuperDuper\'')
    })
  })

  it('should find given stateless component', () => {
    const StatelessSub = () => (<div></div>)

    expect(<Super><StatelessSub /></Super>).to.have.component(StatelessSub)
  })

  it('should find a component in a stateless component', () => {
    const StatelessSuper = ({ children }) => (<div>{children}</div>)

    expect(<StatelessSuper><Sub />></StatelessSuper>).to.have.component(Sub)
  })
})
