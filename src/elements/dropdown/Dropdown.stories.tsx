import { Story, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import Props from './Dropdown.types';

export default {
  title: 'Elements/Dropdown',
  component: Dropdown,
  parameters: {
    jest: ['Dropdown.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 0,
      text: 'Action',
      leftIcon: 'icon-icon-delete',
      onClick: () => alert('You clicked first item!'),
      show: true,
    },
    {
      id: 1,
      text: 'Another action',
      leftIcon: 'icon-icon-delete',
      rightIcon: 'icon-clock',
      href: '#/action-2',
      show: true,
    },
    {
      id: 2,
      text: 'Something else',
      rightIcon: 'icon-clock',
      href: '#/action-3',
      show: true,
      disabled: true,
    },
    {
      id: 3,
      text: 'Hidden',
      rightIcon: 'icon-clock',
      href: '#/action-3',
      show: false,
      disabled: true,
    },
  ],
  toggleIcon: 'icon-hamburger',
};
