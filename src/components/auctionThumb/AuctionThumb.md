#### Import

```js static
import AuctionThumb from '@esolidar/toolkit/lib/components/auctionThumb';
```

#### Example

```jsx
<div style={{float:'left'}}>
<AuctionThumb
  auction={
    {
        private: 0,
        id: 299,
        user_id: 1124,
        cause_id: null,
        currency_id: 1,
        title: "0 - teste caracter especial 2019/2020",
        title_en: "teste caracter especial 2019/2020",
        bid_start: 3,
        dateStart: "2020-02-08 07:00:00",
        dateLimit: "2020-07-20 16:00:00",
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
                image: "https://static.esolidar.com/users/9/1606232953.jpg",
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
                image_name: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg",
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
                image: "https://static.esolidar.com/users/9/1606232953.jpg",
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
                image: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                currency: {
                    id: 2
                },
                thumbs: {
                    detail: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg",
                    thumb: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg",
                },
                s3_image_key: "institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                s3_cover_key: null
            },
            phones: [],
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
        cause_id: null,
        currency_id: 1,
        title: "0 - teste caracter especial 2019/2020",
        title_en: "teste caracter especial 2019/2020",
        bid_start: 3,
        dateStart: "2020-02-08 07:00:00",
        dateLimit: "2020-07-20 16:00:00",
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
                image: "https://static.esolidar.com/users/9/1606232953.jpg",
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
                image_name: "https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg",
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
                image: "https://static.esolidar.com/users/9/1606232953.jpg",
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
                image: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                currency: {
                    id: 2
                },
                thumbs: {
                    detail: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg",
                    thumb: "https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg",
                },
                s3_image_key: "institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg",
                s3_cover_key: null
            },
            phones: [],
        },
    }
  }
  thumb={true}
/>
</div>
```
