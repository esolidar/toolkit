/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import TextareaField from '../TextareaField';

const changed = jest.fn();

describe('TextareaField component', () => {
  it('renders TextareaField correctly', () => {
    const component = shallow(<TextareaField field="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders TextareaField with all string props', () => {
    const component = shallow(
      <TextareaField
        field="Textarea_name"
        label="Lorem"
        error="error"
        placeholder="Placeholder"
        onChange={changed}
        checkUserExists={changed}
        value="Textarea"
        message="Mensagem"
        maxLength={100}
      />,
    );
    expect(component.find('.control-label')).toHaveLength(1);
    expect(component.find('.control-label').text()).toEqual('Lorem');
    expect(component.find('.help-block')).toHaveLength(2);
    expect(component.find('textarea').props().value).toEqual('Textarea');
    expect(component.find('textarea').props().name).toEqual('Textarea_name');
    expect(component.find('textarea').props().placeholder).toEqual('Placeholder');
    expect(component.find('textarea').props().name).toEqual('Textarea_name');
    expect(component.find('textarea').props().maxLength).toEqual(100);
  });

  it('renders TextareaField with value number', () => {
    const component = shallow(
      <TextareaField
        field="Textarea_name"
        value={100}
        onChange={changed}
        checkUserExists={changed}
      />,
    );
    expect(component.find('textarea').props().value).toEqual(100);
  });

  it('renders TextareaField with string error', () => {
    const component = shallow(
      <TextareaField
        field="Textarea_name"
        error="error"
        onChange={changed}
        checkUserExists={changed}
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-control').hasClass('required-field')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
    expect(component.find('.form-group .help-block').text()).toEqual('error');
  });

  it('renders TextareaField with message', () => {
    const component = shallow(
      <TextareaField
        field="Textarea_name"
        message="Message"
        onChange={changed}
        checkUserExists={changed}
      />,
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
    expect(component.find('.form-group .help-block').text()).toEqual('Message');
  });

  it('renders TextareaField disabled', () => {
    const component = shallow(
      <TextareaField
        field="Textarea_name"
        onChange={changed}
        checkUserExists={changed}
        disabled={true}
      />,
    );
    expect(component.find('.form-group textarea').props().disabled).toBe(true);
  });
});
