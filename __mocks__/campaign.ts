import Campaign from '../src/interfaces/campaign.types';
import company from './company';
import currency from './currency';
import user from './user';

const employee_recipient = {
  department: null,
  email: 'rocha@esolidar.com',
  name: 'António Rocha',
  user,
  user_id: 51974,
};

const image = {
  id: 336,
  crowdfunding_id: 122,
  streamImage: 'amazons3',
  image:
    'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/254/campaigns/112f4430-188b-4fa4-b8cb-71ee01a52929.jpg',
  image_type: 'image/jpeg',
  image_size: '149237',
  default: 1,
  thumb: 0,
  position: 0,
  updated_at: '2021-07-06 09:00:31',
  created_at: '2021-07-06 08:59:49',
  thumbs: {
    standard:
      'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/254/campaigns/112f4430-188b-4fa4-b8cb-71ee01a52929-STANDARD.jpg',
    detail:
      'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/254/campaigns/112f4430-188b-4fa4-b8cb-71ee01a52929-DETAIL.jpg',
    pin: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/254/campaigns/112f4430-188b-4fa4-b8cb-71ee01a52929-PIN.jpg',
    thumb:
      'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/254/campaigns/112f4430-188b-4fa4-b8cb-71ee01a52929-THUMB.jpg',
  },
};

const campaign: Campaign = {
  as_company: 1,
  bank_account_data: '{}',
  comments_count: 0,
  company_id: 254,
  contributes_count: 1,
  contribution_raised: 890,
  created_at: '2021-07-01 08:32:16',
  created_user_id: 51974,
  currency,
  currency_id: 1,
  description: 'teste',
  employee_recipient,
  end_date: '2021-09-01 23:59:59',
  given_directly_info: '',
  goal: 1000,
  iban: '',
  id: 121,
  images: [image],
  payment_method_direct_payment_to_esolidar: 1,
  payment_method_given_directly: 0,
  payment_method_iban: 0,
  payment_method_paypal: 0,
  paypal_account: null,
  product: {
    id: 143,
    payment_method_id: 10,
    payment_method: {
      created_at: '2019-11-20 11:44:36',
      id: 10,
      paypal: 1,
      sibs_cc: 0,
      sibs_checkout: 0,
      sibs_directdebit_sepa: 0,
      sibs_mbway: 0,
      sibs_multibanco: 0,
      stripe: 1,
      updated_at: '2020-01-29 10:10:12',
      utrust: 0,
    },
    type: 'crowdfunding',
    updated_at: '2021-04-01 10:35:24',
    created_at: '2021-04-01 10:34:26',
  },
  product_id: 230,
  recipient: 'individual',
  recipient_name: 'Rocha company',
  recipient_user_id: 51974,
  recipient_visible: 0,
  reward: 0,
  reward_description: 'asd',
  start_date: '2021-06-30 23:00:00',
  status: 'approved',
  timezone: 'Europe/Lisbon',
  title: 'Campanha privada de teste',
  updated_at: '2021-07-01 12:30:41',
  video: '',
};

export default campaign;
