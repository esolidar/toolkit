import { Story, Meta } from '@storybook/react';
import ProgressBarWithlabels from './ProgressBarWithlabels';
import Props from './interfaces';

export default {
  title: 'Components/ProgressBarWithlabels',
  component: ProgressBarWithlabels,
  argTypes: {
    currency: {
      options: ['EUR', 'USD', 'BRL', 'GBP'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    jest: ['ProgressBarWithlabels.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="w-25 mt-5">
    <ProgressBarWithlabels {...args} />
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
