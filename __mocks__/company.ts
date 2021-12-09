import Company from '../src/interfaces/company.types';
import currency from './currency';

const company: Company = {
  id: 273,
  code: '050abf4f-9de8-4c80-ab0d-ffc7814873a0',
  name: 'Company Demo',
  acronym: 'CompanyDemo',
  email: 'demo@esolidar.com',
  vat: '111111111',
  company_id: null,
  nipc: null,
  logo: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/a25527f7-cf38-430e-b6b3-8af42e513bf8.jpg',
  logo_stream: 'amazons3',
  cover_image:
    'https://image.testesolidar.com/companies/254/whitelabels/9/images/0c6f25e4-ea07-4f2a-93f9-ed24e33e47d1.jpg',
  about: '',
  presentation: '',
  phone: '911111111',
  country_id: 208,
  currency_id: 1,
  language_id: 2,
  facebook_link: '',
  instagram_link: '',
  twitter_link: '',
  website_link: 'www.rochacompany.com',
  status: 'A',
  profile_status: 1,
  raized_status: 1,
  employee_range_id: 1,
  slack_webhook_url: '',
  bank_transfer:
    '{"208":[{"bic":"TOTTAPTPL","nib":"003506512869971134442","iban":"PT17003506512589462634348"},{"iban":"PT17003506512589462634348","nib":"asd","bic":"asd"}]}',
  updated_at: '2021-05-04 15:59:51',
  created_at: '2020-11-12 16:22:50',
  whitelabel: {
    id: 21,
    company_id: 273,
    logo: 'companies/273/whitelabels/21/7d38e6d6-5866-4aa2-afb2-8662b1e67ecf.jpg',
    subdomain: 'rochacompany.esolidar.local',
    domain: null,
    data: '{"style":{"primaryColor":"#8bc34a","secondaryColor":"#03a9f4","fontFamily":"Roboto"},"share":{"shareDescription":"","shareImage":"companies/273/whitelabels/21/images/d69d2f7d-626e-4383-a681-9a9c68d64405.jpg","tags":"zxcdsfsdf,sdfsdf,sdfsdff"},"customFooter":{"items":[{"title":"","url":"","image":"companies/273/whitelabels/21/images/8e70d17c-83aa-4c52-a47c-ae89b216bedc.jpg","image_id":273},{"title":"","url":"","image":"companies/273/whitelabels/21/images/90e71cae-2e63-4df4-a6f8-63c7758f1c56.jpg","image_id":274}],"alignment":"left","active":0,"title":"teste"}}',
    allow_member_registration: 1,
    google_analytics: '',
    updated_at: '2021-03-23 16:58:46',
    created_at: '2020-11-12 16:25:13',
    code: '0caf8401-fb7a-4168-a3d6-7f029c7ceb48',
  },
  subscription: { id: 19, company_id: 273 },
  thumbs: {
    detail:
      'https://cdn.testesolidar.com/companies/a25527f7-cf38-430e-b6b3-8af42e513bf8-DETAIL.jpg',
    thumb: 'https://cdn.testesolidar.com/companies/68d60b43-c2c3-49d2-95da-96492d5fe035-THUMB.png',
    cover_image:
      'https://cdn.testesolidar.com/companies/273/cover/c62dddf3-d706-4cf6-be1d-09234ce976d3.jpg',
  },
  s3_logo_key: 'companies/a25527f7-cf38-430e-b6b3-8af42e513bf8.jpg',
  s3_cover_key: 'companies/273/cover/c62dddf3-d706-4cf6-be1d-09234ce976d3.jpg',
  country: {
    id: 208,
    id_currency: 1,
    name: 'Portugal',
    name_en: 'Portugal',
    id_continent: 6,
    status: 1,
    code: 'pt',
    unit: 'km',
    auction_tax: 0.1,
    crowdfunding_tax: 0.05,
    npo_tax: 0.1,
    user_tax: 0.075,
    reseller_tax: 0.01,
    donation_tax: 0.05,
    transfer_tax: 0.03,
    twilio_alpha_support: 1,
    bank_transfer_format: null,
    dateAdded: '2020-08-10 16:50:28',
    currency,
  },
  currency,
};

export default company;
