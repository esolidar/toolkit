import AuctionsList from './AuctionsList';

export default {
  title: 'Components/Auctions/AuctionsList',
  component: AuctionsList,
};

const Template = args => <AuctionsList {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['AuctionsList.test.js'],
};
Default.args = {
  title: 'Other auctions',
  listAuctions: [
    {
      id: 334,
      user_id: 51793,
      cause_id: null,
      sub_category_id: null,
      currency_id: 1,
      title: 'Camisola Clean World',
      title_en: null,
      position: 1,
      description: 'Camisola Clean World',
      description_en: null,
      shipping_description: '10€',
      shipping_description_en: null,
      payment_description: 'Transf.',
      payment_description_en: null,
      tags: 'Clean,World',
      bid_start: 1,
      buy_now: 0,
      goal: 1000,
      video: null,
      dateStart: '2020-11-13 00:00:00',
      dateLimit: '2020-12-17 23:00:00',
      timezone: 'Europe/Lisbon',
      bid_interval: 1,
      bid_max_interval: 500,
      tax: 10,
      acquisition_value: 0,
      status: 'A',
      private: 0,
      user_winner_notified: 0,
      rockinrio: 0,
      cc: 0,
      brand_id: 145,
      celebrity_id: null,
      updatedDate: '2020-12-14 15:27:23',
      dateAdded: '2020-11-13 12:29:17',
      last_bid: {
        id: 1260,
        auction_id: 334,
        value: 285,
        hidden: 0,
        stripelast4: null,
        dateAdded: '2020-12-14 18:32:55',
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
            lastUpdate: '2020-12-03 12:00:03',
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
            original: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
            standard: 'https://cdn.testesolidar.com/users/51792/1601463876-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
          },
          work_email: [],
          name: 'Miguel Rocha',
          s3_key: 'users/51792/1601463876.jpg?v=1601463877',
          institution: null,
          phones: [
            {
              id: 134,
              user_id: 51792,
              phone: '+351919552199',
              code: '6121',
              main: 1,
              twilio_sid: 'SM089ce92c633246ccb8da10ce994c67d4',
              verified: 1,
              updatedDate: '2020-09-30 11:11:05',
              dateAdded: '2020-09-30 11:10:45',
            },
          ],
        },
      },
      images: [
        {
          id: 380,
          auction_id: 334,
          streamImage: 'amazons3',
          image_name:
            'https://static.esolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8.png',
          image_type: 'image/png',
          image_size: '1239276',
          default: 0,
          thumb: 0,
          position: 1,
          fb_image: 0,
          lastUpdated: '2020-11-13 12:29:17',
          dateAdded: '2020-11-13 12:28:39',
          thumbs: {
            standard:
              'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-STANDARD.png',
            detail:
              'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-DETAIL.png',
            pin: 'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-PIN.png',
            thumb:
              'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-THUMB.png',
          },
          s3_key: 'products/13b3e954-7101-4795-86f9-4eb2e3563eb8.png',
        },
      ],
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: '1.212',
        symbol: '€',
        status: true,
        lastUpdate: '2020-12-03 12:00:03',
      },
      recipient: {
        id: 51793,
        institution_id: 1056,
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
          value: '1.212',
          symbol: '€',
          status: true,
          lastUpdate: '2020-12-03 12:00:03',
        },
        image: null,
        thumbs: {
          original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
        },
        work_email: [],
        name: null,
        s3_key: null,
        institution: {
          id: 1056,
          name: 'Associação planeta limpo',
          image:
            'https://static.esolidar.com/institutions/5f74882c-7c70-47cb-a40a-000eac120002.jpg',
          currency: {
            id: 1,
          },
          thumbs: {
            detail:
              'https://cdn.testesolidar.com/institutions/5f74882c-7c70-47cb-a40a-000eac120002-DETAIL.jpg',
            thumb:
              'https://cdn.testesolidar.com/institutions/5f74882c-7c70-47cb-a40a-000eac120002-THUMB.jpg',
          },
          s3_image_key: 'institutions/5f74882c-7c70-47cb-a40a-000eac120002.jpg',
          s3_cover_key: null,
        },
        phones: [],
      },
      brand: {
        id: 145,
        name: 'teste',
        username: 'teste123',
        logo: 'https://static.esolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae.jpeg',
        cover: 'https://static.esolidar.com/brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953.jpeg',
        logo_thumbs: {
          standard:
            'https://cdn.testesolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae-STANDARD.jpeg',
          detail:
            'https://cdn.testesolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae-DETAIL.jpeg',
          thumb:
            'https://cdn.testesolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae-THUMB.jpeg',
        },
        cover_thumbs: {
          standard:
            'https://cdn.testesolidar.com/brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953-STANDARD.jpeg',
          detail:
            'https://cdn.testesolidar.com/brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953-DETAIL.jpeg',
        },
        s3_logo_key: 'brands/752394c7-2dd7-480c-b250-49464438dfae.jpeg',
        s3_cover_key: 'brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953.jpeg',
      },
    },
  ],
  buttonTitle: 'Sea all auctions',
};
