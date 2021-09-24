import Country from './country.types';
import Currency from './currency.types';

interface PostResponses {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

interface Datum {
  id: number;
  user_id: number;
  post_id: number;
  comment_id: null;
  as_company: number;
  as_company_id: number;
  text: string;
  updated_at: string;
  created_at: string;
  responses_count: number;
  user: User;
  company: Company;
  responses_aggregate: ResponsesAggregate;
}

interface Company {
  id: number;
  name: string;
  logo: string;
  cover_image: string;
  thumbs: CompanyThumbs;
  s3_logo_key: string;
  s3_cover_key: string;
  country?: Country | null;
  currency?: Currency | null;
}

interface CompanyThumbs {
  detail: string;
  thumb: string;
  cover_image: string;
}

interface ResponsesAggregate {
  comment_id: number;
  count: number;
  responses_count: number;
  user: null;
  company: null;
  responses_aggregate: any;
}

interface User {
  id: number;
  institution_id: null;
  firstName: string;
  lastName: string;
  image: string;
  streamImage: string;
  language: Language;
  currency: Currency;
  thumbs: UserThumbs;
  work_email: WorkEmail[];
  name: string;
  s3_key: string;
  institution: null;
  phones: Phone[];
}

interface Language {
  id: number;
  name: string;
  translate: string;
  status: number;
  locale: string;
  dateAdded: string;
}

interface Phone {
  id: number;
  user_id: number;
  phone: string;
  code: string;
  main: number;
  twilio_sid: string;
  verified: number;
  updatedDate: string;
  dateAdded: string;
}

interface UserThumbs {
  original: string;
  standard: string;
  thumb: string;
}

interface WorkEmail {
  company_id: number;
  name: string;
  role: string | null;
  department: null;
  user: null;
}

interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export default PostResponses;
