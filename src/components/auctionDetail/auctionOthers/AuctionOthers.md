#### Import

``` html
import { AuctionOthers } from '@esolidar/toolkit';
```

#### Example

``` jsx
<AuctionOthers
  subcategoryId={46}
  listAuctions={[
    {
      id: 12,
      user_id: 1073,
      cause_id: null,
      sub_category_id: 46,
      currency_id: 1,
      title: 'Camisola do Benfica autografada pelo Nélson Oliveira',
      title_en: 'title en',
      position: 64,
      description: 'Uma descrição teste Uma descrição t este Uma descrição teste o teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste Uma descro teste  Uma des cro teste Uma descr o teste Uma descro teste Uma  descro teste Uma descro t este Uma descro teste Uma descro teste Um a descro teste Uma descr o teste Uma  descro teste Um a d escro teste  Uma descro teste Uma descro tes te Uma descro teste Uma descro teste U ma descro teste Uma descr o teste Uma descro teste Uma descro teste Uma descro teste Uma descro te ste Uma descro teste U ma descro teste Uma descro teste Uma des cro teste Uma descro teste Uma de scro teste  Uma descr ',
      description_en: 'description en',
      shipping_description: null,
      shipping_description_en: null,
      payment_description: null,
      payment_description_en: null,
      tags: null,
      bid_start: 50,
      buy_now: null,
      goal: null,
      video: null,
      dateStart: '2014-05-30 16:59:59',
      dateLimit: '2016-01-13 16:14:37',
      timezone: 'Europe/Dublin',
      bid_interval: 1,
      bid_max_interval: 100,
      tax: 10,
      acquisition_value: 0,
      status: 'A',
      private: 0,
      user_winner_notified: 1,
      rockinrio: 0,
      cc: 0,
      brand_id: null,
      celebrity_id: null,
      updatedDate: '2017-01-17 18:04:09',
      dateAdded: '2014-04-10 00:00:00',
      last_bid: null,
      images: [
        {
          id: 4,
          auction_id: 12,
          streamImage: 'amazons3',
          image_name: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/126baaa5-80df-4c14-b727-b8767ae46de8.jpeg',
          image_type: 'image/jpeg',
          image_size: null,
          default: 1,
          thumb: 0,
          position: 1,
          fb_image: 0,
          lastUpdated: '2018-11-12 10:46:52',
          dateAdded: '2018-10-25 16:21:43',
          thumbs: {
            standard: 'https://cdn.testesolidar.com/products/126baaa5-80df-4c14-b727-b8767ae46de8-STANDARD.jpeg',
            detail: 'https://cdn.testesolidar.com/products/126baaa5-80df-4c14-b727-b8767ae46de8-DETAIL.jpeg',
            pin: 'https://cdn.testesolidar.com/products/126baaa5-80df-4c14-b727-b8767ae46de8-PIN.jpeg',
            thumb: 'https://cdn.testesolidar.com/products/126baaa5-80df-4c14-b727-b8767ae46de8-THUMB.jpeg',
          },
          s3_key: 'products/126baaa5-80df-4c14-b727-b8767ae46de8.jpeg',
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
      institution: {
        id: 51,
        name: 'Fundo Brasileiro para a Biodiversidade',
        sigla: 'AP Braga',
        currency: {
          id: 1,
          name: 'Euro',
          small: 'EUR',
          value: '1.212',
          symbol: '€',
          status: true,
          lastUpdate: '2020-12-03 12:00:03',
        },
        image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        streamImage: 'amazons3',
        laravel_through_key: 1073,
        thumbs: {
          detail: 'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-DETAIL.JPG',
          thumb: 'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-THUMB.JPG',
        },
        s3_image_key: 'institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        s3_cover_key: null,
      },
      cause: null,
      brand: null,
    }
  ]
  }
/>
```
