import { Story, Meta } from '@storybook/react';
import CreatePassword from './CreatePassword';
import Props from './CreatePassword.types';
import setPassword404 from '../../../../__mocks__/setPassword-404';

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
export const SetPassword404: Story<Props> = Template.bind({});

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
  reducers: {
    setNewPasswordResponse: null,
  },
};

SetPassword404.args = {
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
  reducers: {
    setNewPasswordResponse: setPassword404,
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
  reducers: {
    setNewPasswordResponse: null,
  },
};
