import StripeCreditCard from './StripeCreditCard';

export default {
  title: 'Components/StripeCreditCard',
  component: StripeCreditCard,
};

const Template = args => <StripeCreditCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  submitStripePayment: () => {},
  loadingStripe: false,
  total: 100,
  currencyId: 1,
  updateState: () => {},
  order: {},
  env: {
    stripe: {
      publishableKey: 'pk_test_k1GFy6gdCeEfB8yfQWVWEQvZ',
      publishableKeyBr: 'pk_test_Og1YsCuVnh08BMh7gNbBKZ9z00NpxiYELH',
    },
  },
};
