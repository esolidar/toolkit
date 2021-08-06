import Currency from './currency.types';
import ImageThumbs from './imageThumbs.types';
import Product from './product.types';
import User from './user.types';

interface EmployeeRecipient {
  email: string;
  name: string;
  user_id: number;
  department: null;
  user: User;
}

interface Image {
  id: number;
  crowdfunding_id: number;
  streamImage: string;
  image: string;
  image_type: string;
  image_size: string | number;
  default: number;
  thumb: number;
  position: number;
  updated_at: string;
  created_at: string;
  thumbs: ImageThumbs;
}
interface Campaign {
  id: number;
  product_id: number;
  company_id: number;
  title: string;
  description: string;
  video: string;
  reward: number;
  reward_description: string;
  goal: number;
  currency_id: number;
  start_date: string;
  end_date: string;
  timezone: string;
  recipient: string;
  recipient_name: string;
  recipient_visible: number;
  created_user_id: number;
  recipient_user_id: number;
  as_company: number;
  payment_method_paypal: number;
  paypal_account?: string;
  payment_method_given_directly?: number;
  given_directly_info?: string;
  payment_method_iban?: number;
  payment_method_direct_payment_to_esolidar?: number;
  iban?: string;
  status: string;
  updated_at: string;
  created_at: string;
  bank_account_data?: string;
  comments_count: number;
  contributes_count: number;
  contribution_raised: number;
  employee_recipient: EmployeeRecipient;
  product: Product;
  images: Image[];
  currency: Currency;
}

export default Campaign;
