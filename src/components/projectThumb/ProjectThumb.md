#### Import

``` html
import { ProjectThumb } from '@esolidar/toolkit';

```

#### Example

``` jsx
<ProjectThumb
  project={
    {
      id: 1,
      whitelabel_id: 1,
      category_id: 1,
      user_id: 1,
      images: [
        {
          image: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg'
        }
      ],
      user: {
        name: 'Joel Calheiros',
        thumbs: {
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
        },
      },
      ods: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        }
      ],
      cover: null,
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
  myProject={true}
  select={true}
  selectText="Select"
  selectedText="Selected"
  isSelected={true}
  selectedIds={[1,2,3]}
/>

```
