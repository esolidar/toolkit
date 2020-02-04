/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import BoxInfo from '../BoxInfo';

describe('BoxInfo component', () => {
  it('renders BoxInfo correctly', () => {
    const component = shallow(<BoxInfo text="text goes here" />);
    expect(component).toHaveLength(1);
  });
});
