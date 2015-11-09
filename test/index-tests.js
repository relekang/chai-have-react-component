/* eslint-env mocha */
import React from 'react/addons';

const {TestUtils} = React.addons;
const {expect} = chai;

const Super = React.createClass({
  displayName: 'Super',
  render: () => <div></div>,
});

describe('.have.component(Component)', () => {
  it('should find find given component in react component', () => {
    const component = TestUtils.renderIntoDocument(<div><Super /></div>);
    expect(component).to.have.component(Super);
  });

  describe('when it does not find given component in react component', () => {
    it('should throw', () => {
      const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
      expect(() => {
        expect(component).to.have.component(Super);
      }).to.throw('to have component \'Super\'');
    });

    it('should throw with outerHTML of the component', () => {
      const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
      expect(() => {
        expect(component).to.have.component(Super);
      }).to.throw('hi</blink>');
    });
  });
});
