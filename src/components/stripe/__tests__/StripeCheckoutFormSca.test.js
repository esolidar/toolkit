import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StripeProvider } from 'react-stripe-elements';
import StripeCheckoutFormSca from '../StripeCheckoutFormSca';

configure({ adapter: new Adapter() });

const props = {
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

describe('StripeCheckoutFormSca component', () => {
  it('renders StripeCheckoutFormSca correctly', () => {
    const component = shallow(
      <StripeProvider stripe={null}>
        <StripeCheckoutFormSca {...props} />
      </StripeProvider>
    );

    expect(component).toHaveLength(1);
    component.unmount();
  });
});
