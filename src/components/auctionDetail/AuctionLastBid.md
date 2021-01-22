#### Import

``` html
import { AuctionLastBid } from '@esolidar/toolkit';
```

#### Example

``` jsx
<AuctionLastBid
  auction={{
        id: 279,
        last_bid: {
            id: 1606,
            auction_id: 279,
            value: 73,
        },
        currency: {
            small: "EUR",
        }
      }}
  isEnded={false}
  isCommingSoon={false}
  handleClickBid={() => {}}
  isShowModal={() => {}}
  error=""
  translateMessage={() => 'Some text'}
  intl={{
    formatMessage: () => 'some text',
  }}
  minValue={10}
  inputBidValue={10}
  valueBidTextField={() => {}}
  primaryColor="red"
/>
```
