import Crowdfunding from '../src/interfaces/crowdfunding.types';
import company from './company';
import currency from './currency';
import project from './project';
// import institution from './institution';

const image = {
  crowdfunding_id: 133,
  id: 292,
  image: 'crowdfundings/fotoperfil-69b5f478-67a6-40c6-913d-3455a9efb7cc.jpg',
};

const crowdfunding: Crowdfunding = {
  company,
  company_id: 254,
  contributes_count: 7,
  contributes_sum: 100,
  created_at: '2021-04-01 10:34:26',
  currency,
  currency_id: 1,
  description: 'Esta campanha vai ajudar o Pedro a melhorar a produção na sua horta no Polo Nórte.',
  description_en: null,
  end_date: '2021-09-01 00:00:00',
  esolidar_list: 0,
  goal: 300,
  id: 133,
  images: [image],
  institution_id: 1,
  minimum_contribution: 3,
  position: 0,
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
  product_id: 143,
  projects: [project],
  recipient_visible: 1,
  reward: 0,
  reward_description: 'Um beijinho',
  start_date: '2021-03-31 23:00:00',
  status: 'approved',
  sub_category: null,
  sub_category_id: null,
  tags: null,
  timezone: 'Europe/Lisbon',
  title: 'Campanha para ajudar o Pedro e seus amigos na contrução de um abrigo para animais',
  title_en: 'Campaign to help Pedro and his friends build an animal shelter',
  updated_at: '2021-04-01 10:35:24',
  user_id: 51976,
  video: null,
};

export default crowdfunding;
