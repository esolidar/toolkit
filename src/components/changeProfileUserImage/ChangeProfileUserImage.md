#### Import

```js static
import ChangeProfileUserImage from '@esolidar/toolkit/lib/components/changeProfileUserImage';
```

#### Example

```jsx
<ChangeProfileUserImage
  translateMessage={() => 'Some text'}
  color={{
    primaryColor: '#ddd',
  }}
  thumb="https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485"
  errors={{}}
  onDrop={() => {}}
  env={{
    serverlessResizeImage: 'https://image.testesolidar.com',
  }}
/>
```
