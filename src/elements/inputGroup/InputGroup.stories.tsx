import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputGroup from './InputGroup';
import Props from './InputGroup.types';

export default {
  title: 'Elements/InputGroup',
  component: InputGroup,
  parameters: {
    jest: ['InputGroup.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5 w-50">
    <InputGroup {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Disabled: Story<Props> = Template.bind({});
export const Error: Story<Props> = Template.bind({});
export const Prepend: Story<Props> = Template.bind({});
export const Append: Story<Props> = Template.bind({});

Default.args = {
  prepend: 'Label',
  append: 'Label',
  inputPlaceholder: 'Placeholder',
};
Disabled.args = {
  prepend: 'Label',
  append: 'Label',
  disabled: true,
  inputPlaceholder: 'Placeholder',
};
Error.args = {
  prepend: 'Label',
  append: 'Label',
  error: 'Helper text',
  inputPlaceholder: 'Placeholder',
};
Prepend.args = {
  prepend: 'Label',
  inputPlaceholder: 'Placeholder',
};
Append.args = {
  append: 'Label',
  inputPlaceholder: 'Placeholder',
};
