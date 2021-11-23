import { Story, Meta } from '@storybook/react';
import Sidebar from './Sidebar';
import Props from './Sidebar.types';

export default {
  title: 'Elements/Sidebar',
  component: Sidebar,
  parameters: {
    jest: ['Sidebar.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div
    style={{
      marginLeft: '-1rem',
      marginBottom: '-1rem',
      minHeight: '1000px',
      position: 'relative',
    }}
  >
    <Sidebar {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  companyInfo: {
    logo: 'https://cdn.esolidar.com/companies/1112/whitelabels/1/5906ee2e-af17-45e0-88c5-57d4488c411e.jpg',
    name: 'Esolidar',
    esolidarLogo: 'https://static.esolidar.com/frontend/logo/esolidar/logo-xsmall.svg',
  },
  mainMenu: [
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: true,
      hide: 0,
      onClick: () => true,
    },
    {
      icon: 'icon-check-circle',
      text: 'Submenu option',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: false,
      hide: 0,
      submenu: [
        {
          icon: 'icon-check-circle',
          text: 'Submenu option',
          href: '#',
          showNotificationsIcon: true,
          disabled: false,
          isActive: false,
          hide: 0,
        },
        {
          icon: 'icon-check-circle',
          text: 'Submenu option',
          href: '#',
          showNotificationsIcon: false,
          disabled: false,
          isActive: false,
          hide: 0,
        },
      ],
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
      hide: 0,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
      hide: 0,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
      hide: 0,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: true,
      isActive: false,
      hide: 0,
    },
    { separator: true },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: true,
      hide: 0,
    },
    {
      icon: 'icon-check-circle',
      text: 'Menu option',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
      hide: 0,
    },
  ],
  bottomMenu: [
    {
      icon: 'icon-check-circle',
      text: 'Activity',
      href: '#',
      showNotificationsIcon: true,
      disabled: false,
      isActive: false,
      hide: 0,
      submenu: [
        {
          icon: 'icon-check-circle',
          text: 'Menu option',
          href: '#',
          showNotificationsIcon: true,
          disabled: false,
          isActive: false,
          hide: 0,
        },
        {
          icon: 'icon-check-circle',
          text: 'Menu option',
          href: '#',
          showNotificationsIcon: false,
          disabled: false,
          isActive: false,
          hide: 0,
        },
        { separator: true },
        {
          icon: 'icon-check-circle',
          text: 'Menu option',
          href: '#',
          showNotificationsIcon: false,
          disabled: false,
          isActive: true,
          hide: 0,
        },
        {
          icon: 'icon-check-circle',
          text: 'Menu option',
          href: '#',
          showNotificationsIcon: false,
          disabled: false,
          isActive: false,
          hide: 0,
        },
      ],
    },
    {
      icon: 'icon-check-circle',
      text: 'Settings',
      href: '#',
      showNotificationsIcon: false,
      disabled: true,
      isActive: false,
      hide: 0,
    },
  ],
};
