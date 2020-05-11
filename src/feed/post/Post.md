#### Import

``` html
import { Post } from '@esolidar/toolkit';

```

#### Example

``` jsx
<Post
  post={{
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
  comments={{}}
  lovesCount={12}
  loves={{}}
  commentsCount={12}
  highlightedOverlayText="destaque"
  feedType="myFeed"
  lovesList={{}}
  loveClick={() => {}}
  openCommentsMobile={() => {}}
  nextPage={() => {}}
  queryCommentId={12}
  queryResponseId={12}
  showMobileComments={false}
  closeModal={false}
/>
```