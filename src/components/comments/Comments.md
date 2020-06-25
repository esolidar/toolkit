#### Import

``` html
import { Comments } from '@esolidar/toolkit';

```

#### Example

``` jsx
<Comments
  getEmployeeName={() => "Joel Calheiros"}
  env="https://static.testesolidar.com"
  user={{
    id: 9,
  }}
  comments={[
    {
      as_company: 0,
      comment: "Muito boa mesmo",
      comment_id: null,
      company: {},
      company_id: 1,
      created_at: "2020-06-12 16:50:47",
      crowdfunding_id: 88,
      id: 375,
      updated_at: "2020-06-12 16:50:47",
      user_id: 9,
      user: {
        name: "Joel Calheiros",
        thumbs: {
          original: "https://cdn.testesolidar.com/users/9/1591351190.jpg",
          standard: "https://cdn.testesolidar.com/users/9/1591351190-STANDARD.jpg",
          thumb: "https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg",
        },
      },
      replies: [
        {
          comment: "boa tarde",
          comment_id: 68,
          company_id: null,
          created_at: "2020-06-23 10:16:54",
          crowdfunding_id: 46,
          id: 73,
          updated_at: "2020-06-23 10:16:54",
          user: {
            name: "Joel Calheiros",
            thumbs: {
              original: "https://cdn.testesolidar.com/users/9/1591351190.jpg",
              standard: "https://cdn.testesolidar.com/users/9/1591351190-STANDARD.jpg",
              thumb: "https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg",
            },
          },
          user_id: 9,
        }
      ]
    },
    {
      as_company: 1,
      comment: "excelente iniciativa",
      comment_id: null,
      company_id: 1,
      created_at: "2020-06-12 16:50:30",
      crowdfunding_id: 88,
      id: 374,
      updated_at: "2020-06-12 16:50:30",
      company: {
        name: "eSolidar, S.A.",
        thumbs: {
          cover_image: "https://cdn.testesolidar.com/companies/1/cover/c761bea5-709f-4ac9-8195-9c347c78bc84.jpg",
          detail: "https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png",
          thumb: "https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png",
        },
      },
    },
  ]}
  replies={[
    
  ]}
  translateMessage={() => 'Comment here…'}
/>
```
