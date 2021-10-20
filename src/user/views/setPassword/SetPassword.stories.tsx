import { Story, Meta } from '@storybook/react';
import SetPassword from './SetPassword';
import Props from './SetPassword.types';

export default {
  title: 'User/Views/SetPassword',
  component: SetPassword,
  parameters: {
    jest: ['SetPassword.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SetPassword {...args} />;

export const Set: Story<Props> = Template.bind({});
export const Reset: Story<Props> = Template.bind({});

Set.args = {
  type: 'set',
  onClickSend: email => alert(`Sending email: ${email}`),
};

Reset.args = {
  type: 'reset',
  onClickSend: email => alert(`Sending email: ${email}`),
};
