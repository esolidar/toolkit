import React from 'react';
import AuctionDetail from './AuctionDetail';
import variables from '../../assets/sass/_export.module.scss';

export default {
  title: 'Components/Auctions/AuctionDetail',
  component: AuctionDetail,
};

const Template = args => <AuctionDetail {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['AuctionDetail.test.js'],
};
Default.args = {
  auctionId: '279',
  getAuctionDetail: () => {},
  auctionDetail: {
    code: 200,
    data: {
      id: 279,
      user_id: 1073,
      project_id: null,
      title: 'Leilão teste NORMAL',
      title_en: 'd3d34d43',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      description_en: null,
      shipping_description: null,
      shipping_description_en: null,
      payment_description: null,
      payment_description_en: null,
      bid_start: 50,
      goal: 0,
      video: null,
      dateStart: '2021-03-26 18:30:00',
      dateLimit: '2022-05-26 21:00:00',
      timezone: 'Europe/Dublin',
      bid_interval: 1,
      bid_max_interval: 100,
      tax: 10,
      status: 'A',
      private: 0,
      cc: 1,
      brand_id: 1,
      updatedDate: '2021-01-14 16:40:01',
      dateAdded: '2014-04-10 00:00:00',
      last_bid: {
        id: 1606,
        value: 73,
        hidden: 0,
        stripelast4: '3155',
        dateAdded: '2021-01-15 13:03:47',
        user: {
          id: 51792,
          institution_id: null,
          firstName: 'Miguel',
          lastName: 'Rocha',
          image: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.212',
            symbol: '€',
            status: true,
            lastUpdate: '2021-01-20 12:00:03',
          },
          language: {
            id: 2,
            name: 'pt',
            translate: 'Português (PT)',
            status: 1,
            locale: 'pt_PT',
            dateAdded: '2015-02-24 11:02:06',
          },
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
            standard: 'https://cdn.testesolidar.com/users/51792/1601463876-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
          },
          name: 'Miguel Rocha',
          institution: null,
          phones: [
            {
              id: 154,
              user_id: 51792,
              phone: '+351919552199',
              code: '2125',
              main: 0,
              twilio_sid: 'SM831a407700fc4e10881f50e7684fd03a',
              verified: 0,
              updatedDate: '2021-01-09 19:42:07',
              dateAdded: '2021-01-07 11:32:00',
            },
          ],
        },
      },
      images: [
        {
          id: 193,
          image_name:
            'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301.jpeg',
          thumbs: {
            standard:
              'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-STANDARD.jpeg',
            detail:
              'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-DETAIL.jpeg',
            pin: 'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-PIN.jpeg',
            thumb:
              'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-THUMB.jpeg',
          },
        },
        {
          id: 194,
          image_name:
            'https://cdn.testesolidar.com/products/adc89e21-9413-471d-87ac-2571344be096.jpeg',
          thumbs: {
            standard:
              'https://cdn.testesolidar.com/products/adc89e21-9413-471d-87ac-2571344be096-STANDARD.jpeg',
            detail:
              'https://cdn.testesolidar.com/products/adc89e21-9413-471d-87ac-2571344be096-DETAIL.jpeg',
            pin: 'https://cdn.testesolidar.com/products/adc89e21-9413-471d-87ac-2571344be096-PIN.jpeg',
            thumb:
              'https://cdn.testesolidar.com/products/adc89e21-9413-471d-87ac-2571344be096-THUMB.jpeg',
          },
        },
      ],
      currency: {
        id: 1,
        small: 'EUR',
      },
      recipient: {
        id: 1073,
        currency: {
          id: 1,
          small: 'EUR',
        },
        thumbs: {
          thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
        },
        institution: {
          id: 51,
          name: 'Fundo Brasileiro para a Biodiversidade',
          image:
            'https://static.esolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
          currency: {
            id: 1,
          },
          thumbs: {
            thumb:
              'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-THUMB.JPG',
          },
        },
        phones: [],
      },
      project: {
        id: 56,
        whitelabel_id: 5,
        category_id: 17,
        as_company: 0,
        description: 'Lorem ipsum dolor sit amet',
        cover: null,
        title: 'Projeto para ajudar a malta',
        user_id: 51790,
        review_average: 5,
        whitelabel_config: {
          id: 5,
          company_id: 1,
          company: {
            id: 1,
            name: 'Webankor (eSolidar)',
            logo: 'https://static.esolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
            cover_image:
              'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            thumbs: {
              detail:
                'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-DETAIL.jpg',
              thumb:
                'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-THUMB.jpg',
              cover_image:
                'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            },
            s3_logo_key: 'companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
            s3_cover_key: 'companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            country: null,
            currency: null,
          },
        },
        ods: [
          {
            id: 1,
            ods_id: 1,
            tag_name: 'ods-1',
            status: true,
            updated_at: '2020-02-05 17:26:34',
            created_at: '2020-02-05 17:26:27',
            laravel_through_key: 56,
            name: '1-ods-1',
          },
          {
            id: 8,
            ods_id: 8,
            tag_name: 'ods-8',
            status: true,
            updated_at: '2020-02-05 18:03:49',
            created_at: '2020-02-05 18:03:49',
            laravel_through_key: 56,
            name: '8-ods-8',
          },
        ],
        user: {
          id: 51790,
          institution_id: null,
          firstName: 'António',
          lastName: 'Joaquim',
          image: 'https://cdn.testesolidar.com/users/51790/1593441499.jpg?v=1593441500',
          streamImage: 'amazons3',
          language: {
            id: 2,
            name: 'pt',
            translate: 'Português (PT)',
            status: 1,
            locale: 'pt_PT',
            dateAdded: '2015-02-24 11:02:06',
          },
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.203',
            symbol: '€',
            status: true,
            lastUpdate: '2021-02-02 12:00:04',
          },
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/51790/1593441499.jpg?v=1593441500',
            standard: 'https://cdn.testesolidar.com/users/51790/1593441499-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/51790/1593441499-THUMB.jpg',
          },
          work_email: [],
          name: 'António Joaquim',
          s3_key: 'users/51790/1593441499.jpg?v=1593441500',
          institution: null,
          phones: [],
        },
        images: [
          {
            id: 167,
            project_id: 56,
            streamImage: 'amazons3',
            image: 'whitelabel/5/projects/78756737-26a6-4976-b454-c5c679f1e1a8.jpg',
            image_type: 'jpg',
            image_size: 501701,
            default: 1,
            position: 1,
            updated_at: '2020-07-30 08:42:05',
            created_at: '2020-07-30 08:41:54',
          },
        ],
      },
    },
  },
  postNewBid: () => {},
  newBid: {
    code: 404,
  },
  getAuctionBidList: () => {},
  auctionBidList: {
    code: 200,
    data: {
      current_page: 1,
      data: [
        {
          id: 1745,
          auction_id: 224,
          value: 2,
          hidden: 0,
          stripelast4: null,
          dateAdded: '2021-01-20 10:52:51',
          user: {
            id: 51842,
            institution_id: null,
            firstName: 'Miguel2',
            lastName: 'Rocha',
            image: null,
            currency: {
              id: 2,
              name: 'U. S. Dollar',
              small: 'USD',
              value: '1',
              symbol: '$',
              status: true,
              lastUpdate: '2014-02-03 15:50:54',
            },
            language: {
              id: 1,
              name: 'en',
              translate: 'English',
              status: 1,
              locale: 'en_US',
              dateAdded: '2015-01-06 16:58:22',
            },
            thumbs: {
              original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
              standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
              thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
            },
            work_email: [],
            name: 'Miguel2 Rocha',
            s3_key: null,
            institution: null,
            phones: [
              {
                id: 177,
                user_id: 51842,
                phone: '+351919552199',
                code: '8351',
                main: 0,
                twilio_sid: 'SM6884016027a74ee1b715bbfb0f2bca65',
                verified: 1,
                updatedDate: '2021-01-19 18:10:38',
                dateAdded: '2021-01-19 18:10:20',
              },
            ],
          },
        },
      ],
      first_page_url: 'https://apidev.testesolidar.com/v1/auctions/224/bids?page=1',
      from: 1,
      last_page: 1,
      last_page_url: 'https://apidev.testesolidar.com/v1/auctions/224/bids?page=1',
      links: [
        {
          url: null,
          label: '&laquo; Previous',
          active: false,
        },
        {
          url: 'https://apidev.testesolidar.com/v1/auctions/224/bids?page=1',
          label: 1,
          active: true,
        },
        {
          url: null,
          label: 'Next &raquo;',
          active: false,
        },
      ],
      next_page_url: null,
      path: 'https://apidev.testesolidar.com/v1/auctions/224/bids',
      per_page: '10',
      prev_page_url: null,
      to: 1,
      total: 1,
    },
  },
  getAuctionList: () => {},
  auctionList: {},
  companyId: '1',
  getAuctionSubscribe: () => {},
  auctionSubscribe: {
    code: 200,
  },
  auctionSubscribeList: {
    code: 200,
    data: {
      auction_on_start: 1,
      auction_first_bid: 0,
      auction_24h_end: 1,
    },
  },
  postAuctionSubscribe: () => {},
  getAuctionComment: () => {},
  auctionComments: {
    code: 404,
  },
  user: null,
  requireLogin: () => false,
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
    cdn_uploads_url: 'https://cdn.testesolidar.com',
  },
  postAuctionUserComment: () => {},
  auctionUserComment: [],
  postAuctionCompanyComment: () => {},
  getAuctionUserCommentResponse: [],
  auctionUserCommentsResponse: {
    code: 404,
  },
  deleteAuctionComment: () => {},
  deleteComment: {
    code: 200,
  },
  getStripeCreditCardlist: () => {},
  postStripeCreditCard: () => {},
  stripeCreditCardList: {},
  stripeCreditCard: {},
  mobileValidatePost: () => {},
  validatePhone: {},
  mobileConfirmPost: () => {},
  confirmPhone: {
    code: 200,
  },
  pusherData: null,
  postUpdatedUser: {},
  updatedUser: () => {},
  showAlert: () => {},
  primaryColor: variables['theme-colors-primary'],
  domainUrl: 'https://esolidar.local:8081/',
  locale: 'en',
};
