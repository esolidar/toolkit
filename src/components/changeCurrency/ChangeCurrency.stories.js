import React from 'react';
import ChangeCurrency from './ChangeCurrency';
import variables from '../../assets/sass/_export.module.scss';

export default {
  title: 'Components/Footer/ChangeCurrency',
  component: ChangeCurrency,
};

const Template = args => (
  <div
    style={{ background: variables['theme-colors-dark-primary'], width: '100%', padding: '15px' }}
  >
    <ChangeCurrency {...args} />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ChangeCurrency.test.js'],
};
Default.args = {
  currentCurrency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03',
  },
  currencies: [
    {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: 1.114,
      symbol: '€',
      status: 1,
      lastUpdate: '2019-12-16 12:00:03',
    },
    {
      id: 1,
      name: 'U. S. Dollar',
      small: 'USD',
      value: 1.114,
      symbol: '€',
      status: 1,
      lastUpdate: '2019-12-16 12:00:03',
    },
  ],
  onChange: () => {},
};
