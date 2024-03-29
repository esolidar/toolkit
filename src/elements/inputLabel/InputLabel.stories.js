import React from 'react';
import InputLabel from '.';

export default {
  title: 'Elements/InputLabel',
  component: InputLabel,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => (
  <div className="form-group">
    <InputLabel {...args} />
  </div>
);

export const Primary = Template.bind({});
export const Private = Template.bind({});
export const Weight600 = Template.bind({});
export const Weight400 = Template.bind({});

Primary.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  help: 'Textarea_name',
  showOptionalLabel: true,
};
Private.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  help: 'Textarea_name',
  showOptionalLabel: true,
  isPrivate: true,
  privateText: "Visible only to Acme inc's admins",
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
