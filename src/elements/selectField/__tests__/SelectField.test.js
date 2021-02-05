/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import SelectField from '../SelectField';

const changed = jest.fn();

describe('SelectField component', () => {
  it('renders SelectField correctly', () => {
    const component = shallow(<SelectField field="example" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders SelectField with all string props', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem' }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        selectText="Exemplo"
        error="error"
      />,
    );
    expect(component.find('.control-label')).toHaveLength(1);
    expect(component.find('.control-label').text()).toEqual('Select exemple');
    expect(component.find('option')).toHaveLength(2);
    expect(component.find('select').props().name).toEqual('example');
  });

  it('renders SelectField with selectText', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem' }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
      />,
    );
    expect(component.find('option')).toHaveLength(2);
  });

  it('renders SelectField without selectText', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem' }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
        hiddenSelectText={true}
      />,
    );
    expect(component.find('option')).toHaveLength(1);
  });

  it('renders SelectField with disabled options', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem', disabled: true }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
        hiddenSelectText={true}
      />,
    );

    expect(component.find('option').is('[disabled]')).toBe(true);
  });

  it('renders SelectField with error class', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem', disabled: true }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
        hiddenSelectText={true}
      />,
    );

    expect(component.find('.form-control').hasClass('required-field')).toEqual(true);
  });
});
