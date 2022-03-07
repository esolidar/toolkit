import { Story, Meta } from '@storybook/react';
import Props from './Dropdown.types';
import Dropdown from './Dropdown';
import Button from '../button';
import Icon from '../icon';

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
      rightIcon: 'ExternalLink',
      onClick: () => alert('You clicked first item!'),
    },
    {
      id: 2,
      divider: true,
    },
    {
      id: 1,
      text: 'Another action',
      leftIcon: 'Share3',
      href: '#/action-2',
    },
    {
      id: 3,
      leftIcon: 'Trash',
      text: 'Something else',
      href: '#/action-3',
      disabled: true,
    },
    {
      id: 4,
      text: 'Hidden',
      rightIcon: 'Lock',
      href: '#/action-3',
      show: false,
      disabled: true,
    },
  ],
  toggleIcon: 'MoreVertical',
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  items: [
    {
      id: 0,
      text: 'Action',
      leftIcon: 'Edit2',
      rightIcon: 'ExternalLink',
      onClick: () => alert('You clicked first item!'),
    },
    {
      id: 2,
      divider: true,
    },
    {
      id: 1,
      text: 'Another action',
      leftIcon: 'Share3',
      href: '#/action-2',
    },
    {
      id: 3,
      leftIcon: 'Trash',
      text: 'Something else',
      href: '#/action-3',
      disabled: true,
    },
    {
      id: 4,
      text: 'Hidden',
      rightIcon: 'Lock',
      href: '#/action-3',
      show: false,
      disabled: true,
    },
  ],
  toggleIcon: 'MoreVertical',
  customButton: (
    <Button
      extraClass="secondary"
      type="icon"
      icon={<Icon name="MoreVertical" size="sm" dataTestId="customButton" />}
    />
  ),
};
