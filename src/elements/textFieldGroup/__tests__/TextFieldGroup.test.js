/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import TextFieldGroup from '../TextFieldGroup';

const changed = jest.fn();

describe('TextFieldGroup component', () => {
  it('renders TextFieldGroup correctly', () => {
    const component = shallow(<TextFieldGroup field="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders TextFieldGroup with all string props', () => {
    const component = shallow(
      <TextFieldGroup
        field="TextFieldGroup_name"
        label="Lorem"
        onChange={changed}
        disabled
        error="error"
        groupText="Group Text"
        message="Mensagem"
        placeholder="Placeholder"
        type="number"
        value="Textarea"
      />,
    );
    expect(component.find('.control-label')).toHaveLength(1);
    expect(component.find('.control-label').text()).toEqual('Lorem');
    expect(component.find('.help-block')).toHaveLength(2);
    expect(component.find('.input-group-addon')).toHaveLength(1);
    expect(component.find('.input-group-addon').text()).toEqual('Group Text');
    expect(component.find('input').props().name).toEqual('TextFieldGroup_name');
    expect(component.find('input').props().placeholder).toEqual('Placeholder');
    expect(component.find('input').props().type).toEqual('number');
    expect(component.find('input').props().value).toEqual('Textarea');
    expect(component.find('label').text()).toEqual('Lorem');
    expect(component.find('input').props().disabled).toBe(true);
  });

  it('renders TextFieldGroup with value number', () => {
    const component = shallow(
      <TextFieldGroup
        field="TextFieldGroup_name"
        value={100}
        onChange={changed}
        checkUserExists={changed}
      />,
    );
    expect(component.find('input').props().value).toEqual(100);
  });

  it('renders TextFieldGroup with string error', () => {
    const component = shallow(
      <TextFieldGroup
        field="TextFieldGroup_name"
        error="error"
        onChange={changed}
        checkUserExists={changed}
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
    expect(component.find('.form-group .help-block').text()).toEqual('error');
  });

  it('renders TextFieldGroup with message', () => {
    const component = shallow(
      <TextFieldGroup
        field="TextFieldGroup_name"
        message="Message"
        onChange={changed}
        checkUserExists={changed}
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
    expect(component.find('.form-group .help-block').text()).toEqual('Message');
  });

  it('renders TextFieldGroup disabled', () => {
    const component = shallow(
      <TextFieldGroup
        field="TextFieldGroup_name"
        onChange={changed}
        checkUserExists={changed}
        disabled={true}
      />,
    );
    expect(component.find('.form-group input').props().disabled).toBe(true);
  });
});
