/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../TextField';

const changed = jest.fn();

describe('TextField component', () => {
  it('renders TextField correctly', () => {
    const component = shallow(<TextField field="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders TextField with field label', () => {
    const component = shallow(
      <TextField
        label="For Companies"
        field="businessEmail"
        onChange={changed}
        disabled={true}
      />,
    );
    expect(component.find('.control-label')).toHaveLength(1);
  });

  it('renders TextField with string error', () => {
    const component = shallow(
      <TextField
        field="businessEmail"
        onChange={changed}
        error="error"
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders TextField with object error', () => {
    const component = shallow(
      <TextField
        field="businessEmail"
        onChange={changed}
        error={{ error: 'error', code: '404' }}
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders TextField with message', () => {
    const component = shallow(
      <TextField
        field="businessEmail"
        onChange={changed}
        message="message"
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders TextField disabled', () => {
    const component = shallow(
      <TextField
        field="businessEmail"
        onChange={changed}
        disabled={true}
      />,
    );
    expect(component.find('.form-group input').props().disabled).toBe(true);
  });
});
