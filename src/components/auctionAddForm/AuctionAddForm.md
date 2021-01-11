#### Import

``` html
import { AuctionAddForm } from '@esolidar/toolkit';

```

#### Example

``` jsx
<AuctionAddForm
  loadingPage={false}
  action='edit'
  timeZones= {[]}
  showInstitutions={true}
  showProjects={true}
  primaryColor="red"
  institutions={
    [
      {
        user_id: 1124,
        id: 30,
        category_id: 1,
        name: 'Helpo',
        sigla: 'helpo',
        accept_volunteer: 1,
        accept_donations: 1,
        paypal_email: 'donativos@esolidar.com',
        image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/institutions/5db984ee-51b4-43c3-b363-23eaac1f17c3.png',
        cover_image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
        country: 208,
        language: 2,
      },
      {
        user_id: 1125,
        id: 31,
        category_id: 1,
        name: 'Fundo Brasileiro para a Biodiversidade',
        sigla: 'AP Braga',
        accept_volunteer: 1,
        accept_donations: 1,
        paypal_email: 'donativos@esolidar.com',
        image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/institutions/5d00d812-c3a8-47c3-a66c-46bbac1f2e6d.jpg',
        cover_image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
        country: 208,
        language: 2,
      },
    ]
  }
  categories={
    []
  }
  projectsList={[
    {
      id: 1,
      whitelabel_id: 1,
      category_id: 1,
      user_id: 1,
      images: [
        {
          image: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
        },
      ],
      user: {
        name: 'Joel Calheiros',
        thumbs: {
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
        },
      },
      ods: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
      cover: null,
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      form: '{}',
      status: 'PENDING',
      uuid: '123',
    },
    {
      id: 2,
      whitelabel_id: 1,
      category_id: 1,
      user_id: 1,
      images: [
        {
          image: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
        },
      ],
      user: {
        name: 'Joel Calheiros',
        thumbs: {
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
        },
      },
      ods: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
      cover: null,
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      form: '{}',
      status: 'PENDING',
      uuid: '123',
    }
  ]}
/>

```