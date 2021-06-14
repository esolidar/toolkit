import { Story, Meta } from '@storybook/react';
import ProgressBar from './ProgressBar';
import Props from './ProgressBar.types';

export default {
  title: 'Elements/ProgressBar',
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
  <div className="w-25 mt-5">
    <ProgressBar {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Label: Story<Props> = Template.bind({});
export const Minimal: Story<Props> = Template.bind({});
export const Percent: Story<Props> = Template.bind({});

Default.args = {
  text: 'crowdfunding.goal',
  contributesSum: 70,
  goal: 100,
  currency: 'EUR',
  showBottomLabels: true,
  showPercentage: true,
};

Label.args = {
  text: 'crowdfunding.goal',
  contributesSum: 70,
  goal: 100,
  currency: 'EUR',
  showBottomLabels: true,
  showPercentage: false,
};

Minimal.args = {
  text: 'crowdfunding.goal',
  contributesSum: 70,
  goal: 100,
  currency: 'EUR',
  showBottomLabels: false,
  showPercentage: false,
};

Percent.args = {
  text: 'crowdfunding.goal',
  contributesSum: 70,
  goal: 100,
  currency: 'EUR',
  showBottomLabels: false,
  showPercentage: true,
};
