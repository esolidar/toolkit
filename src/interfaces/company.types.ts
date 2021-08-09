import Currency from './currency.types';
import Country from './country.types';

interface CompanyThumbs {
  detail: string;
  thumb: string;
  cover_image: string;
}

interface Company {
  id: number;
  name: string;
  logo: string;
  country_id?: number;
  currency_id?: number;
  thumbs: CompanyThumbs;
  s3_logo_key: string;
  s3_cover_key?: string;
  country?: Country;
  currency?: Currency;
  cover_image?: string;
}

export default Company;
