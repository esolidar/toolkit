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

const Template: Story<Props> = (args: Props) => (
  <div className="w-25">
    <Menu {...args} />
  </div>
);

export const SimpleText: Story<Props> = Template.bind({});
export const Default: Story<Props> = Template.bind({});
export const OnClick: Story<Props> = Template.bind({});
export const Collapsed: Story<Props> = Template.bind({});

SimpleText.args = {
  items: [
    {
      text: 'Menu option',
    },
  ],
};

Default.args = {
  items: [
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: false,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: true,
      isActive: false,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: true,
    },
    { separator: true },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
    },
  ],
};

OnClick.args = {
  items: [
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      onClick: () => {},
      showNotificationsIcon: true,
      disabled: false,
      isActive: false,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      onClick: () => {},
      showNotificationsIcon: false,
      disabled: true,
      isActive: false,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      onClick: () => {},
      showNotificationsIcon: false,
      disabled: false,
      isActive: true,
    },
  ],
};

Collapsed.args = {
  isCollapsed: true,
  items: [
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: false,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: true,
      isActive: false,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: true,
    },
  ],
};
