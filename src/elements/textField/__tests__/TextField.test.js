import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../index';

const changed = jest.fn();

describe('TextField component', () => {
  it('renders TextField correctly', () => {
    const component = shallow(<TextField field="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
    expect(component.find('[dataTestId="input-left-icon"]').length).toBe(0);
    expect(component.find('[dataTestId="input-right-icon"]').length).toBe(0);
  });

  it('renders TextField with field label', () => {
    const component = shallow(
      <TextField label="For Companies" field="businessEmail" onChange={changed} disabled={true} />
    );
    expect(component.find('InputLabel')).toHaveLength(1);
  });

  it('renders TextField with string error', () => {
    const component = shallow(<TextField field="businessEmail" onChange={changed} error="error" />);
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-control').hasClass('required-field')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders TextField with object error', () => {
    const component = shallow(<TextField field="businessEmail" onChange={changed} error="error" />);
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders TextField with message', () => {
    const component = shallow(
      <TextField field="businessEmail" onChange={changed} message="message" />
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders TextField disabled', () => {
    const component = shallow(
      <TextField field="businessEmail" onChange={changed} disabled={true} />
    );
    expect(component.find('.form-group input').props().disabled).toBe(true);
  });

  it('renders TextField classes from className prop', () => {
    const component = shallow(<TextField field="businessEmail" className="test new-class" />);
    expect(component.find('.test').length).toBe(1);
    expect(component.find('.new-class').length).toBe(1);
  });

  it('renders TextField with left and right icons', () => {
    const component = shallow(
      <TextField
        leftIcon={{ name: 'Search', show: true }}
        rightIcon={{ name: 'icon-x', show: true }}
      />
    );

    expect(component.find('[dataTestId="input-left-icon"]').length).toBe(1);
    expect(component.find('[name="Search"]').length).toBe(1);

    expect(component.find('[dataTestId="input-right-icon"]').length).toBe(1);
    expect(component.find('[name="icon-x"]').length).toBe(1);
  });

  it('renders TextField with loading', () => {
    const component = shallow(<TextField isLoading />);

    expect(component.find('Loading').length).toBe(1);
  });

  it('renders TextField with leftElement and rightElement', () => {
    const component = shallow(
      <TextField
        leftElement={<div className="leftElement" />}
        rightElement={<div className="rightElement" />}
      />
    );

    expect(component.find('[dataTestId="input-left-icon"]').length).not.toBe(1);
    expect(component.find('[name="Search"]').length).not.toBe(1);
    expect(component.find('.leftElement').length).toBe(1);
    expect(component.find('.rightElement').length).toBe(1);
  });
});
