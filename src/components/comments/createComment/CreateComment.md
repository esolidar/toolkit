#### Import

``` html
import { CreateComment } from '@esolidar/toolkit';

```

#### Example

``` jsx
<CreateComment
  env="https://static.testesolidar.com"
  user={{
    id: 9,
  }}
  comment=""
  translateMessage={() => 'Comment here…'}
  thumb="https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg"
/>
```
