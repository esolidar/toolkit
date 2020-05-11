#### Import

``` html
import { Comment } from '@esolidar/toolkit';

```

#### Example

``` jsx
<Comment
  comment={{
    user: {
      id: 1,
      firstName: 'Maria',
      lastName: 'Silva',
      language: {
        name: 'English',
      },
      thumbs: {
        thumb: 'https://static.esolidar.com/frontend/logo/esolidar/logo.png',
      },
    },
  }}
  responses={[]}
  reply={[]}
  toggleLines={()=>{}}
  showResponses={()=>{}}
  replyCommentButton={()=>{}}
  renderResponse={()=>{}}
  postCompanyId={0}
  readMore={false}
  readMoreText="Read More"
  replyText="Reply"
/>
```