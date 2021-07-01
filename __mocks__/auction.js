import user from './user';
import currency from './currency';
import project from './project';

const auction = {
  id: 347,
  user_id: 1275,
  cause_id: null,
  project_id: null,
  sub_category_id: null,
  currency_id: 1,
  title: 'Novo leilão de empresa criado no toolkit',
  title_en: null,
  position: 1,
  description: 'Uma descrição teste',
  description_en: null,
  shipping_description: 'Os portes de envio serão à responsabilidade do vencedor.',
  shipping_description_en: null,
  payment_description:
    'O pagamento é realizado por transferência bancária. No final do leilão, será comunicado ao vencedor por email os dados bancários. O pagamento deve ser efetuado no prazo de quarenta e oito horas.',
  payment_description_en: null,
  tags: 'teste',
  bid_start: 1,
  buy_now: 0,
  goal: null,
  video: '',
  dateStart: '2020-02-08 07:00:00',
  dateLimit: '2020-12-30 16:00:00',
  timezone: 'Europe/Lisbon',
  bid_interval: 1,
  bid_max_interval: 100,
  tax: 10,
  acquisition_value: 0,
  status: 'A',
  show_on_esolidar: 'approved',
  private: 0,
  user_winner_notified: 1,
  rockinrio: 0,
  cc: 0,
  brand_id: 1,
  celebrity_id: null,
  updatedDate: '2021-06-22 16:34:18',
  dateAdded: '2021-01-14 16:33:21',
  last_bid: {
    id: 1898,
    auction_id: 347,
    value: 99,
    hidden: 0,
    stripelast4: null,
    dateAdded: '2021-06-22 16:39:24',
    user,
  },
  images: [
    {
      id: 204,
      auction_id: 347,
      streamImage: 'amazons3',
      image_name:
        'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/8d929244-b007-4007-9001-87435be5f808.jpg',
      image_type: 'image/jpeg',
      image_size: '30456',
      default: 0,
      thumb: 0,
      position: 4,
      fb_image: 0,
      lastUpdated: '2021-01-18 19:32:59',
      dateAdded: '2019-12-27 11:59:00',
      thumbs: {
        standard:
          'https://cdn.testesolidar.com/products/8d929244-b007-4007-9001-87435be5f808-STANDARD.jpg',
        detail:
          'https://cdn.testesolidar.com/products/8d929244-b007-4007-9001-87435be5f808-DETAIL.jpg',
        pin: 'https://cdn.testesolidar.com/products/8d929244-b007-4007-9001-87435be5f808-PIN.jpg',
        thumb:
          'https://cdn.testesolidar.com/products/8d929244-b007-4007-9001-87435be5f808-THUMB.jpg',
      },
      s3_key: 'products/8d929244-b007-4007-9001-87435be5f808.jpg',
    },
  ],
  currency,
  recipient: null,
  brand: {
    id: 1,
    name: 'Amazonia Live change777',
    username: 'teste13',
    logo: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e.png',
    cover:
      'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e.jpeg',
    logo_thumbs: {
      standard:
        'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-STANDARD.png',
      detail: 'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-DETAIL.png',
      thumb: 'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-THUMB.png',
    },
    cover_thumbs: {
      standard:
        'https://cdn.testesolidar.com/brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e-STANDARD.jpeg',
      detail:
        'https://cdn.testesolidar.com/brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e-DETAIL.jpeg',
    },
    s3_logo_key: 'brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e.png',
    s3_cover_key: 'brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e.jpeg',
  },
  project,
};

export default auction;
