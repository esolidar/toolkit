import React from 'react';
import RadioField from './RadioField';

export default {
  title: 'Elements/RadioField',
  component: RadioField,
};

const Template = args => <RadioField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'error',
  onChange: x => console.log('test', x),
  name: 'CheckboxField_name',
  value: 'CheckboxField_value',
  checked: true,
  disabled: false,
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'error',
  onChange: x => console.log('test', x),
  name: 'CheckboxField_name',
  value: 'CheckboxField_value',
  checked: false,
  disabled: false,
};
