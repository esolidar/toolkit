#### Import

```js static
import FileInput from '@esolidar/toolkit/lib/elements/fileInput';
```

#### Example

```jsx
<FileInput
  name="logo_image"
  accept=".png,.jpg,.jpeg"
  disabled=""
  placeholder=""
  onChange={() => {}}
  styleLogo={{backgroundImage: 'url(https://static.esolidar.com/frontend/assets/brand-logo.jpg)'}}
/>

<FileInput
  name="cover"
  accept=".png,.jpg,.jpeg"
  className="input-image"
  disabled=""
  placeholder=""
  onChange={() => {}}
  styleLogo={{backgroundImage: `url(${cdnStaticUrl}/frontend/assets/standard-brand.jpg)`}}
/>
```
