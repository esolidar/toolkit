import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ShareNetwork from '../index';

configure({ adapter: new Adapter() });

describe('ShareNetwork component', () => {
  it('render ShareNetwork correctly', () => {
    const wrapper = shallow(<ShareNetwork />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('ForwardRef(ShareButton-facebook)').length).toBe(1);
    expect(wrapper.find('ForwardRef(ShareButton-twitter)').length).toBe(1);
    expect(wrapper.find('ForwardRef(ShareButton-telegram)').length).toBe(1);
    expect(wrapper.find('ForwardRef(ShareButton-pinterest)').length).toBe(1);
    expect(wrapper.find('ForwardRef(ShareButton-reddit)').length).toBe(1);
    expect(wrapper.find('ForwardRef(ShareButton-email)').length).toBe(1);
  });
});
