import { Story, Meta } from '@storybook/react';
import SetPassword from './SetPassword';
import Props from './SetPassword.types';

export default {
  title: 'User/Views/SetPassword',
  component: SetPassword,
  parameters: {
    jest: ['SetPassword.test.js'],
  },
  argTypes: {
    type: {
      options: ['set', 'reset'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SetPassword {...args} />;

export const Set: Story<Props> = Template.bind({});
export const Reset: Story<Props> = Template.bind({});

Set.args = {
  type: 'set',
  origin: 'esolidar',
  onSuccess: () => {},
  actions: {
    postRecoverPassword: () => {},
  },
  reducers: {
    recoverPassword: {},
  },
};

Reset.args = {
  type: 'reset',
  origin: 'esolidar',
  onSuccess: () => {},
  actions: {
    postRecoverPassword: () => {},
  },
  reducers: {
    recoverPassword: {},
  },
};