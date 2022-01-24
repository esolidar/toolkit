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
      leftIcon: 'Edit2',
      onClick: () => alert('You clicked first item!'),
    },
    {
      id: 1,
      text: 'Another action',
      leftIcon: 'Settings',
      rightIcon: 'Share3',
      href: '#/action-2',
    },
    {
      id: 2,
      text: 'Something else',
      rightIcon: 'Trash',
      href: '#/action-3',
      disabled: true,
    },
    {
      id: 3,
      text: 'Hidden',
      rightIcon: 'Lock',
      href: '#/action-3',
      show: false,
      disabled: true,
    },
  ],
  toggleIcon: 'MoreVertical',
};
