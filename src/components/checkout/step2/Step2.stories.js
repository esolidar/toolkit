import Step2 from './Step2';

export default {
  title: 'Components/Checkout/Step2',
  component: Step2,
};

const Template = args => <Step2 {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Step2.test.js'],
};
Default.args = {
  state: {
    isLoadingPayment: false,
    errors: {},
    receipt: 1,
    nif: '123456789',
    invoice_address: '',
    agree: 1,
  },
  onChangCheckBoxInvoicing: () => {},
  onChange: () => {},
};
