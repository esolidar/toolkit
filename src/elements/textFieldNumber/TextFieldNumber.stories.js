import React from 'react';
import TextFieldNumber from './TextFieldNumber';

export default {
  title: 'Elements/TextFieldNumber',
  component: TextFieldNumber,
};

const Template = args => <TextFieldNumber {...args} />;

export const Default = Template.bind({});
export const Number = Template.bind({});

Default.parameters = {
  jest: ['TextFieldNumber.test.js'],
};

Default.args = {
  label: 'title',
  onChange: () => {},
  error: '',
  value: 1000,
  suffix: '%',
  thousandSeparator: false,
  decimalScale: 2,
  placeholder: '0%',
};
Number.args = {
  label: 'Number',
  onChange: () => {},
  error: '',
  value: '',
  thousandSeparator: false,
  decimalScale: 2,
  placeholder: '123456',
  size: 'sm',
  showArrows: true,
  min: 5,
  max: 10,
  field: 'teste',
};
