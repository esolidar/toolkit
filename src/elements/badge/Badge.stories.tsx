import { Story, Meta } from '@storybook/react';
import Badge from './Badge';
import Props from './Badge.types';

export default {
  title: 'Elements/Badge',
  component: Badge,
  parameters: {
    jest: ['Badge.test.js'],
  },
  argTypes: {
    extraClass: {
      options: ['default', 'primary', 'info', 'success', 'danger', 'warning', 'dark'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Badge {...args} />;

export const Default: Story<Props> = Template.bind({});
export const PlainText: Story<Props> = Template.bind({});
export const Icon: Story<Props> = Template.bind({});
export const FullWidth: Story<Props> = Template.bind({});
export const Button: Story<Props> = Template.bind({});

Default.args = {
  text: 'auctionPrivate',
};

PlainText.args = {
  plaintext: 'Plaintext',
  extraClass: 'success',
};

Icon.args = {
  text: 'auctionPrivate',
  icon: 'icon-httpslock',
  iconDataTestId: 'badge-icon',
};

FullWidth.args = {
  text: 'auctionPrivate',
  fullWidth: true,
};

Button.args = {
  plaintext: 'Button',
  type: 'button',
  dataTestId: 'badge-button',
  className: 'btn-badge',
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert('you clicked');
  },
};
