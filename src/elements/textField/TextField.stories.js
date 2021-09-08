import React from 'react';
import TextField from './TextField';

export default {
  title: 'Elements/TextField',
  component: TextField,
  parameters: {
    jest: ['TextField.test.tsx'],
  },
};

const Template = args => <TextField {...args} />;

export const Default = Template.bind({});
export const WithIcons = Template.bind({});

Default.args = {
  label: 'Lorem Ipsum',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '',
  defaultValue: 'defaultValue',
  field: 'forCompanies',
};

WithIcons.args = {
  label: 'Lorem Ipsum',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '',
  defaultValue: 'defaultValue',
  field: 'forCompanies',
  leftIcon: { name: 'icon-search', show: true },
  rightIcon: { name: 'icon-x', onClick: () => alert('right-button'), show: true },
};
