import { Story, Meta } from '@storybook/react';
import Navigation from './Navigation';
import Props from './Navigation.types';

export default {
  title: 'Elements/Navigation',
  component: Navigation,
  parameters: {
    jest: ['Navigation.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ marginLeft: '-1rem' }}>
    <Navigation {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  menu: {
    topMenus: [
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
    ],
    centerMenus: [
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
    ],
    bottomMenus: [
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
      { icon: 'icon-icon-manage-employees', text: 'employees', href: '' },
    ],
  },
};
