import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Props from './Sidebar.types';

export default {
  title: 'Elements/Sidebar',
  component: Sidebar,
  parameters: {
    jest: ['Sidebar.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [isActiveFeed, setIsActiveFeed] = useState(false);
  const [isActiveAuction, setIsActiveAuction] = useState(false);
  const [isActiveCrowdfunding, setIsActiveCrowdfunding] = useState(false);
  const [isActiveDocuments, setIsActiveDocuments] = useState(false);
  const [isActiveSurvey, setIsActiveSurvey] = useState(false);
  const [isActiveProjects, setIsActiveProjects] = useState(false);

  const [isActiveAccount, setIsActiveAccount] = useState(false);
  const [isActivePreferences, setIsActivePreferences] = useState(false);
  const [isActiveBilling, setIsActiveBilling] = useState(false);

  const clickOption = (state, setState) => {
    setIsActiveFeed(false);
    setIsActiveAuction(false);
    setIsActiveCrowdfunding(false);
    setIsActiveDocuments(false);
    setIsActiveSurvey(false);
    setIsActiveProjects(false);
    setIsActiveAccount(false);
    setIsActivePreferences(false);
    setIsActiveBilling(false);
    setState(state);
  };

  const mainMenu = [
    {
      icon: 'icon-icon-feed',
      text: 'Social Feed',
      showNotificationsIcon: true,
      disabled: false,
      isActive: isActiveFeed,
      isVisible: true,
      onClick: () => clickOption(!isActiveFeed, setIsActiveFeed),
    },
    {
      icon: 'icon-check-circle',
      text: 'Auctions',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveAuction,
      isVisible: true,
      onClick: () => clickOption(!isActiveAuction, setIsActiveAuction),
    },
    {
      icon: 'icon-ic-crowdfunding',
      text: 'Crowdfunding',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveCrowdfunding,
      isVisible: true,
      onClick: () => clickOption(!isActiveCrowdfunding, setIsActiveCrowdfunding),
    },
    {
      icon: 'icon-ic-file',
      text: 'Documents',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveDocuments,
      isVisible: true,
      onClick: () => clickOption(!isActiveDocuments, setIsActiveDocuments),
    },
    {
      icon: 'icon-ic-employees-involved',
      text: 'Survey',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveSurvey,
      isVisible: true,
      onClick: () => clickOption(!isActiveSurvey, setIsActiveSurvey),
    },
    {
      icon: 'icon-ic-goods',
      text: 'Projects',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveProjects,
      isVisible: true,
      onClick: () => clickOption(!isActiveProjects, setIsActiveProjects),
    },
  ];

  const bottomMenu = [
    {
      icon: 'icon-icon-manage-employees',
      text: 'Activity',
      href: '#',
      showNotificationsIcon: true,
      disabled: true,
      isActive: false,
      isVisible: true,
    },
    {
      icon: 'icon-settings',
      text: 'Settings',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
      isVisible: true,
      submenu: [
        {
          icon: 'icon-httpslock',
          text: 'Account',
          showNotificationsIcon: true,
          disabled: false,
          isActive: isActiveAccount,
          isVisible: true,
          onClick: () => clickOption(!isActiveAccount, setIsActiveAccount),
        },
        {
          icon: 'icon-ic-menu-payments',
          text: 'Preferences',
          showNotificationsIcon: false,
          disabled: false,
          isActive: isActivePreferences,
          isVisible: true,
          onClick: () => clickOption(!isActivePreferences, setIsActivePreferences),
        },
        { separator: true },
        {
          icon: 'icon-ic-menu-auctions',
          text: 'Billing',
          showNotificationsIcon: false,
          disabled: false,
          isActive: isActiveBilling,
          isVisible: true,
          onClick: () => clickOption(!isActiveBilling, setIsActiveBilling),
        },
      ],
    },
  ];

  return (
    <div
      style={{
        marginLeft: '-1rem',
        marginBottom: '-1rem',
        minHeight: '1000px',
        position: 'relative',
      }}
    >
      <Sidebar {...args} mainMenu={mainMenu} bottomMenu={bottomMenu} />
    </div>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  collapsed: false,
  companyInfo: {
    logo: 'https://cdn.esolidar.com/companies/1112/whitelabels/1/5906ee2e-af17-45e0-88c5-57d4488c411e.jpg',
    name: 'Esolidar',
    esolidarLogo: 'https://static.esolidar.com/frontend/logo/esolidar/logo-xsmall.svg',
  },
};
