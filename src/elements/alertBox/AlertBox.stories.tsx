import { Story, Meta } from '@storybook/react';
import AlertBox from './AlertBox';
import Props from './AlertBox.types';

export default {
  title: 'Elements/AlertBox',
  component: AlertBox,
  parameters: {
    jest: ['AlertBox.test.js'],
  },
  argTypes: {
    status: {
      options: ['info', 'success', 'warning', 'danger'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <AlertBox {...args} />;

export const Info: Story<Props> = Template.bind({});
export const Success: Story<Props> = Template.bind({});
export const Warning: Story<Props> = Template.bind({});
export const Danger: Story<Props> = Template.bind({});

Info.args = {
  title: 'Undergoing maintenance',
  subtitle: 'Thank you for your patience, we’ll be back soon.',
  status: 'info',
  icon: 'icon-clock',
};

Success.args = {
  title: 'Account created',
  subtitle: 'You may now log in with the username you’ve chosen.',
  status: 'success',
  icon: 'icon-check-circle',
};

Warning.args = {
  title: 'Your credit card is about to expire',
  subtitle: 'Update your payment information or contact support.',
  status: 'warning',
  icon: 'icon-lock1',
};

Danger.args = {
  title: 'Could not connect',
  subtitle: 'Make sure your network connection is active and try again.',
  status: 'danger',
  icon: 'icon-x-circle',
};
