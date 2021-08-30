import Currency from './currency.types';
import Country from './country.types';

interface CompanyThumbs {
  detail: string;
  thumb: string;
  cover_image: string;
}

interface Company {
  id: number;
  code: string;
  name: string;
  email: string;
  vat: string;
  company_id?: number;
  logo: string;
  nipc: string;
  logo_stream: string;
  about: string;
  presentation: string;
  phone: string;
  language_id: number;
  country_id?: number;
  currency_id?: number;
  facebook_link?: string;
  thumbs: CompanyThumbs;
  s3_logo_key: string;
  s3_cover_key?: string;
  country?: Country;
  currency?: Currency;
  cover_image?: string;
  instagram_link: string;
  twitter_link: string;
  website_link: string;
  status: string;
  profile_status: number;
  raized_status: number;
  employee_range_id: number;
  slack_webhook_url: string;
  bank_transfer: string;
  updated_at: string;
  created_at: string;
  whitelabel?: any;
  subscription?: any;
}

export default Company;
