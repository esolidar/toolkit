#### Import

``` html
import { FeaturesMenu } from '@esolidar/toolkit';

```

#### Example

``` jsx
<FeaturesMenu
  project="business-frontend"
  location="/"
  features={
    [
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
          hide: 0 
        },
      },
      {
        id: 7, name: 'whitelabel', name_en: null, description: null, status: true, description_en: null, updated_at: '2019-10-29 18:14:35', created_at: '2019-10-29 18:14:35', pivot: { subscription_id: 8, feature_id: 7, hide: 0 },
      },
      {
        id: 8, name: 'manage-employees', name_en: null, description: null, status: true, description_en: null, updated_at: '2019-10-29 18:14:40', created_at: '2019-10-29 18:14:40', pivot: { subscription_id: 8, feature_id: 8, hide: 0 },
      },
    ]
  }
  translations={
    {
      feed: "Social Feed",
      auctions: 'Charity Auctions' ,
      manageEmployees: 'Manage Employees',
      charityneeds:'Support a Charity',
      giftCards: 'Gift Cards',
      matchDonations: 'Match Donations',
      crowdfunding: 'Crowdfunding',
      payments: 'Payments',
      impactAnalytics: 'Statistics',
      survey: 'Employee satisfaction',
    }
  }
 />

```
