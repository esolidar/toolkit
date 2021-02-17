#### Import

```html
import { FeaturesMenu } from '@esolidar/toolkit';
```

#### Example

```jsx
<FeaturesMenu
  project="whitelabel"
  location="/"
  features={[
    {
      id: 1,
      name: 'feed',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:07',
      created_at: '2019-10-29 18:14:07',
      pivot: {
        subscription_id: 8,
        feature_id: 1,
        hide: 0,
      },
    },
    {
      id: 2,
      name: 'crowdfunding-public',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:07',
      created_at: '2019-10-29 18:14:07',
      pivot: {
        subscription_id: 8,
        feature_id: 1,
        hide: 0,
      },
    },
    {
      id: 3,
      name: 'crowdfunding',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:07',
      created_at: '2019-10-29 18:14:07',
      pivot: {
        subscription_id: 8,
        feature_id: 1,
        hide: 0,
      },
    },
    {
      id: 4,
      name: 'projects',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:07',
      created_at: '2019-10-29 18:14:07',
      pivot: {
        subscription_id: 8,
        feature_id: 1,
        hide: 0,
      },
    },
    {
      id: 7,
      name: 'whitelabel',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:35',
      created_at: '2019-10-29 18:14:35',
      pivot: { subscription_id: 8, feature_id: 7, hide: 0 },
    },
    {
      id: 8,
      name: 'manage-employees',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:40',
      created_at: '2019-10-29 18:14:40',
      pivot: { subscription_id: 8, feature_id: 8, hide: 0 },
    },
    {
      id: 9,
      name: 'giftcards',
      name_en: null,
      description: null,
      status: true,
      description_en: null,
      updated_at: '2019-10-29 18:14:40',
      created_at: '2019-10-29 18:14:40',
    },
  ]}
  translations={{
    feed: 'Social Feed',
    auctions: 'Charity Auctions',
    manageEmployees: 'Manage Employees',
    charityneeds: 'Support a Charity',
    giftCards: 'Gift Cards',
    matchDonations: 'Match Donations',
    crowdfunding: 'Crowdfunding',
    projects: 'Manage Projects',
    crowdfundingPublic: 'Crowdfunding public',
    payments: 'Payments',
    impactAnalytics: 'Statistics',
    survey: 'Employee satisfaction',
  }}
/>
```
