#### Import

``` html
import { AuctionDetail } from '@esolidar/toolkit';
```

#### Example

``` jsx
<AuctionDetail
  auctionId="279"
  getAuctionDetail={() => {}}
  auctionDetail={{
    code: 200,
    data: {
      id: 279,
      user_id: 1073,
      project_id: null,
      title: 'Leilão teste NORMAL',
      title_en: 'd3d34d43',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      description_en: null,
      shipping_description: null,
      shipping_description_en: null,
      payment_description: null,
      payment_description_en: null,
      bid_start: 50,
      goal: 0,
      video: null,
      dateStart: '2021-01-01 01:23:42',
      dateLimit: '2021-02-01 01:23:42',
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
          image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51792/1601463876.jpg?v=1601463877',
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
          image_name: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/a5ecae84-050b-4945-abdd-13c77dd9e301.jpeg',
          thumbs: {
            standard: 'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-STANDARD.jpeg',
            detail: 'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-DETAIL.jpeg',
            pin: 'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-PIN.jpeg',
            thumb: 'https://cdn.testesolidar.com/products/a5ecae84-050b-4945-abdd-13c77dd9e301-THUMB.jpeg',
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
          image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
          currency: {
            id: 1,
          },
          thumbs: {
            thumb: 'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-THUMB.JPG',
          },
        },
        phones: [],
      },
    },
  }}  
  postNewBid={() => {}}
  newBid={{
    code: 404,
  }}
  getAuctionBidList= {() => {}}
  auctionBidList={{
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
  }}
  getAuctionList={() => {}}
  auctionList={{}}
  companyId="1"
  getAuctionSubscribe={() => {}}
  auctionSubscribe={{
    code: 200,
  }}
  auctionSubscribeList={{
    code: 200,
    data: {
      auction_on_start: 1,
      auction_first_bid: 0,
      auction_24h_end: 1,
    },
  }}
  postAuctionSubscribe={() => {}}
  getAuctionComment={() => {}}
  auctionComments={{
    code: 404,
  }}
  user={null}
  translateMessage={() => 'Some text'}
  requireLogin={() => false}
  env={{
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  }}
  postAuctionUserComment={() => {}}
  auctionUserComment={[]}
  postAuctionCompanyComment={() => {}}
  getAuctionUserCommentResponse={[]}
  auctionUserCommentsResponse={{
    code: 404,
  }}
  deleteAuctionComment={() => {}}
  deleteComment={{
    code: 200,
  }}
  getStripeCreditCardlist={() => {}}
  postStripeCreditCard={() => {}}
  stripeCreditCardList={{}}
  stripeCreditCard={{}}
  mobileValidatePost={() => {}}
  validatePhone={{}}
  mobileConfirmPost={() => {}}
  confirmPhone={{
    code: 200,
  }}
  intl={{
    formatMessage: () => 'some text',
  }}
  pusherData={null}
  postUpdatedUser={{}}
  updatedUser={() => {}}
  showAlert={() => {}}
  primaryColor="#05c6e5"
/>
```
