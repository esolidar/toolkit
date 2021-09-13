export type CurrencySmall =
  | string
  | 'EUR'
  | 'USD'
  | 'CAD'
  | 'GBP'
  | 'AUD'
  | 'NZD'
  | 'CHF'
  | 'HKD'
  | 'SGD'
  | 'SEK'
  | 'DKK'
  | 'PLN'
  | 'NOK'
  | 'CZK'
  | 'ILS'
  | 'MXN'
  | 'BRL'
  | 'PHP'
  | 'THB';
interface Currency {
  id: number;
  name: string;
  small: CurrencySmall;
  value: string;
  symbol: string;
  status: boolean;
  lastUpdate: string;
}

export default Currency;
