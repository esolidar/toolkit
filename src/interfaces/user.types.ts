import Currency from './currency.types';
import Language from './language.types';
import Thumbs from './thumbs.types';
import Phone from './phone.types';
import Institution from './institution.types';

interface WorkEmail {
  company_id: number;
  name: string;
  role: string;
  department?: string;
  user?: null;
}

interface User {
  id: number;
  fb_id?: number;
  institution_id?: number;
  currency: Currency;
  country: number;
  language: Language;
  firstName: string;
  lastName: string;
  email: string;
  fb_email?: string;
  fb_email_confirmed: number;
  code: string;
  type: string;
  default_institution_id?: number;
  auth_facebook: number;
  auth_email: number;
  streamImage: string;
  image: string;
  summary: string;
  nif: string;
  receipt: number;
  mobile_phone?: string;
  link?: string;
  birthday: string;
  gender?: string;
  hometown?: string;
  location?: string;
  locale: string;
  verified: number;
  subscribe: number;
  notifications: number;
  perms: number;
  status: string;
  paypal_mail?: string;
  sent_address?: string;
  real_address?: string;
  longitude?: string;
  latitude?: string;
  free_taxes: number;
  thumb?: string;
  is_admin: number;
  remember_token: null;
  bank_transfer?: string;
  updatedTime: string;
  lastUpdate: string;
  lastLogin: string;
  dateAdded: string;
  thumbs?: Thumbs;
  work_email?: Array<WorkEmail>;
  name: string;
  s3_key?: string;
  institution?: Institution;
  phones?: Array<Phone>;
  sync_friends: number;
  sync_likes: number;
  private_beta: number;
  import_bewarket: number;
  ws_import: number;
  only_mysells: number;
  deauthorize_times: number;
  invite_friends?: number;
}

export default User;
