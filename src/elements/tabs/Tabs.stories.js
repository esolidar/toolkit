import Tabs from './Tabs';

export default {
  title: 'Elements/Tabs',
  component: Tabs,
};

const Template = args => <Tabs {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Tabs.test.js'],
};
Default.args = {
  defaultActiveKey: 'personal',
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
      key: 'nonprofit',
      title: 'Nonprofit',
    },
  ],
  onChange: () => {},
};
