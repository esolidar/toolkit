import { Story, Meta } from '@storybook/react';
import LoginToInteract from './LoginToInteract';
import Props from './LoginToInteract.types';

export default {
  title: 'Components/LoginToInteract',
  component: LoginToInteract,
  parameters: {
    jest: ['LoginToInteract.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <LoginToInteract {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  onClick: () => {
    alert('You clicked the button!');
  },
};
