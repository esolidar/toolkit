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
  const [isActiveAccelerator, setIsActiveAccelerator] = useState(false);
  const [isActiveNeeds, setIsActiveNeeds] = useState(false);
  const [isActiveDocuments, setIsActiveDocuments] = useState(false);
  const [isActiveSurvey, setIsActiveSurvey] = useState(false);

  const [isActiveConfig, setIsActiveConfig] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(false);
  const [isActivePreferences, setIsActivePreferences] = useState(false);
  const [isActiveSecurity, setIsActiveSecurity] = useState(false);
  const [isActiveBilling, setIsActiveBilling] = useState(false);

  const clickOption = (state, setState) => {
    setIsActiveFeed(false);
    setIsActiveAccelerator(false);
    setIsActiveNeeds(false);
    setIsActiveDocuments(false);
    setIsActiveSurvey(false);
    setIsActiveConfig(false);
    setIsActiveAccount(false);
    setIsActivePreferences(false);
    setIsActiveSecurity(false);
    setIsActiveBilling(false);
    setState(state);
  };

  const mainMenu = [
    {
      icon: 'Feed',
      text: 'Social Feed',
      showNotificationsIcon: true,
      disabled: false,
      isActive: isActiveFeed,
      isVisible: true,
      onClick: () => clickOption(!isActiveFeed, setIsActiveFeed),
    },
    {
      icon: 'Accelerator',
      text: 'Accelerator',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveAccelerator,
      isVisible: true,
      onClick: () => clickOption(!isActiveAccelerator, setIsActiveAccelerator),
    },
    {
      icon: 'Needs',
      text: 'Needs',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveNeeds,
      isVisible: true,
      onClick: () => clickOption(!isActiveNeeds, setIsActiveNeeds),
    },
    {
      icon: 'FileText',
      text: 'Documents',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveDocuments,
      isVisible: true,
      onClick: () => clickOption(!isActiveDocuments, setIsActiveDocuments),
    },
    {
      icon: 'Surveys',
      text: 'Survey',
      showNotificationsIcon: false,
      disabled: false,
      isActive: isActiveSurvey,
      isVisible: true,
      onClick: () => clickOption(!isActiveSurvey, setIsActiveSurvey),
    },
  ];

  const bottomMenu = [
    {
      icon: 'Activity',
      text: 'Activity',
      href: '#',
      showNotificationsIcon: true,
      disabled: true,
      isActive: false,
      isVisible: true,
    },
    {
      icon: 'Settings',
      text: 'Settings',
      href: '#',
      showNotificationsIcon: false,
      disabled: false,
      isActive: false,
      isVisible: true,
      submenu: [
        {
          icon: 'WebsiteConfigurator',
          text: 'Site configuration',
          showNotificationsIcon: true,
          disabled: false,
          isActive: isActiveConfig,
          isVisible: true,
          onClick: () => clickOption(!isActiveConfig, setIsActiveConfig),
        },
        { separator: true },
        {
          icon: 'UserAccountSeetings',
          text: 'Account settings',
          showNotificationsIcon: true,
          disabled: false,
          isActive: isActiveAccount,
          isVisible: true,
          onClick: () => clickOption(!isActiveAccount, setIsActiveAccount),
        },
        {
          icon: 'Preferences',
          text: 'Preferences',
          showNotificationsIcon: false,
          disabled: false,
          isActive: isActivePreferences,
          isVisible: true,
          onClick: () => clickOption(!isActivePreferences, setIsActivePreferences),
        },
        {
          icon: 'Security',
          text: 'Privacy & Security',
          showNotificationsIcon: false,
          disabled: false,
          isActive: isActiveSecurity,
          isVisible: true,
          onClick: () => clickOption(!isActiveSecurity, setIsActiveSecurity),
        },
        {
          icon: 'CreditCard',
          text: 'Billing information',
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
