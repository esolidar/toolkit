import React from 'react';
import TextareaField from './TextareaField';

export default {
  title: 'Elements/TextareaField',
  component: TextareaField,
};

const Template = args => (
  <div style={{ maxWidth: '550px' }}>
    <TextareaField {...args} />
  </div>
);
export const Default = Template.bind({});
export const MaxLength = Template.bind({});
export const Error = Template.bind({});
export const Disabled = Template.bind({});
export const Sm = Template.bind({});
export const Md = Template.bind({});
export const Lg = Template.bind({});

Default.parameters = {
  jest: ['TextareaField.test.js'],
};

Default.args = {
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  defaultValue: 'Textarea',
  required: true,
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis.',
};

MaxLength.args = {
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
  maxLength: 400,
  required: true,
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis.',
};

Error.args = {
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  error: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
  maxLength: 400,
  required: true,
};

Disabled.args = {
  disabled: true,
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
  maxLength: 400,
  required: true,
};

Sm.args = {
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
  maxLength: 400,
  required: true,
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis.',
  size: 'sm',
};

Md.args = {
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
  maxLength: 400,
  required: true,
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis.',
  size: 'md',
};

Lg.args = {
  resize: true,
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'Textarea_name',
  value: 'Textarea',
  maxLength: 400,
  required: true,
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis.',
  size: 'lg',
};
