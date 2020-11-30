#### Import

``` html
import { DropZoneBox } from '@esolidar/toolkit';
```

#### Example

``` jsx
<DropZoneBox
  accept=".jpg, .jpeg, .png"
  onSelect={() => {}}
  showImagesPreviews={true}
  imagesList={[{
    crowdfunding_id: 87,
    id: 385,
    image: "crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg",
  }]}
  env={{
    serverlessResizeImage: "https://image.testesolidar.com",
  }}
  deleteImageGallery={() => {}}
/>
```
