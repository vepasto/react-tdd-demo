import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Person from './Person/Person';

const defaultProps = {
  classes: {},
};

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<App {...defaultProps} />)).to.not.throw();
  });

  it('should have person', ()=>{
    const wrapper = shallow(<App {...defaultProps} />);

    expect(wrapper.containsMatchingElement(<Person />))
  });

  it('should have heading', ()=>{
    const wrapper = shallow(<App {...defaultProps} />);

    expect(wrapper.find('h1'))
      .to.have.lengthOf(1);
  });
});
