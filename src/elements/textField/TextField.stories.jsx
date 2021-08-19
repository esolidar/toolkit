import React from 'react';
import TextField from './TextField';

export default {
  title: 'Elements/TextField',
  component: TextField,
};

const Template = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['TextField.test.js'],
};
Default.args = {
  label: 'Lorem Ipsum',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '',
  defaultValue: 'defaultValue',
  field: 'forCompanies',
};
