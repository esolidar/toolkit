/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import CheckboxImage from '../CheckboxImage';

const changed = jest.fn();

describe('CheckboxImage component', () => {
  it('renders CheckboxImage correctly', () => {
    const component = shallow(<CheckboxImage label="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders CheckboxImage with input checked', () => {
    const component = shallow(
      <CheckboxImage
        label="For Companies"
        onChange={changed}
        checked={true}
      />,
    );
    expect(component.find('.form-group input').props().checked).toBe(true);
  });

  it('renders CheckboxImage with input not checked', () => {
    const component = shallow(
      <CheckboxImage
        label="For Companies"
        onChange={changed}
        checked={false}
      />,
    );
    expect(component.find('.form-group input').props().checked).toBe(false);
  });

  it('renders TextField disabled', () => {
    const component = shallow(
      <CheckboxImage
        label="businessEmail"
        onChange={changed}
        disabled={true}
      />,
    );
    expect(component.find('.form-group input').props().disabled).toBe(true);
  });
});
