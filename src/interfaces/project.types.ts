import WhitelabelConfig from './whitelabelConfig.types';
import Ods from './ods.types';
import User from './user.types';
// import Crowdfunding from './crowdfunding.types';
// import Auction from './auction.types';

interface ProjectCategory {
  id: number;
  whitelabel_id: number;
  name: string;
  name_tag?: string;
  summary?: string;
  status: number;
  image?: string;
  updated_at: string;
  created_at: string;
}

interface ProjectImage {
  id: number;
  crowdfunding_id?: number;
  streamImage: string;
  image: string;
  image_type: string;
  image_size: number | string;
  default: number;
  position: number;
  updated_at: string;
  created_at: string;
  project_id?: number;
}

interface Project {
  id: number;
  whitelabel_id: number;
  category_id: number;
  user_id: number;
  as_company: number;
  cover?: string;
  title: string;
  description: string;
  form?: string;
  private_form?: string;
  status: string;
  uuid: string;
  status_reason: string;
  updated_at: string;
  created_at: string;
  review_average: number;
  whitelabel_config: WhitelabelConfig;
  ods: Ods[];
  user?: User;
  project_category: ProjectCategory;
  images: ProjectImage[];
  // auctions?: Auction[];
  // crowdfundings?: Crowdfunding[];
}

export default Project;
