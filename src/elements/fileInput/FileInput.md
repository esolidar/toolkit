#### Import

``` html
import { FileInput } from '@esolidar/toolkit';
```

#### Example

``` jsx
<FileInput 
  name="logo_image"
  accept=".png,.jpg,.jpeg"
  disabled=""
  placeholder=""
  onChange={() => {}}
  styleLogo={{backgroundImage: `url('https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/brand-logo.jpg')`}}
/>

<FileInput 
  name="cover"
  accept=".png,.jpg,.jpeg"
  className="input-image"
  disabled=""
  placeholder=""
  onChange={() => {}}
  styleLogo={{backgroundImage: `url('https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/standard-brand.jpg')`}}
/>
```
