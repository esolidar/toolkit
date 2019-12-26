/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';

describe('Loading component', () => {
  it('renders Loading correctly', () => {
    const component = shallow(<Loading />);
    expect(component).toHaveLength(1);
  });

  it('renders Loading with prop loadingClass', () => {
    const component = shallow(<Loading loadingClass="testCss" />);
    expect(component.props().className).toEqual('testCss');
  });

  it('renders Loading with prop message', () => {
    const component = shallow(<Loading message="message" />);
    expect(component.find('.loader-message').text()).toEqual('message');
  });
});
