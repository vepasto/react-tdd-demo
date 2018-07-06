import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import
  //Person
  { Person }
from './Person';

import Image from './Image/Image';

const defaultProps = {
  classes: {},
  person: {
    name: {
      first: 'First',
      last: 'Last',
    },
    picture: {
      thumbnail: 'test',
    },
    email: 'email@example.com',
  },
};

describe('<Person />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Person {...defaultProps} />)).to.not.throw();
  });

  it('should render Image element with src', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper.containsAllMatchingElements([
      <Image src={defaultProps.person.picture.thumbnail} />,
    ])).to.equal(true);
  });

  it('should render name element with first and last name', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper.containsAllMatchingElements([
      <span>{defaultProps.person.name.first} {defaultProps.person.name.last}</span>,
    ])).to.equal(true);
  });

  it('should render link with mailto and "Email" as label', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper.containsAllMatchingElements([
      <a href={`mailto:${defaultProps.person.email}`}>Email</a>,
    ])).to.equal(true);
  });

  it('should render like button', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper.find('button').length).to.equal(1);
  });

  it('should pass like() as onClick', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(
      wrapper.find('button').get(0).props.onClick
    ).to.equal(wrapper.instance().like);
  });

  it('should add likes by one when button clicked', () => {
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper.state('likes')).to.equal(0);
    wrapper.find('button').get(0).props.onClick();
    expect(wrapper.state('likes')).to.equal(1);
  });


  it('should have zero like initially', ()=>{
    const wrapper = shallow(<Person {...defaultProps} />);

    expect(wrapper.state('likes')).to.equal(0);
  });
});
