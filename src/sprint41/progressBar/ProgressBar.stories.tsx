import { Story, Meta } from '@storybook/react';
import ProgressBar from './ProgressBar';
import Props from './ProgressBar.types';

export default {
  title: 'Sprint41/ProgressBar',
  component: ProgressBar,
  argTypes: {
    currency: {
      options: ['EUR', 'USD', 'BRL', 'GBP'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    jest: ['ProgressBar.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="col-lg-4 col-md-4 col-sm-12">
    <ProgressBar {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Minimal: Story<Props> = Template.bind({});
export const HideRaisedOf: Story<Props> = Template.bind({});

Default.args = {
  contributesSum: 120,
  goal: 1500,
  currency: 'EUR',
  showLabel: true,
  showRaisedOf: true,
};

Minimal.args = {
  contributesSum: 120,
  goal: 1500,
  currency: 'EUR',
  showLabel: false,
  showRaisedOf: false,
};

HideRaisedOf.args = {
  contributesSum: 120,
  goal: 1500,
  currency: 'EUR',
  showLabel: true,
  showRaisedOf: false,
};
