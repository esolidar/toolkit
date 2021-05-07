import { shallow } from 'enzyme';
import CreditCardList from '../index';

const props = {
  getStripeCreditCardlist: jest.fn(),
  postStripeCreditCard: jest.fn(),
  stripeCreditCardList: {},
  stripeCreditCard: {},
  showAddBtnCreditCard: true,
  selectedCard: jest.fn(),
  env: {
    publishableKey: 'key',
  },
};

describe('CreditCardList component', () => {
  it('renders CreditCardList correctly', () => {
    const component = shallow(<CreditCardList {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders Dropdown correctly', () => {
    const component = shallow(<CreditCardList {...props} />);
    expect(component.find('Loading').length).toBe(1);
  });
});
