import React from 'react';
import TextFieldCurrency from './TextFieldCurrency';

export default {
  title: 'Elements/TextFieldCurrency',
  component: TextFieldCurrency,
};

const Template = args => <TextFieldCurrency {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['TextFieldCurrency.test.js'],
};
Default.args = {
  label: 'Title',
  prefix: 'EUR',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '€ 10',
  defaultValue: 'defaultValue',
  disabled: false,
  className: 'teste',
  value: null,
};
