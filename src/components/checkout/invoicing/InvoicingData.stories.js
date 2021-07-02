import React from 'react';
import InvoicingData from './InvoicingData';

export default {
  title: 'Components/Checkout/InvoicingData',
  component: InvoicingData,
};

const Template = args => <InvoicingData {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['InvoicingData.test.js'],
};
Default.args = {
  state: {
    errors: {},
    receipt: 1,
    nif: '123456789',
    invoice_address: '',
    agree: 1,
  },
  onChangCheckBoxInvoicing: () => {},
  onChange: () => {},
};
