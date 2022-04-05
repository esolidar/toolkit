import React from 'react';
import LocationTextField from './LocationTextField';

export default {
  title: 'Elements/LocationTextField',
  component: LocationTextField,
  parameters: {
    jest: ['LocationTextField.test.tsx'],
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <LocationTextField {...args} />;

export const Default = Template.bind({});
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
  size: 'lg',
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
  size: 'lg',
};

WithIcons.args = {
  label: 'Lorem Ipsum',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '',
  defaultValue: 'defaultValue',
  field: 'forCompanies',
  leftIcon: { name: 'Search', show: true },
  size: 'lg',
  local: 'teste',
  messageNoResult: 'Oups... we couldn´t find the address',
};
