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
/>
```
