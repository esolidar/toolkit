import { Story, Meta } from '@storybook/react';
import Tooltip from './Tooltip';
import Props from './Tooltip.types';

export default {
  title: 'Elements/Tooltip',
  component: Tooltip,
  parameters: {
    jest: ['Tooltip.test.js'],
  },
  argTypes: {
    placement: {
      options: [
        'left',
        'right',
        'top',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
      ],
      control: { type: 'radio' },
    },
    trigger: {
      options: ['hover', 'click', 'focus'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Tooltip {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Onboarding: Story<Props> = Template.bind({});

Default.args = {
  tooltipBodyChild: <div>Hover here</div>,
  overlay: <span>Default</span>,
};

Onboarding.args = {
  tooltipBodyChild: <div>Hover here</div>,
  overlay: <span>Start here!</span>,
  type: 'onboarding',
};
