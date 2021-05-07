import { shallow } from 'enzyme';
import Step2 from '../index';

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

describe('Step2 component', () => {
  it('renders Step2 correctly', () => {
    const component = shallow(
      <Step2
        state={state}
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
        onChange={onChange}
        onChangCheckBoxInvoicing={onChangCheckBoxInvoicing}
      />
    );
    expect(component).toHaveLength(1);
    expect(component.find('Loading')).toHaveLength(1);
  });
});
