import user from './user';
import currency from './currency';
import project from './project';
import Auction from '../src/interfaces/auction.types';
import auctionProject from './auctionProject';

const auction = {
  id: 445,
  user_id: 1124,
  cause_id: null,
  project_id: 72,
  sub_category_id: 54,
  currency_id: 1,
  title: 'Leilão do Pedro',
  title_en: null,
  position: 1,
  description: 'teste',
  description_en: null,
  shipping_description: '6y6y',
  shipping_description_en: null,
  payment_description: 'y6y6y6',
  payment_description_en: null,
  tags: 'null,lol',
  bid_start: 6,
  buy_now: 0,
  goal: null,
  video: null,
  dateStart: '2021-07-07 23:00:00',
  dateLimit: '2021-10-29 23:00:00',
  timezone: 'Europe/Lisbon',
  bid_interval: 1,
  bid_max_interval: 100,
  tax: 0,
  acquisition_value: 0,
  status: 'A',
  show_on_esolidar: '',
  private: 0,
  user_winner_notified: 0,
  rockinrio: 0,
  cc: 0,
  brand_id: 95,
  celebrity_id: null,
  updatedDate: '2021-07-14 15:11:16',
  dateAdded: '2021-07-08 15:23:51',
  laravel_through_key: 254,
  last_bid: {
    id: 1684,
    auction_id: 445,
    value: 90,
    hidden: 1,
    stripelast4: null,
    dateAdded: '2021-07-30 13:14:02',
    user,
  },
  images: [
    {
      id: 1772,
      auction_id: 445,
      streamImage: 'amazons3',
      image_name:
        'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/products/d937c99c-9dc3-405f-a06b-774b92c0b583.jpeg',
      image_type: 'image/jpeg',
      image_size: '1109404',
      default: 0,
      thumb: 0,
      position: 1,
      fb_image: 0,
      lastUpdated: '2021-07-08 15:23:51',
      dateAdded: '2021-07-08 15:23:17',
      thumbs: {
        standard:
          'https://cdn.testesolidar.com/products/d937c99c-9dc3-405f-a06b-774b92c0b583-STANDARD.jpeg',
        detail:
          'https://cdn.testesolidar.com/products/d937c99c-9dc3-405f-a06b-774b92c0b583-DETAIL.jpeg',
        pin: 'https://cdn.testesolidar.com/products/d937c99c-9dc3-405f-a06b-774b92c0b583-PIN.jpeg',
        thumb:
          'https://cdn.testesolidar.com/products/d937c99c-9dc3-405f-a06b-774b92c0b583-THUMB.jpeg',
      },
      s3_key: 'products/d937c99c-9dc3-405f-a06b-774b92c0b583.jpeg',
    },
  ],
  bids: [
    {
      id: 1684,
      auction_id: 445,
      value: 90,
      hidden: 1,
      stripelast4: null,
      dateAdded: '2021-07-30 13:14:02',
      user,
    },
  ],
  user,
  cause: null,
  currency,
  project: auctionProject,
};

export default auction;
