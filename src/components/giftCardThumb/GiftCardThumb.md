#### Import

``` html
import { GiftCardThumb } from '@esolidar/toolkit';
```

#### Example

``` jsx
<div className="row">
  <div className="col-sm-4">
    <GiftCardThumb
      giftCard={{
        id: 118,
        company_id: 1,
        name: "Giftcard Oliver",
        description: "Lorem ippsum",
        amount: 10,
        amount_usd: 11.8,
        currency_id: 1,
        expire_at: "2020-11-13 00:00:00",
        updated_at: "2020-04-15 10:28:14",
        created_at: "2020-04-15 10:28:14",
        laravel_through_key: "email@gmail.com",
        giftcard_institution: [],
        currency: {id: 1, name: "Euro", small: "EUR", value: 1.091, symbol: "€", status: 1}
        }}
      giftCardClick={()=>{}}
      expireText="Expired"
      usedAtText="used At Text"
      usedText="used Text"
      noText="no"
      yesText="yes"
      amountText="Amount"
      giftCardExpireAt="12-12-12"
      giftCardInstitutionCreatedAt="12-12-12"
      giftCardAmountValue="12€"
    />
  </div>
</div>

