import React from 'react';
import TextField from './TextField';

export default {
  title: 'Elements/TextField',
  component: TextField,
  parameters: {
    jest: ['TextField.test.tsx'],
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <TextField {...args} />;

export const Default = Template.bind({});
export const WithError = Template.bind({});
export const WithHelper = Template.bind({});
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

WithError.args = {
  label: 'Lorem Ipsum',
  type: 'text',
  onChange: () => {},
  error: 'Required field',
  placeholder: '',
  defaultValue: 'defaultValue',
  field: 'forCompanies',
};

WithHelper.args = {
  label: 'Lorem Ipsum',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '',
  defaultValue: 'defaultValue',
  field: 'forCompanies',
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie justo at risus rutrum luctus.',
  showOptionalLabel: true,
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
