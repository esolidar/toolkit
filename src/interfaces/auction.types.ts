// import AuctionProject from './auctionProject';
import Bid from './bid.types';
import Currency from './currency.types';
import ImageThumbs from './imageThumbs.types';
import User from './user.types';

interface AuctionImage {
  id: number;
  auction_id: number;
  streamImage: string;
  image_name: string;
  image_type: string;
  image_size: string | number;
  default: number;
  thumb: number;
  position: number;
  fb_image: number;
  lastUpdated: string;
  dateAdded: string;
  thumbs: ImageThumbs;
  s3_key: string;
}

interface Auction {
  id: number;
  user_id?: number;
  cause_id?: number;
  project_id?: number;
  sub_category_id?: number;
  currency_id: number;
  title: string;
  title_en?: string;
  position: number;
  description: string;
  description_en?: string;
  shipping_description: string;
  shipping_description_en?: string;
  payment_description: string;
  payment_description_en?: string;
  tags?: string;
  bid_start: number;
  buy_now?: number;
  goal?: number;
  video?: string;
  dateStart: string;
  dateLimit: string;
  timezone: string;
  bid_interval: number;
  bid_max_interval: number;
  tax: number;
  acquisition_value?: number;
  status: string;
  show_on_esolidar: string;
  private: number;
  user_winner_notified: number;
  rockinrio: number;
  cc: number;
  brand_id: number;
  celebrity_id: null;
  updatedDate: string;
  dateAdded: string;
  laravel_through_key: number;
  last_bid: Bid;
  images: AuctionImage[];
  bids: Bid[];
  user?: User;
  cause?: any;
  currency: Currency;
  // project?: AuctionProject;
  last_bid_value?: Bid;
}

export default Auction;
