import { Story, Meta } from '@storybook/react';
import Toggle from './Toggle';
import Props from './Toggle.types';

export default {
  title: 'Elements/Toogle',
  component: Toggle,
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
export const Disable: Story<Props> = Template.bind({});

Default.args = {
  isChecked: true,
  name: 'toggle',
  onChange: () => {},
};

Disable.args = {
  isChecked: false,
  name: 'toggle',
  onChange: () => {},
  isDisabled: true,
};
