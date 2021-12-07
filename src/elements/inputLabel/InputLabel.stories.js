import React from 'react';
import InputLabel from './InputLabel';

export default {
  title: 'Elements/InputLabel',
  component: InputLabel,
};

const Template = args => (
  <div className="form-group">
    <InputLabel {...args} />
  </div>
);

export const Primary = Template.bind({});
export const Required = Template.bind({});
export const Weight600 = Template.bind({});
export const Weight400 = Template.bind({});

Primary.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  help: 'Textarea_name',
  showOptionalLabel: true,
  style: { marginBottom: '8px' },
};
Required.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  help: 'Textarea_name',
  showOptionalLabel: true,
  style: { marginBottom: '8px' },
  required: true,
  requiredText: "Visible only to Acme inc's admins",
};

Weight600.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  fontWeight: 600,
};

Weight400.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  fontWeight: 400,
};
