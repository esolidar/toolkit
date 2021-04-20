import BankAccount from './BankAccount';

export default {
  title: 'Components/BankAccount',
  component: BankAccount,
};

const Template = args => <BankAccount {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['BankAccount.test.js'],
};
Default.args = {
  countryId: 208,
  color: 'green',
  postBankTransfer: () => {},
  updateLocalstorage: () => {},
  getBankTransfer: {},
  bankTransfer: null,
};
