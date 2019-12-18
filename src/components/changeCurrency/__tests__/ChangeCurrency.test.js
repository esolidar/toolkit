/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import ChangeCurrency from '../ChangeCurrency';

const changed = jest.fn();
const propCurrentCurrency = {
  id: 1, name: 'Euro', small: 'EUR', value: 1.114, symbol: '€', status: 1, lastUpdate: '2019-12-16 12:00:03',
};
const propCurrencies = [
  {
    id: 1, name: 'Euro', small: 'EUR', value: 1.114, symbol: '€', status: 1, lastUpdate: '2019-12-16 12:00:03',
  },
  {
    id: 1, name: 'U. S. Dollar', small: 'USD', value: 1.114, symbol: '€', status: 1, lastUpdate: '2019-12-16 12:00:03',
  },
];

describe('ChangeCurrency component', () => {
  it('renders ChangeCurrency correctly', () => {
    const component = shallow(
      <ChangeCurrency
        onChange={changed}
        currentCurrency={propCurrentCurrency}
        currencies={propCurrencies}
      />,
    );
    expect(component).toHaveLength(1);
    expect(component.find('DropdownButton')).toHaveLength(1);
  });

  // Button click
  it('renders ChangeCurrency and simulates click events', () => {
    const component = shallow(
      <ChangeCurrency
        onChange={changed}
        currentCurrency={propCurrentCurrency}
        currencies={propCurrencies}
      />,
    );
    expect(component.find('DropdownItem')).toHaveLength(2);
    component.find('DropdownItem').first().dive().find('SafeAnchor')
      .simulate('click');
    expect(changed.mock.calls.length).toEqual(1);
  });
});
