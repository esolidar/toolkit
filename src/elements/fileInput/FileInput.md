#### Import

``` html
import { FileInput } from '@esolidar/toolkit';
import cdnStaticUrl from '../../constants/env';

```

#### Example

``` jsx
<FileInput 
  name="logo_image"
  accept=".png,.jpg,.jpeg"
  disabled=""
  placeholder=""
  onChange={() => {}}
  styleLogo={{backgroundImage: `url(${cdnStaticUrl}/frontend/assets/brand-logo.jpg)`}}
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
