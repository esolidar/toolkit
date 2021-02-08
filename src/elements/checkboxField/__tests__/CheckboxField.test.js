import React from 'react';
import { shallow } from 'enzyme';
import CheckboxField from '../CheckboxField';

const changed = jest.fn();

describe('CheckboxField component', () => {
  it('renders CheckboxField correctly', () => {
    const component = shallow(<CheckboxField label="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders CheckboxField with input checked', () => {
    const component = shallow(
      <CheckboxField label="For Companies" onChange={changed} checked={true} />
    );
    expect(component.find('.form-group input').props().checked).toBe(true);
  });

  it('renders CheckboxField with input not checked', () => {
    const component = shallow(
      <CheckboxField label="For Companies" onChange={changed} checked={false} />
    );
    expect(component.find('.form-group input').props().checked).toBe(false);
  });

  it('renders CheckboxField with string error', () => {
    const component = shallow(
      <CheckboxField label="businessEmail" onChange={changed} error="error" />
    );
    expect(component.find('.help-block')).toHaveLength(1);
  });

  it('renders TextField disabled', () => {
    const component = shallow(
      <CheckboxField label="businessEmail" onChange={changed} disabled={true} />
    );
    expect(component.find('.form-group input').props().disabled).toBe(true);
  });
});
