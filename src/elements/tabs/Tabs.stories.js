import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Elements/Tabs',
  component: Tabs,
  parameters: {
    jest: ['Tabs.test.tsx'],
  },
};

const Template = args => <Tabs {...args} />;

export const Default = Template.bind({});
export const Large = Template.bind({});
export const WithCounter = Template.bind({});
export const WithIcon = Template.bind({});

Default.args = {
  defaultActiveKey: 'corporate',
  id: 'tabs',
  tabsList: [
    {
      content: <p className="p-3">Corporate content</p>,
      disabled: false,
      key: 'corporate',
      title: 'Corporate',
    },
    {
      content: <p className="p-3">Personal content</p>,
      disabled: false,
      key: 'personal',
      title: 'Personal',
    },
    {
      content: <p className="p-3">Nonprofit content</p>,
      disabled: true,
      key: 'disabled',
      title: 'Disabled',
    },
  ],
  onChange: () => {},
};

Large.args = {
  defaultActiveKey: 'corporate',
  id: 'tabs',
  tabsList: [
    {
      content: <p className="p-3">Corporate content</p>,
      disabled: false,
      key: 'corporate',
      title: 'Corporate',
    },
    {
      content: <p className="p-3">Personal content</p>,
      disabled: false,
      key: 'personal',
      title: 'Personal',
    },
    {
      content: <p className="p-3">Nonprofit content</p>,
      disabled: true,
      key: 'disabled',
      title: 'Disabled',
    },
  ],
  onChange: () => {},
  size: 'lg',
};

WithCounter.args = {
  defaultActiveKey: 'corporate',
  id: 'tabs',
  tabsList: [
    {
      content: <p className="p-3">Corporate content</p>,
      disabled: false,
      key: 'corporate',
      title: 'Corporate',
      counter: 23,
    },
    {
      content: <p className="p-3">Personal content</p>,
      disabled: false,
      key: 'personal',
      title: 'Personal',
      counter: 1,
    },
    {
      content: <p className="p-3">Nonprofit content</p>,
      disabled: true,
      key: 'disabled',
      title: 'Disabled',
      counter: 11,
    },
  ],
  onChange: () => {},
};

WithIcon.args = {
  defaultActiveKey: 'corporate',
  id: 'tabs',
  tabsList: [
    {
      content: <p className="p-3">Corporate content</p>,
      disabled: false,
      key: 'corporate',
      title: 'Corporate',
      icon: 'MyProjects',
    },
    {
      content: <p className="p-3">Personal content</p>,
      disabled: false,
      key: 'personal',
      title: 'Personal',
      icon: 'Projects',
    },
    {
      content: <p className="p-3">Nonprofit content</p>,
      disabled: true,
      key: 'disabled',
      title: 'Disabled',
      icon: 'Projects',
    },
  ],
  onChange: () => {},
};
