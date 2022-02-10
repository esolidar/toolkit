import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Elements/SelectField',
  component: SelectField,
  parameters: {
    jest: ['SelectField.test.tsx'],
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <SelectField {...args} />;

export const Default = Template.bind({});
export const LeftLabel = Template.bind({});
export const WithHelper = Template.bind({});
export const WithIcons = Template.bind({});
export const ReadOnly = Template.bind({});

Default.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select exemple',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
  error: '',
};

LeftLabel.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select left',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
  isLabelLeft: true,
  error: '',
};

WithHelper.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select left',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie justo at risus rutrum luctus.',
  error: '',
};

WithIcons.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select left',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
  leftIcon: { name: 'icon-search', show: true },
  error: '',
};

ReadOnly.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select exemple',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
  error: '',
  readOnly: true,
};
