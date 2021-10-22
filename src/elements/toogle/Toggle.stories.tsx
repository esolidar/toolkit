import { Story, Meta } from '@storybook/react';
import Toggle from './Toggle';
import Props from './Toggle.types';

export default {
  title: 'Elements/Toogle',
  component: Toggle,
  argTypes: {},
  parameters: {
    jest: ['Toggle.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <Toggle {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const UnChecked: Story<Props> = Template.bind({});
export const Disable: Story<Props> = Template.bind({});
export const WithIcons: Story<Props> = Template.bind({});

Default.args = {
  isChecked: true,
  name: 'toggle',
  value: 'A',
  onChange: () => {},
};

UnChecked.args = {
  isChecked: false,
  name: 'toggle',
  value: 'A',
  onChange: () => {},
};

Disable.args = {
  isChecked: false,
  name: 'toggle',
  value: 'A',
  onChange: () => {},
  disabled: true,
};

WithIcons.args = {
  isChecked: false,
  hasIcons: true,
  name: 'toggle',
  value: 'A',
  onChange: () => {},
  disabled: true,
};
