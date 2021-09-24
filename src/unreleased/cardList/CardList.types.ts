/* eslint-disable camelcase */
import Crowdfunding from '../../interfaces/crowdfunding.types';
import Auction from '../../interfaces/auction.types';
import ImageThumbs from '../../interfaces/imageThumbs.types';
import Currency from '../../interfaces/currency.types';

interface Button {
  url?: string;
  text?: string;
}

interface Footer {
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  perPageOptions?: number[];
  total: number;
  current_page: number;
  per_page: number;
}

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

interface Image extends AuctionImage {
  id: number;
  crowdfunding_id: number;
  image: string;
}

interface Card
  extends Omit<Auction, 'sub_category_id' | 'images' | 'currency'>,
    Omit<Crowdfunding, 'sub_category_id' | 'images' | 'currency'> {
  sub_category_id: null;
  images: Image[];
  currency: Currency;
}

export interface List {
  current_page?: number;
  from?: number;
  last_page?: number;
  per_page: number | string;
  to?: number;
  total: number;
  data: Card[];
}

export interface Props {
  title?: string;
  subtitle?: string;
  list: List;
  button?: Button;
  communityUrl?: string;
  lang: 'pt' | 'br' | 'en';
  footer?: Footer;
  onClickThumb(id: number): void;
}
