import { Story, Meta } from '@storybook/react';
import Toggle from './Toggle';
import Props from './Toggle.types';

export default {
  title: 'Unreleased/Toogle',
  component: Toggle,
  argTypes: {},
  parameters: {
    jest: ['Toggle.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="w-25 mt-5">
    <Toggle {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  isChecked: true,
  status: true,
  onChange: () => {},
};
