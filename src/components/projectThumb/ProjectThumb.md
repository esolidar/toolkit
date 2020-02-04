#### Import

``` html
import { ProjectThumb } from '@esolidar/toolkit';

```

#### Example

``` jsx
<ProjectThumb
  project={
    {
      whitelabel_id: 1,
      category_id: 1,
      user_id: 1,
      user: {
        name: 'Joel Calheiros',
        thumbs: {
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
        },
      },
      ods: [1,4,6,9,11,12,17],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      form: '{}',
      status: 'IN_REVIEW',
      uuid: '123',
    }
  }
  serverlessResizeImage='https://image.testesolidar.com'
  lang='pt'
  cols={3}
  showStatus={true}
  status='Em revisão'
/>

```
