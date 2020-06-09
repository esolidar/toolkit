#### Import

``` html
import { SliderImagesLightbox } from '@esolidar/toolkit';
```

#### Example

``` jsx
<SliderImagesLightbox 
  video="https://www.youtube.com/watch?v=xF_QkfZI1mM"
  images={[
    {
      crowdfunding_id: 61,
      id: 159,
      image: "crowdfundings/4ac3fa5b-b82f-40aa-86f9-b1acab3ddd51(1)-8348f18d-94f5-4f20-8495-946333a87559.jpg",
    },
    {
      crowdfunding_id: 61,
      id: 160,
      image: "crowdfundings/4ac3fa5b-b82f-40aa-86f9-b1acab3ddd51-b4e830ac-ec36-4141-af9d-056b1af217f4.jpg",
    }
  ]}
  env={{
    serverlessResizeImage: 'https://image.testesolidar.com',
  }}
/>
```

