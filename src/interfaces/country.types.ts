import Currency from './currency.types';

interface Country {
  id: number;
  id_currency: number;
  name: string;
  name_en: string;
  id_continent: number;
  status: number;
  code: string;
  unit: string;
  auction_tax: number;
  crowdfunding_tax: number;
  npo_tax: number;
  user_tax: number;
  reseller_tax: number;
  donation_tax: number;
  transfer_tax: number;
  twilio_alpha_support: number;
  bank_transfer_format: null;
  dateAdded: string;
  currency: Currency;
}

export default Country;
