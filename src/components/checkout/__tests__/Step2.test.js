import React from 'react';
import { shallow } from 'enzyme';
import Step2 from '../Step2';

const state = {
  isLoadingPayment: false,
  errors: {},
  receipt: 1,
  nif: '123456789',
  invoice_address: '',
  agree: 1,
};
const stateLoading = {
  isLoadingPayment: true,
  errors: {},
  receipt: 1,
  nif: '123456789',
  invoice_address: '',
};
const onChangCheckBoxInvoicing = () => {};
const onChange = () => {};
const translateMessage = () => 'Some text';

describe('Step2 component', () => {
  it('renders Step2 correctly', () => {
    const component = shallow(
      <Step2
        state={state}
        translateMessage={translateMessage}
        onChange={onChange}
        onChangCheckBoxInvoicing={onChangCheckBoxInvoicing}
      />
    );
    expect(component).toHaveLength(1);
    expect(component.find('InvoicingData')).toHaveLength(1);
  });

  it('renders Step2 loading', () => {
    const component = shallow(
      <Step2
        state={stateLoading}
        translateMessage={translateMessage}
        onChange={onChange}
        onChangCheckBoxInvoicing={onChangCheckBoxInvoicing}
      />
    );
    expect(component).toHaveLength(1);
    expect(component.find('Loading')).toHaveLength(1);
  });
});
