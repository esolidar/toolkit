import { Story, Meta } from '@storybook/react';
import CreatePassword from './CreatePassword';
import Props from './CreatePassword.types';

export default {
  title: 'User/Views/CreatePassword',
  component: CreatePassword,
  parameters: {
    jest: ['CreatePassword.test.js'],
  },
  argTypes: {
    type: {
      options: ['set', 'recover'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CreatePassword {...args} />;

export const SetPassword: Story<Props> = Template.bind({});
export const RecoverPassword: Story<Props> = Template.bind({});

SetPassword.args = {
  company: 'Esolidar',
  type: 'set',
  actions: {
    postNewPassword: () => {
      alert('Send');
    },
    postRecoverPassword: () => {
      alert('Send');
    },
  },
};

RecoverPassword.args = {
  company: 'Esolidar',
  type: 'recover',
  actions: {
    postNewPassword: () => {
      alert('Send');
    },
    postRecoverPassword: () => {
      alert('Send');
    },
  },
};
