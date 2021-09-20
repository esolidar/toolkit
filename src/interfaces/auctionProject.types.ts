import Ods from './ods.types';

interface Projectimages {
  id: number;
  project_id: number;
  streamImage: string;
  image: string;
  image_type: string;
  image_size: number;
  default: number;
  position: number;
  updated_at: string;
  created_at: string;
}

interface AuctionProject {
  id: number;
  as_company: number;
  title: string;
  review_average: null;
  whitelabel_config: null;
  ods: Ods[];
  images: Projectimages[];
}

export default AuctionProject;
