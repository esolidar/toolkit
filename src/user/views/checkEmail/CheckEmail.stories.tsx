import { linkTo } from '@storybook/addon-links';
import { Story, Meta } from '@storybook/react';
import CheckEmail from './CheckEmail';
import Props from './CheckEmail.types';

export default {
  title: 'User/Views/CheckEmail',
  component: CheckEmail,
  parameters: {
    jest: ['CheckEmail.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CheckEmail {...args} />;
export const Default: Story<Props> = Template.bind({});

Default.args = {
  email: 'email@esolidar.com',
  reducers: {
    recoverPass: {},
  },
  actions: {
    handleChangeEmail: linkTo('User/Views/SetPassword'),
    handleResendEmail: () => {
      alert('handleResendEmail');
    },
    showAlert: () => {
      alert('showAlert');
    },
  },
};
