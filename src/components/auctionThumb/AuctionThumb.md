#### Import

```js static
import AuctionThumb from '@esolidar/toolkit/lib/components/auctionThumb';
```

#### Example

```jsx
<div style={{float:'left'}}>
<AuctionThumb
  lang="pt"
  auction={
    {
        private: 0,
        id: 299,
        user_id: 1124,
        currency_id: 1,
        title: "Leilão PT",
        title_en: "Leilão EN",
        bid_start: 3,
        dateStart: "2020-02-08 07:00:00",
        dateLimit: "2020-07-20 16:00:00",
        last_bid: {
            id: 1241,
            auction_id: 299,
            value: 31,
        },
        images: [
            {
                id: 200,
                auction_id: 299,
                streamImage: "amazons3",
                image_name: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg",
                thumb: 0,
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
        currency: {
            id: 1,
            name: "Euro",
            small: "EUR",
            value: "1.19",
            symbol: "€",
            lastUpdate: "2020-11-26 12:00:05"
        },
        recipient: {
            id: 1124,
            institution_id: 30,
            currency: {
                id: 2,
                name: "U. S. Dollar",
                small: "USD",
                value: "1",
                symbol: "$",
            },
            image: null,
            thumbs: {
                original: "https://static.testesolidar.com/frontend/assets/no-image.png",
                standard: "https://static.testesolidar.com/frontend/assets/no-image.png",
                thumb: "https://static.testesolidar.com/frontend/assets/no-image.png"
            },
            institution: {
                id: 30,
                name: "Helpo",
                image: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                currency: {
                    id: 2
                },
                thumbs: {
                    detail: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg",
                    thumb: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg",
                },
            },
        },
    }
  }
/>
</div>

<div style={{float:'left'}}>
<AuctionThumb
  auction={
    {
        private: 1,
        id: 299,
        user_id: 1124,
        currency_id: 1,
        title: "0 - teste caracter especial 2019/2020",
        title_en: "teste caracter especial 2019/2020",
        bid_start: 3,
        dateStart: "2020-02-08 07:00:00",
        dateLimit: "2020-07-20 16:00:00",
        images: [
            {
                id: 200,
                auction_id: 299,
                streamImage: "amazons3",
                image_name: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg",
                thumbs: {
                    standard: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg",
                    detail: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg",
                    pin: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg",
                    thumb: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg"
                },
            },
        ],
        currency: {
            id: 1,
            name: "Euro",
            small: "EUR",
            value: "1.19",
            symbol: "€",
        },
        recipient: {
            id: 1124,
            institution_id: 30,
            image: null,
            thumbs: {
                original: "https://static.testesolidar.com/frontend/assets/no-image.png",
                standard: "https://static.testesolidar.com/frontend/assets/no-image.png",
                thumb: "https://static.testesolidar.com/frontend/assets/no-image.png"
            },
            institution: {
                id: 30,
                name: "Helpo",
                image: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                currency: {
                    id: 2
                },
                thumbs: {
                    detail: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg",
                    thumb: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg",
                },
            },
        },
    }
  }
  thumb={true}
/>
</div>
```
