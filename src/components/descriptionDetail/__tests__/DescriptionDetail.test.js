/* global expect */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DescriptionDetail from '../DescriptionDetail';

configure({ adapter: new Adapter() });

const propsDefault = {
  title: 'Description',
  description: 'Test Description',
  showmoreDesc: false,
  showMoreDescButton: false,
};

const props = {
  title: 'Description',
  description: 'Test Description',
  showmoreDesc: true,
  showMoreDescButton: true,
};

describe('DescriptionDetail component', () => {
  it('render DescriptionDetail correctly', () => {
    const wrapper = shallow(<DescriptionDetail />);
    expect(wrapper).toHaveLength(1);
  });

  it('exist title', () => {
    const wrapper = shallow(<DescriptionDetail {...propsDefault} />);
    expect(wrapper.find('.shipping-header').length).toBe(1);
    expect(wrapper.find('.shipping-header').text()).toEqual('Description');
  });

  it('exist description', () => {
    const wrapper = shallow(<DescriptionDetail {...propsDefault} />);
    expect(wrapper.find('.description-text').length).toBe(1);
    expect(wrapper.find('.description-text').text()).toEqual('Test Description');
  });

  it('not exist button show more', () => {
    const wrapper = shallow(<DescriptionDetail {...propsDefault} />);
    expect(wrapper.find('.readmore-button').length).toBe(0);
  });

  it('exist button show more', () => {
    const wrapper = shallow(<DescriptionDetail {...props} />);
    expect(wrapper.find('.readmore-button').length).toBe(1);
  });
});
