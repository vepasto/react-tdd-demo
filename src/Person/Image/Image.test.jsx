import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Image from './Image';

const defaultProps = {
  classes: {},
  src: '',
};

describe('<Image />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Image {...defaultProps} />)).to.not.throw();
  });

  it('should render picture element', ()=>{
    const wrapper = shallow(<Image {...defaultProps} />);
    expect(wrapper.is('picture')).to.equal(true);
  });

  it('should have img', ()=>{
    const wrapper = shallow(<Image {...defaultProps} />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });

  describe('<img />', ()=>{
    it('should have src', ()=>{
      const src = 'test';
      const wrapper = shallow(<Image {...defaultProps} src={src} />);
      expect(wrapper.find('img').props()).to.have.property('src', src);
    });
  });
});
