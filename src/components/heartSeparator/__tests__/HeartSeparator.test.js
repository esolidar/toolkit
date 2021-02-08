import React from 'react';
import { shallow } from 'enzyme';
import HeartSeparator from '../HeartSeparator';

describe('HeartSeparator component', () => {
  it('renders HeartSeparator correctly', () => {
    const component = shallow(<HeartSeparator />);
    expect(component).toHaveLength(1);
  });
});
