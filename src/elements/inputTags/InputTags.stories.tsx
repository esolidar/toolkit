import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import InputTags from './InputTags';
import Props from './InputTags.types';

export default {
  title: 'Elements/InputTags',
  component: InputTags,
  parameters: {
    jest: ['inputTags.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [tags, setTags] = useState(['esg', 'crowdfunding']);

  return <InputTags {...args} tags={tags} onChange={setTags} />;
};

export const Default: Story<Props> = Template.bind({});
export const Disabled: Story<Props> = Template.bind({});
export const HelperText: Story<Props> = Template.bind({});
export const WithLabel: Story<Props> = Template.bind({});

Default.args = {};
Disabled.args = {
  disabled: true,
  placeholder: 'Placeholder',
};
HelperText.args = { helperText: 'Helper text' };
WithLabel.args = {
  inputLabelProps: {
    field: 'tags',
    label: 'Lorem Ipsum',
    help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie justo at risus rutrum luctus.',
    showOptionalLabel: true,
  },
};
