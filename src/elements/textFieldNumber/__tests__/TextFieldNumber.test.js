import React from 'react';
import { shallow } from 'enzyme';
import TextFieldNumber from '../index';

const changed = jest.fn();

const props = {
  label: 'title',
  onChange: changed,
  value: 1000,
  thousandSeparator: true,
  decimalScale: 2,
  placeholder: '0%',
};

describe('TextFieldNumber component', () => {
  it('renders TextFieldNumber correctly', () => {
    const component = shallow(<TextFieldNumber {...props} />);

    expect(component.find('TextField')).toHaveLength(1);
    expect(component).toHaveLength(1);
  });

  it('renders TextFieldNumber with label and exist component NumberFormat', () => {
    const component = shallow(<TextFieldNumber {...props} error="error" />).shallow();

    expect(component.find('.control-label')).toHaveLength(1);
    expect(component.find('.help-block')).toHaveLength(1);
    expect(component.find('NumberFormat')).toHaveLength(1);
  });
});
