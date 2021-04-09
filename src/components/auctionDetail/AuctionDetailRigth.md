#### Import

```js static
import AuctionDetailRigth from '@esolidar/toolkit/lib/components/auctionDetailRigth';
```

#### Example

```jsx
<AuctionDetailRigth
  auctionTitle="Titulo"
  auction={{
    id: 279,
    recipient: {
      id: 1073,
      institution_id: 51,
      institution: {
        id: 51,
        name: 'Fundo Brasileiro para a Biodiversidade',
        image: 'https://static.esolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        currency: {
          id: 1,
        },
        thumbs: {
          detail:
            'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-DETAIL.JPG',
          thumb:
            'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-THUMB.JPG',
        },
        s3_image_key: 'institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        s3_cover_key: null,
      },
      phones: [],
    },
    brand: {
      id: 1,
      logo: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e.png",
      logo_thumbs: {
        detail: "https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-DETAIL.png",
        standard: "https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-STANDARD.png",
        thumb: "https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-THUMB.png",
      },
      name: "Amazonia Live change777",
    },
    last_bid: {
      id: 1606,
      auction_id: 279,
      value: 73,
    },
    currency: {
      small: 'EUR',
    },
  }}
  isEnded={false}
  isCommingSoon={false}
  handleClickBid={() => {}}
  error=""
  translateMessage={() => 'Some text'}
  minValue={10}
  showModalSubscribe={() => {}}
  user={{
    currency: {
      small: 'EUR',
    },
  }}
  intl={{
    formatMessage: () => 'some text',
  }}
  inputBidValue={10}
  valueBidTextField={() => {}}
  primaryColor="05c6e5"
  inputRef={{}}
  env={{
    cdn_uploads_url: '',
  }}
  domainUrl="https://esolidar.local:8081/"
  locale="en"
/>
```
