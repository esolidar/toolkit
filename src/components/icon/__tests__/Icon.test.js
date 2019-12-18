/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('Icon component', () => {
  it('renders Icon correctly', () => {
    const component = shallow(<Icon />);
    expect(component).toHaveLength(1);
  });

  it('renders Icon with prop iconClass', () => {
    const component = shallow(<Icon iconClass="icon-google" />);
    expect(component.props().className).toEqual('icon-google');
  });
});
