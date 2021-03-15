import React from 'react';
import { shallow } from 'enzyme';
import TextFieldFormat from '../index';

const changed = jest.fn();

const props = {
  label: 'title',
  onChange: changed,
  value: 1000,
  thousandSeparator: true,
  decimalScale: 2,
  placeholder: '€ 0,00',
};

describe('TextFieldFormat component', () => {
  it('renders TextFieldFormat correctly', () => {
    const component = shallow(<TextFieldFormat {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders TextFieldFormat with all string props', () => {
    const component = shallow(<TextFieldFormat {...props} error="error" />);
    expect(component.find('.control-label')).toHaveLength(1);
    expect(component.find('.help-block')).toHaveLength(1);
  });
});
