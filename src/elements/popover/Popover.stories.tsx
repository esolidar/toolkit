import { Story, Meta } from '@storybook/react';
import Popover from './Popover';
import Props from './Popover.types';
import ProfileAvatar from '../../components/profileAvatar';

export default {
  title: 'Elements/Popover',
  component: Popover,
  parameters: {
    jest: ['Popover.test.js'],
  },
  argTypes: {
    placement: {
      options: [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      control: { type: 'radio' },
    },
    trigger: {
      options: ['hover', 'click', 'focus'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ paddingTop: '180px', textAlign: 'center' }}>
    <Popover {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithHeader: Story<Props> = Template.bind({});

Default.args = {
  popoverBodyChildren: (
    <div>
      <p>name@email.com</p>
      <p>Tel. +351 345 354 234</p>
    </div>
  ),
  children: <span>Joel Calheiros</span>,
};

WithHeader.args = {
  popoverHeaderChildren: (
    <ProfileAvatar
      thumb="https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg"
      name="Joel F. Calheiros"
    />
  ),
  popoverBodyChildren: (
    <div>
      <p>name@email.com</p>
      <p>Tel. +351 345 354 234</p>
    </div>
  ),
  children: <span>Joel Calheiros</span>,
};
