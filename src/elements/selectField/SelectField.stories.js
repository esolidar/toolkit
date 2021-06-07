import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Elements/SelectField',
  component: SelectField,
};

const Template = args => <SelectField {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['SelectField.test.js'],
};
Default.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select exemple',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
};
