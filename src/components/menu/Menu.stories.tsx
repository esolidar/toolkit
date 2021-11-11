import { Story, Meta } from '@storybook/react';
import Menu from './Menu';
import Props from './Menu.types';

export default {
  title: 'Elements/Menu',
  component: Menu,
  parameters: {
    jest: ['Menu.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Menu {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  items: [
    {
      icon: 'icon-cheveron-up',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
    },
    {
      icon: 'icon-cheveron-up',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: false,
    },
    {
      icon: 'icon-cheveron-up',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: true,
    },
  ],
};
