import Auction from './auction.types';
import ImageThumbs from './imageThumbs.types';
import Ods from './ods.types';

interface Project {
  id: number;
  as_company: number;
  title: string;
  review_average: null;
  whitelabel_config: null;
  ods: Ods[];
  images: ImageThumbs[];
}

interface AuctionProject extends Auction {
  project: Project;
}

export default AuctionProject;
