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
      project: {
        id: 56,
        whitelabel_id: 5,
        category_id: 17,
        as_company: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sapien sed purus molestie molestie vitae nec leo. Vestibulum et bibendum odio. Etiam maximus accumsan erat, quis mattis diam bibendum nec. Proin fringilla elementum purus sed viverra. Nunc nunc arcu, malesuada sit amet orci et, pretium rhoncus tortor. Aliquam tincidunt cursus ultrices. Mauris interdum mauris eget mi viverra sagittis. Vestibulum risus est, fringilla sed convallis et, congue sit amet turpis. Donec vitae fermentum magna. Suspendisse potenti. Sed gravida nulla ut erat egestas tempus. Vivamus velit elit, pretium ut commodo at, blandit nec sem. Morbi auctor magna odio, ut congue lectus aliquet id.\n\nIn ac lacinia sem. Aliquam id rutrum ex. Etiam varius ullamcorper nulla eget molestie. Morbi nunc ex, mattis vel lorem vulputate, ultrices iaculis urna. Fusce varius, est a viverra dictum, augue mauris volutpat tellus, sed lobortis eros est sit amet nisl. Pellentesque semper convallis orci, a lobortis dui. Fusce id consectetur nisl.\n\nPellentesque blandit, ipsum in iaculis tincidunt, sem massa vulputate arcu, ac commodo quam felis sit amet augue. Donec sed ex semper, eleifend enim a, ultrices leo. Donec condimentum enim quis tincidunt imperdiet. Vivamus id fermentum metus, in efficitur ipsum. Aenean consequat, dolor sit amet pretium condimentum, dui quam semper risus, ac rhoncus ante metus nec turpis. Nulla facilisi. Phasellus posuere odio a enim viverra iaculis.\n\nVivamus libero dolor, cursus quis molestie eget, cursus porta leo. Mauris auctor sollicitudin mi. Pellentesque maximus eu nisl quis tincidunt. Vivamus accumsan ullamcorper leo, nec sollicitudin neque cursus vitae. In gravida porta odio, ullamcorper rutrum ligula luctus a. Aenean fringilla ipsum maximus nunc aliquet, tincidunt dapibus elit posuere. Aliquam quis elementum velit. Suspendisse potenti. Suspendisse pharetra risus sit amet tellus ultrices, sed tempus arcu mollis. Ut quis ante odio. Sed molestie arcu ac nulla molestie blandit. Phasellus fringilla scelerisque quam a malesuada. Duis purus dolor, mollis eu blandit at, commodo non libero. Aliquam auctor elit et dolor lacinia, ut auctor est accumsan. Mauris dui leo, finibus fermentum imperdiet id, tempus a nibh.\n\nMaecenas a nisi efficitur, laoreet arcu vitae, cursus enim. Nam dapibus vehicula luctus. Sed a sapien bibendum erat interdum convallis ut ut nisi. Aliquam ut vehicula augue, a semper lectus. Mauris vitae egestas dui. Quisque id urna diam. Nulla facilisi. Aenean a viverra nulla. Cras vitae porta ipsum, non fermentum justo. Nullam et sodales elit. Phasellus molestie egestas convallis. Maecenas bibendum neque non lacus sodales, eget laoreet dolor aliquet. Vestibulum iaculis quam et augue blandit, at pharetra erat suscipit. Vestibulum iaculis dignissim tempus.',
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
            logo: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
            cover_image: 'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            thumbs: {
              detail: 'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-DETAIL.jpg',
              thumb: 'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-THUMB.jpg',
              cover_image: 'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
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
          image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51790/1593441499.jpg?v=1593441500',
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
      projects: 
      [{
        id: 66,
        whitelabel_id: 5,
        category_id: 17,
        description: 'Descrição Descrição  Descrição  Descrição  Descrição  Descrição Descrição Descrição  Descrição Descrição Descrição Descrição  ',
        cover: null,
        title: 'Projecto Rocha 3',
        user_id: 51792,
        laravel_through_key: 81,
        review_average: 4,
        whitelabel_config: {
          id: 5,
          subdomain: 'whitelabel.esolidar.local',
          domain: null,
          company: null,
        },
        ods: [
          {
            id: 1,
            ods_id: 1,
            tag_name: 'ods-1',
            status: true,
            updated_at: '2020-02-05 17:26:34',
            created_at: '2020-02-05 17:26:27',
            laravel_through_key: 66,
            name: '1-ods-1',
          },
        ],
        user: {
          id: 51792,
          fb_id: null,
          institution_id: null,
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.212',
            symbol: '€',
            status: true,
            lastUpdate: '2021-01-20 12:00:03',
          },
          country: 208,
          language: {
            id: 2,
            name: 'pt',
            translate: 'Português (PT)',
            status: 1,
            locale: 'pt_PT',
            dateAdded: '2015-02-24 11:02:06',
          },
          firstName: 'Miguel',
          lastName: 'Rocha',
          email: 'rocha@esolidar.com',
          fb_email: null,
          fb_email_confirmed: 0,
          code: '629540c1-3818-4f13-9e11-53d0aae03883',
          type: 'user',
          default_institution_id: null,
          auth_facebook: 0,
          auth_email: 1,
          streamImage: 'amazons3',
          image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51792/1601463876.jpg?v=1601463877',
          summary: 'Front End Developer',
          nif: 'null',
          receipt: 0,
          mobile_phone: '+351919552199',
          link: null,
          birthday: '1983-11-30',
          gender: 'male',
          hometown: null,
          location: 'Porto, Portugal',
          locale: 'en_US',
          verified: 0,
          subscribe: 0,
          notifications: 1,
          perms: 0,
          status: 'A',
          paypal_mail: null,
          sent_address: null,
          real_address: 'Rua de Valongo',
          longitude: '0',
          latitude: '0',
          free_taxes: 0,
          thumb: '0',
          sync_friends: 0,
          sync_likes: 0,
          private_beta: 0,
          import_bewarket: 0,
          ws_import: 0,
          only_mysells: 1,
          is_admin: 0,
          deauthorize_times: 0,
          invite_friends: null,
          remember_token: null,
          bank_transfer: null,
          updatedTime: '2020-09-22 03:09:51',
          lastUpdate: '2021-01-22T11:06:12.000000Z',
          lastLogin: '2021-01-22 11:01:12',
          dateAdded: '2020-09-22T15:57:51.000000Z',
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
            {
              id: 155,
              user_id: 51792,
              phone: '+351919552199',
              code: '7887',
              main: 0,
              twilio_sid: 'SM06004d6f0ca64123b61b7daec421acdf',
              verified: 0,
              updatedDate: '2021-01-09 19:47:11',
              dateAdded: '2021-01-09 19:47:11',
            },
            {
              id: 170,
              user_id: 51792,
              phone: '+351919552199',
              code: '8196',
              main: 0,
              twilio_sid: 'SMb980a8ad4056438fa1b14aac96533a5d',
              verified: 0,
              updatedDate: '2021-01-13 17:35:58',
              dateAdded: '2021-01-13 17:25:09',
            },
            {
              id: 171,
              user_id: 51792,
              phone: '+351919552199',
              code: '5694',
              main: 0,
              twilio_sid: 'SMf951a3b225714282b27fbff48ff987d4',
              verified: 0,
              updatedDate: '2021-01-13 17:40:12',
              dateAdded: '2021-01-13 17:37:07',
            },
            {
              id: 172,
              user_id: 51792,
              phone: '+351919552199',
              code: '2134',
              main: 0,
              twilio_sid: 'SM4d3871c4e1a1469b90da24e7f1b3710a',
              verified: 0,
              updatedDate: '2021-01-13 17:42:59',
              dateAdded: '2021-01-13 17:41:37',
            },
            {
              id: 173,
              user_id: 51792,
              phone: '+351919552199',
              code: '2551',
              main: 0,
              twilio_sid: 'SM9cdf61302b06499fa474587147b624f2',
              verified: 0,
              updatedDate: '2021-01-13 18:17:16',
              dateAdded: '2021-01-13 17:44:02',
            },
            {
              id: 174,
              user_id: 51792,
              phone: '+351919552199',
              code: '2331',
              main: 0,
              twilio_sid: 'SMb2c8b01d4445442199a43d665c2ffd5e',
              verified: 0,
              updatedDate: '2021-01-13 18:21:13',
              dateAdded: '2021-01-13 18:18:39',
            },
            {
              id: 175,
              user_id: 51792,
              phone: '+351919552199',
              code: '7332',
              main: 0,
              twilio_sid: 'SMd9384651501346dfb3794470582df030',
              verified: 0,
              updatedDate: '2021-01-15 17:40:19',
              dateAdded: '2021-01-13 18:26:24',
            },
            {
              id: 176,
              user_id: 51792,
              phone: '+351919552199',
              code: '4124',
              main: 0,
              twilio_sid: 'SMf7e92172026e4ac6827385a052b49019',
              verified: 1,
              updatedDate: '2021-01-15 18:40:42',
              dateAdded: '2021-01-15 18:40:25',
            },
          ],
        },
        images: [
          {
            id: 179,
            project_id: 66,
            streamImage: 'amazons3',
            image: 'whitelabel/5/projects/ecb1b9ff-db80-437d-9750-f78769cd9db0.jpg',
            image_type: 'jpg',
            image_size: 296959,
            default: 1,
            position: 1,
            updated_at: '2020-10-29 18:07:16',
            created_at: '2020-10-29 18:06:33',
          },
        ],
        },
      ],
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
    cdn_uploads_url: 'https://cdn.testesolidar.com'
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
