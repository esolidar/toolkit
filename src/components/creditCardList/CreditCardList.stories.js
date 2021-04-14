import CreditCardList from './CreditCardList';

export default {
  title: 'Components/CreditCardList',
  component: CreditCardList,
};

const Template = args => <CreditCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  getStripeCreditCardlist: () => {},
  postStripeCreditCard: () => {},
  stripeCreditCardList: {},
  stripeCreditCard: {},
  showAddBtnCreditCard: true,
  // FIXME: env: env.stripe,
};
