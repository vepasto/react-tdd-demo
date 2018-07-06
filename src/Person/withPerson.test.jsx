import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import withPerson from './withPerson';

const defaultProps = {
  classes: {},
};

describe('<withPerson />', () => {
  let MockChild;
  beforeEach(()=>{
    MockChild = () => null;
  });

  it('should be able to pass child component', () => {
    expect(() => withPerson(MockChild)).to.not.throw();
  });

  it('should fetch persons after mount', ()=>{
    const Component = withPerson(MockChild);
    const stub = sinon.stub(Component.prototype, "getPerson");
    shallow(<Component />);
    expect(stub.calledOnce).to.equal(true);
    stub.restore();
  });
});
