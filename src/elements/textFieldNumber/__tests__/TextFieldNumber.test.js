import React from 'react';
import { shallow } from 'enzyme';
import NumberFormat from 'react-number-format';
import TextFieldNumber from '../index';
import FormatCurrency from '../formatCurrency';

const changed = jest.fn();

const props = {
  label: 'title',
  onChange: changed,
  value: 1000,
  thousandSeparator: true,
  decimalScale: 2,
  placeholder: '€ 0,00',
};

describe('TextFieldNumber component', () => {
  // it('renders TextFieldFormat correctly', () => {
  //   const component = shallow(<TextFieldFormat {...props} />);
  //   expect(component).toHaveLength(1);
  // });

  it('renders TextFieldNumber without prefix', () => {
    const component = shallow(<TextFieldFormat {...props} error="error" />);

    expect(component.find('NumberFormat')).toHaveLength(1);
    expect(component.find('.control-label')).toHaveLength(1);
    expect(component.find('.help-block')).toHaveLength(1);
  });

  // it('renders TextFieldFormat with prefix', () => {
  //   const component = shallow(<TextFieldFormat {...props} prefix="EUR" />);

  //   expect(component.containsMatchingElement(<FormatCurrency />)).toEqual(true);
  //   expect(component.find('.control-label')).toHaveLength(0);
  //   expect(component.find('.help-block')).toHaveLength(0);
  // });
});
