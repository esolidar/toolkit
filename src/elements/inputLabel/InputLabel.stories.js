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
Primary.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  help: 'Textarea_name',
  showOptionalLabel: true,
  style: { marginBottom: '8px' },
};
