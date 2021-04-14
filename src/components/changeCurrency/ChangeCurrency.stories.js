import ChangeCurrency from './ChangeCurrency';

export default {
  title: 'Components/ChangeCurrency',
  component: ChangeCurrency,
};

const Template = args => (
  <div style={{ background: '#163352', width: '100%', padding: '15px' }}>
    <ChangeCurrency {...args} />
  </div>
);

export const Default = Template.bind({});
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
  onChange: () => console.log(''),
};
