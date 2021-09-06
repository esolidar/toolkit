import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Elements/SelectField',
  component: SelectField,
  parameters: {
    jest: ['SelectField.test.tsx'],
  },
};

const Template = args => <SelectField {...args} />;

export const Default = Template.bind({});
export const LeftLabel = Template.bind({});
Default.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select exemple',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
};
LeftLabel.args = {
  options: [{ id: 1, name: 'lorem' }],
  value: '',
  label: 'Select left',
  field: 'name',
  onChange: () => {},
  selectText: 'Exemplo',
  isLabelLeft: true,
};
