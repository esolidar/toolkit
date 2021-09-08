/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import SwitchAccountsModal from './SwitchAccountsModal';
import Props from './SwitchAccountsModal.types';
import User from '../../../__mocks__/user';
import Company from '../../../__mocks__/company';

export default {
  title: 'Components/SwitchAccountsModal',
  component: SwitchAccountsModal,
  parameters: {
    jest: ['SwitchAccountsModal.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SwitchAccountsModal {...args} />;

export const Default: Story<Props> = Template.bind({});
export const SelectCompany: Story<Props> = Template.bind({});

Default.args = {
  title: 'header.switchAccounts',
  numberOfAccounts: 2,
  subtitle: 'switchAccounts.subtitle',
  isOpen: true,
  user: User,
  companies: [Company],
  handleClickSelectUser: () => {
    alert('You will be redirected to whitelabel');
  },
  handleClickSelectCompany: () => {
    alert('You will be redirected to business');
  },
};

SelectCompany.args = {
  title: 'login.choose.company',
  isOpen: true,
  companies: [Company, Company, Company],
  handleClickSelectUser: () => {
    alert('You will be redirected to whitelabel');
  },
  handleClickSelectCompany: () => {
    alert('You will be redirected to business');
  },
};
