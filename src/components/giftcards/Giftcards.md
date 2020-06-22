#### Import

``` html
import { Giftcards } from '@esolidar/toolkit';
```

#### Example

``` jsx

<Giftcards
  giftCardsList={[
    {
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
    },
    {
      id: 119,
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
    }
  ]}
  usedExpiredText="used or Expired Giftcards"
  usedTitleText="used Title Giftcards"
  InputPlaceholderText="Search text"
  causeText="Lorem ipsum"
  amountText="Amount"
  dateText="Date"
  onSearchTable={()=>{}}
  giftCardsListUsed={[
    {
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
    },
    {
      id: 119,
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
    }
  ]}
  options={{}}
  renderCause={()=>{}}
  rendeAmount={()=>{}}
  giftCardsListActivePage={1}
  giftCardsListPerPage={10}
  giftCardsListTotal={20}
  giftCardsListHandlePageChange={()=>{}}
  activePageUsed={1}
  itemsPerPage={10}
  totalUsed={2}
  handlePageChangeUsed={()=>{}}
/>
```

