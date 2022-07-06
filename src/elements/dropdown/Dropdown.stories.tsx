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
export const CustomButton = Template.bind({});
export const Tooltip = Template.bind({});

Default.args = {
  items: [
    {
      text: 'Action',
      leftIcon: 'Edit2',
      rightIcon: 'ExternalLink',
      onClick: () => alert('You clicked first item!'),
    },
    {
      divider: true,
    },
    {
      text: 'Another action',
      leftIcon: 'Share3',
      href: '#/action-2',
    },
    {
      leftIcon: 'Trash',
      text: 'Something else',
      href: '#/action-3',
      disabled: true,
    },
    {
      text: 'Hidden',
      rightIcon: 'Lock',
      href: '#/action-3',
      show: false,
      disabled: true,
    },
  ],
  toggleIcon: 'MoreVertical',
};

CustomButton.args = {
  items: [
    {
      text: 'Action',
      leftIcon: 'Edit2',
      rightIcon: 'ExternalLink',
      onClick: () => alert('You clicked first item!'),
    },
    {
      divider: true,
    },
    {
      text: 'Another action',
      leftIcon: 'Share3',
      href: '#/action-2',
    },
    {
      leftIcon: 'Trash',
      text: 'Something else',
      href: '#/action-3',
      disabled: true,
    },
    {
      text: 'Hidden',
      rightIcon: 'Lock',
      href: '#/action-3',
      show: false,
      disabled: true,
    },
  ],
  customButton: (
    <Button
      extraClass="secondary"
      type="icon"
      icon={<Icon name="MoreVertical" size="sm" dataTestId="customButton" />}
    />
  ),
};

Tooltip.args = {
  items: [
    {
      text: 'Enabled option',
      leftIcon: 'Edit2',
      rightIcon: 'Lock',
      onClick: () => alert('You clicked first item!'),
      disabled: false,
      tooltip: {
        overlay: 'delete',
        placement: 'top',
        displayNone: false,
      },
    },
    {
      text: 'Disabled option',
      leftIcon: 'Edit2',
      onClick: () => alert('You clicked first item!'),
      disabled: true,
      tooltip: {
        overlay: 'delete',
        placement: 'top',
        displayNone: false,
      },
    },
  ],
};
