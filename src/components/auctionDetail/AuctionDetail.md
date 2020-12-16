#### Import

``` html
import { AuctionDetail } from '@esolidar/toolkit';
```

#### Example

``` jsx
<AuctionDetail
  total={2}
  accessAuction={true}
  user={{
    email: 'rocha@esolidar.com'
  }}
  env={{
      serverlessResizeImage: 'https://image.testesolidar.com',
      cdn_static_url: 'https://static.esolidar.com',
    }}
  auctionSubscribe ={() => {}}
  auction={
    {
        private: 0,
        id: 299,
        user_id: 1124,
        cause_id: null,
        cc: 1,
        currency_id: 1,
        title: "Work: Gustavo Massola's Collective Move",
        title_en: "Work: Gustavo Massola's Collective Move",
        bid_start: 3,
        dateStart: "2020-02-08 07:00:00",
        dateLimit: "2020-12-30 16:00:00",
        bid_interval: 10,
        bid_max_interval: 100,
        status: "A",
        goal: 1000,
        description: "Uma descrição teste",
        description_en: "Description test",
        shipping_description: "Os portes de envio serão à responsabilidade do vencedor.",
        shipping_description_en: "Please note postage is not included as part of the final bid.",
        payment_description: "O pagamento é realizado por transferência bancária. No final do leilão, será comunicado ao vencedor por email os dados bancários. O pagamento deve ser efetuado no prazo de quarenta e oito horas.",
        payment_description_en: "The method of payment is bank transfer. At the end of the auction the winner shall be served notice by email of the bank details. The payment must be made within forty-eight hours.",
        last_bid: {
            id: 1241,
            auction_id: 299,
            value: 31,
            hidden: 0,
            stripelast4: null,
            dateAdded: "2020-04-20 14:25:58",
            user: {
                id: 9,
                institution_id: null,
                firstName: "Joel F.",
                lastName: "Calheiros",
                image: "https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/9/1606232953.jpg",
                currency: {
                    id: 1,
                    name: "Euro",
                    small: "EUR",
                    value: "1.19",
                    symbol: "€",
                    status: true,
                    lastUpdate: "2020-11-26 12:00:05"
                },
                language: {
                    id: 2,
                    name: "pt",
                    translate: "Português (PT)",
                    status: 1,
                    locale: "pt_PT",
                    dateAdded: "2015-02-24 11:02:06"
                },
                thumbs: {
                    original: "https://cdn.testesolidar.com/users/9/1606232953.jpg",
                    standard: "https://cdn.testesolidar.com/users/9/1606232953-STANDARD.jpg",
                    thumb: "https://cdn.testesolidar.com/users/9/1606232953-THUMB.jpg"
                },
                work_email: [
                    {
                        company_id: 1,
                        name: "",
                        role: "admin",
                        department: null,
                        user: null
                    },
                    
                ],
                name: "Joel F. Calheiros",
                s3_key: "users/9/1606232953.jpg",
                institution: null,
                phones: [
                    {
                        id: 77,
                        user_id: 9,
                        phone: "+351965790981",
                        code: "7597",
                        main: 1,
                        twilio_sid: "SM05d868fe86a44bd3b49cc2d11bc67ff2",
                        verified: 1,
                        updatedDate: "2016-10-14 13:46:02",
                        dateAdded: "2016-10-14 14:45:51"
                    },
                ]
            }
        },
        images: [
            {
                id: 200,
                auction_id: 299,
                streamImage: "amazons3",
                image_name: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg",
                image_type: "image/jpeg",
                image_size: "140004",
                default: 1,
                thumb: 0,
                position: 0,
                fb_image: 0,
                lastUpdated: "2020-03-10 11:24:57",
                dateAdded: "2019-09-16 10:51:01",
                thumbs: {
                    standard: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg",
                    detail: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg",
                    pin: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg",
                    thumb: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg"
                },
                s3_key: "products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg"
            },
            {
                id: 200,
                auction_id: 299,
                streamImage: "amazons3",
                image_name: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg",
                image_type: "image/jpeg",
                image_size: "140004",
                default: 1,
                thumb: 0,
                position: 0,
                fb_image: 0,
                lastUpdated: "2020-03-10 11:24:57",
                dateAdded: "2019-09-16 10:51:01",
                thumbs: {
                    standard: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg",
                    detail: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg",
                    pin: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg",
                    thumb: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg"
                },
                s3_key: "products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg"
            },
        ],
        video: "https://www.youtube.com/watch?v=cVFzblT5VPE",
        currency: {
            id: 1,
            name: "Euro",
            small: "EUR",
            value: "1.19",
            symbol: "€",
            status: true,
            lastUpdate: "2020-11-26 12:00:05"
        },
        last_bid_value: {
            id: 1241,
            auction_id: 299,
            value: 31,
            hidden: 0,
            stripelast4: null,
            dateAdded: "2020-04-20 14:25:58",
            user: {
                id: 9,
                institution_id: null,
                firstName: "Joel F.",
                lastName: "Calheiros",
                image: "https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/9/1606232953.jpg",
                currency: {
                    id: 1,
                    name: "Euro",
                    small: "EUR",
                    value: "1.19",
                    symbol: "€",
                    status: true,
                    lastUpdate: "2020-11-26 12:00:05"
                },
                language: {
                    id: 2,
                    name: "pt",
                    translate: "Português (PT)",
                    status: 1,
                    locale: "pt_PT",
                    dateAdded: "2015-02-24 11:02:06"
                },
                thumbs: {
                    original: "https://cdn.testesolidar.com/users/9/1606232953.jpg",
                    standard: "https://cdn.testesolidar.com/users/9/1606232953-STANDARD.jpg",
                    thumb: "https://cdn.testesolidar.com/users/9/1606232953-THUMB.jpg"
                },
                work_email: [
                    {
                        company_id: 1,
                        name: "",
                        role: "admin",
                        department: null,
                        user: null
                    },
                ],
                name: "Joel F. Calheiros",
                s3_key: "users/9/1606232953.jpg",
                institution: null,
                phones: [
                    {
                        id: 77,
                        user_id: 9,
                        phone: "+351965790981",
                        code: "7597",
                        main: 1,
                        twilio_sid: "SM05d868fe86a44bd3b49cc2d11bc67ff2",
                        verified: 1,
                        updatedDate: "2016-10-14 13:46:02",
                        dateAdded: "2016-10-14 14:45:51"
                    },
                ]
            }
        },
        recipient: {
            id: 1124,
            institution_id: 30,
            language: {
                id: 2,
                name: "pt",
                translate: "Português (PT)",
                status: 1,
                locale: "pt_PT",
                dateAdded: "2015-02-24 11:02:06"
            },
            currency: {
                id: 2,
                name: "U. S. Dollar",
                small: "USD",
                value: "1",
                symbol: "$",
                status: true,
                lastUpdate: "2014-02-03 15:50:54"
            },
            image: null,
            thumbs: {
                original: "https://static.testesolidar.com/frontend/assets/no-image.png",
                standard: "https://static.testesolidar.com/frontend/assets/no-image.png",
                thumb: "https://static.testesolidar.com/frontend/assets/no-image.png"
            },
            work_email: [],
            name: null,
            s3_key: null,
            institution: {
                id: 30,
                name: "Helpo",
                image: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                currency: {
                    id: 2
                },
                thumbs: {
                    detail: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg",
                    thumb: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg",
                },
                s3_image_key: "institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                s3_cover_key: null,
                description: "A Planeta Limpo Recicláveis é uma empresa em expansão, que trabalha no ramo de reciclagem desde de 2003 e atua especificamente.",
            },
            phones: [],
        },
        brand: {
            id: 3,
            name: "A marca da Cátia Catita",
            username: "catita",
            logo: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d.png",
            cover: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716.jpeg",
            logo_thumbs: {
                standard: "https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-STANDARD.png",
                detail: "https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-DETAIL.png",
                thumb: "https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-THUMB.png"
            },
            cover_thumbs: {
                standard: "https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716-STANDARD.jpeg",
                detail: "https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716-DETAIL.jpeg"
            },
            s3_logo_key: "brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d.png",
            s3_cover_key: "brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716.jpeg"
        }
    }
  }
  listAuctionCategorie={[
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
    updatedDate: '2020-12-04 12:49:05',
    dateAdded: '2020-11-13 12:29:17',
    last_bid: null,
    images: [
      {
        id: 380,
        auction_id: 334,
        streamImage: 'amazons3',
        image_name: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8.png',
        image_type: 'image/png',
        image_size: '1239276',
        default: 0,
        thumb: 0,
        position: 1,
        fb_image: 0,
        lastUpdated: '2020-11-13 12:29:17',
        dateAdded: '2020-11-13 12:28:39',
        thumbs: {
          standard: 'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-STANDARD.png',
          detail: 'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-DETAIL.png',
          pin: 'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-PIN.png',
          thumb: 'https://cdn.testesolidar.com/products/13b3e954-7101-4795-86f9-4eb2e3563eb8-THUMB.png',
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
        image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/institutions/5f74882c-7c70-47cb-a40a-000eac120002.jpg',
        currency: {
          id: 1,
        },
        thumbs: {
          detail: 'https://cdn.testesolidar.com/institutions/5f74882c-7c70-47cb-a40a-000eac120002-DETAIL.jpg',
          thumb: 'https://cdn.testesolidar.com/institutions/5f74882c-7c70-47cb-a40a-000eac120002-THUMB.jpg',
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
      logo: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/brands/752394c7-2dd7-480c-b250-49464438dfae.jpeg',
      cover: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953.jpeg',
      logo_thumbs: {
        standard: 'https://cdn.testesolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae-STANDARD.jpeg',
        detail: 'https://cdn.testesolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae-DETAIL.jpeg',
        thumb: 'https://cdn.testesolidar.com/brands/752394c7-2dd7-480c-b250-49464438dfae-THUMB.jpeg',
      },
      cover_thumbs: {
        standard: 'https://cdn.testesolidar.com/brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953-STANDARD.jpeg',
        detail: 'https://cdn.testesolidar.com/brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953-DETAIL.jpeg',
      },
      s3_logo_key: 'brands/752394c7-2dd7-480c-b250-49464438dfae.jpeg',
      s3_cover_key: 'brands/cover/ca1a4b23-db7e-4ad5-b57a-461dbd341953.jpeg',
    },
  }
  ]
  }
  translateMessage={() => 'Some text'}
  listBid={
    {
    current_page: 1,
    data: [
      {
        id: 802,
        auction_id: 25,
        value: 3,
        hidden: 0,
        stripelast4: null,
        dateAdded: '2016-04-10 20:18:05',
        user: {
          id: 5,
          institution_id: null,
          firstName: 'Marco',
          lastName: 'Barbosa',
          image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/5/5.jpeg',
          currency: {
            id: 4,
            name: 'British Pound',
            small: 'GBP',
            value: '1.343',
            symbol: '£',
            status: true,
            lastUpdate: '2020-12-03 12:00:06',
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
            original: 'https://cdn.testesolidar.com/users/5/5.jpeg',
            standard: 'https://cdn.testesolidar.com/users/5/5-STANDARD.jpeg',
            thumb: 'https://cdn.testesolidar.com/users/5/5-THUMB.jpeg',
          },
          work_email: [],
          name: 'Marco Barbosa',
          s3_key: 'users/5/5.jpeg',
          institution: null,
          phones: [],
        },
      },
    ],
    total: 50,
  }
  }
  postNewBid={() => {}}
  newBid={[]}
  getAuctionBidList= {() => {}}
  auctionBidList={[]}
  auctionList={() => {}}
  companyId="1"
  getAuctionList={() => {}}
  getAuctionComment={() => {}}
  auctionComments={[]}
/>
```
