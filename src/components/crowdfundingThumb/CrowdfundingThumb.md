#### Import

```js static
import CrowdfundingThumb from '@esolidar/toolkit/lib/components/crowdfundingThumb';
```

#### Example

```jsx
<CrowdfundingThumb
  thumb={{
    id: 34,
    user_id: null,
    institution_id: 66,
    company_id: 1,
    sub_category_id: null,
    product_id: 38,
    title: 'Campanha de teste',
    title_en: null,
    tags: null,
    description: 'asdasdasd',
    description_en: null,
    video: null,
    contributes_sum: 10,
    reward: 0,
    reward_description: null,
    goal: 100,
    minimum_contribution: 1,
    currency_id: 1,
    start_date: '2020-04-03 03:00:00',
    end_date: '2020-04-30 03:00:00',
    position: 0,
    recipient_visible: 1,
    status: 'approved',
    esolidar_list: 0,
    images: [
      {
        id: 8,
        crowdfunding_id: 34,
        image: 'institution/crowdfunding/970a2734-9f57-4794-9e4b-0ce1c415c922.png',
      },
    ],
    institution: {
      thumbs: {
        detail:
          'https://cdn.testesolidar.com/institutions/952d21fa-61ef-48f4-87cd-37e12ad23ae1-DETAIL.jpeg',
        thumb:
          'https://cdn.testesolidar.com/institutions/952d21fa-61ef-48f4-87cd-37e12ad23ae1-THUMB.jpeg',
      },
    },
    currency: {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: 1.08,
      symbol: '€',
      status: 1,
      lastUpdate: '2020-04-03 12:00:25',
    },
  }}
  env={{
    serverlessResizeImage: 'https://image.testesolidar.com',
  }}
  translations={{
    pending: 'Pending',
    startsIn: 'Starts in',
    endsIn: 'Ends in',
    endedIn: 'Ended in',
    raised: 'Raised',
  }}
  convertedValue="12.00€"
/>
```
