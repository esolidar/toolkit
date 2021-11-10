import { Story, Meta } from '@storybook/react';
import Menu from './Menu';
import Props from './Menu.types';

export default {
  title: 'Elements/Menu',
  component: Menu,
  parameters: {
    jest: ['Menu.test.js'],
  },
  argTypes: {
    extraClass: {
      options: ['default', 'primary', 'info', 'success', 'danger', 'warning', 'dark'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Menu {...args} />;

export const Default: Story<Props> = Template.bind({});
export const PlainText: Story<Props> = Template.bind({});
export const Icon: Story<Props> = Template.bind({});
export const FullWidth: Story<Props> = Template.bind({});
export const Button: Story<Props> = Template.bind({});

Default.args = {
  text: 'toolkit.private',
};

PlainText.args = {
  plaintext: 'Plaintext',
  extraClass: 'success',
};

Icon.args = {
  text: 'toolkit.private',
  icon: 'icon-httpslock',
  iconDataTestId: 'badge-icon',
};

FullWidth.args = {
  text: 'toolkit.private',
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
