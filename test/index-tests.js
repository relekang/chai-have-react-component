/* eslint-env mocha */
/* eslint-disable react/no-multi-comp */
import React from 'react/addons';
const {TestUtils} = React.addons;

const {expect} = chai;

const Super = React.createClass({
  displayName: 'SuperDuper',
  propTypes: { children: React.PropTypes.any },
  render() { return <div className='super-duper'>{this.props.children}</div>; },
});

const Sub = React.createClass({
  displayName: 'Sub',
  render: () => <div className='sub'></div>,
});

describe('.have.component(Component)', () => {
  it('should find find given component in rendered react component', () => {
    const component = TestUtils.renderIntoDocument(<div><Super /></div>);
    expect(component).to.have.component(Super);
  });

  it('should find find given component in div component', () => {
    expect(<div><Super /></div>).to.have.component(Super);
  });

  it('should find find given component in react component', () => {
    expect(<Super><Sub /></Super>).to.have.component(Sub);
  });

  describe('when it does not find given component in react component', () => {
    it('should throw', () => {
      expect(() => {
        expect(<blink>hi</blink>).to.have.component(Super);
      }).to.throw('to have component \'SuperDuper\'');
    });
  });
});
