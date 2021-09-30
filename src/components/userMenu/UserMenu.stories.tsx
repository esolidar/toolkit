import { Story, Meta } from '@storybook/react';
import UserMenu from './UserMenu';
import Props from './UserMenu.types';

export default {
  title: 'Components/Header/UserMenu',
  component: UserMenu,
  parameters: {
    jest: ['UserMenu.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="d-flex justify-content-end">
    <UserMenu {...args} />
  </div>
);
export const Default: Story<Props> = Template.bind({});
Default.args = {
  companyLogo:
    'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-THUMB.jpg',
  companyName: 'Webankor',
  handleError: () => {},
  items: [
    {
      href: '#',
      text: 'this item is hidden',
      isVisible: false,
    },
    {
      className: 'font-weight-bold',
      href: '#',
      text: 'Acme inc',
    },
    {
      className: 'user-top-menu-option',
      href: '#',
      text: 'Switch Menu',
      onClick: () => {},
    },
    {
      href: '#',
      isDivider: true,
    },
    {
      href: '/company-settings',
      text: 'topMenu.settings',
    },
    {
      href: '/user/settings',
      text: 'topMenu.usersettings',
    },
    {
      href: '#',
      isDivider: true,
    },
    {
      href: '/company-payments',
      text: 'topMenu.manageBankAccounts',
    },
    {
      href: '/company/documents',
      text: 'topMenu.documents',
    },
    {
      href: '/company/tickets',
      text: 'topMenu.tickets',
    },
    {
      href: '/company/departments',
      text: 'topMenu.departments',
    },
    {
      href: '/brands',
      text: 'topMenu.brands',
    },
    {
      eventKey: '4',
      href: '#',
      text: 'topMenu.logout',
      onClick: () => {},
    },
  ],
};
