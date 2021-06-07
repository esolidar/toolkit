import React from 'react';
import { shallow } from 'enzyme';
import InvoicingData from '../InvoicingData';

const state = {
  isLoadingPayment: false,
  errors: {},
  receipt: 1,
  nif: '123456789',
  invoice_address: '',
  agree: 1,
};

const onChangCheckBoxInvoicing = () => {};
const onChange = () => {};

describe('InvoicingData component', () => {
  it('renders InvoicingData correctly', () => {
    const component = shallow(
      <InvoicingData
        state={state}
        onChange={onChange}
        onChangCheckBoxInvoicing={onChangCheckBoxInvoicing}
      />
    );
    expect(component).toHaveLength(1);
  });
});
