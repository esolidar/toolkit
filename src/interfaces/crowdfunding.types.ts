import User from './user.types';
import Currency from './currency.types';
import Company from './company.types';
import Project from './project.types';
import Institution from './institution.types';

interface Image {
  id: number;
  crowdfunding_id: number;
  image: string;
}

interface Crowdfunding {
  id: number;
  user_id?: number;
  institution_id?: number;
  company_id: number;
  sub_category_id: null;
  sub_category?: any;
  product_id: number;
  product?: any;
  title: string;
  title_en?: string;
  tags?: string;
  description: string;
  description_en?: string;
  video?: string;
  reward: number;
  reward_description: string;
  goal?: number;
  minimum_contribution: number;
  currency_id: number;
  start_date: string;
  end_date: string;
  timezone: string;
  position: number;
  recipient_visible: number;
  status: string;
  esolidar_list: number;
  updated_at: string;
  created_at: string;
  contributes_count: number;
  contributes_sum: number;
  institution?: Institution;
  company?: Company;
  user?: User;
  projects?: Project[];
  images: Image[];
  currency: Currency;
  type?: string;
}

export default Crowdfunding;
