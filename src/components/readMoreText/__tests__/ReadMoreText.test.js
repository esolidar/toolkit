/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ReadMoreText from '../ReadMoreText';

describe('ReadMoreText component', () => {
  it('renders ReadMoreText correctly', () => {
    const component = shallow(<ReadMoreText text="lorem ipsum" />);
    expect(component).toHaveLength(1);
  });
});
