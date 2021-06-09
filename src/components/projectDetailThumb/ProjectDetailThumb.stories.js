import React from 'react';
import ProjectDetailThumb from './ProjectDetailThumb';

export default {
  title: 'Components/Projects/ProjectDetailThumb',
  component: ProjectDetailThumb,
};

const Template = args => (
  <div style={{ width: '300px' }}>
    <ProjectDetailThumb {...args} />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ProjectDetailThumb.test.js'],
};
Default.args = {
  project: {
    whitelabel_id: 1,
    category_id: 1,
    project_category: {
      name: 'Ambiente',
    },
    user_id: 1,
    user: {
      name: 'Joel Calheiros',
      thumbs: {
        thumb: 'https://cdn.testesolidar.com/users/9/9-THUMB.jpg',
        standard: 'https://cdn.testesolidar.com/users/9/9-STANDARD.jpg',
      },
    },
    ods: [
      {
        created_at: '2020-02-17 16:43:45',
        id: 1,
        laravel_through_key: 26,
        name: '1-ods-1',
        ods_id: 1,
        status: true,
        tag_name: 'ods-1',
        updated_at: '2020-02-17 16:44:07',
      },
      {
        created_at: '2020-02-17 16:43:45',
        id: 2,
        laravel_through_key: 26,
        name: '2-ods-2',
        ods_id: 2,
        status: true,
        tag_name: 'ods-2',
        updated_at: '2020-02-17 16:44:07',
      },
      {
        created_at: '2020-02-17 16:43:45',
        id: 3,
        laravel_through_key: 26,
        name: '3-ods-3',
        ods_id: 3,
        status: true,
        tag_name: 'ods-3',
        updated_at: '2020-02-17 16:44:07',
      },
      {
        created_at: '2020-02-17 16:43:45',
        id: 4,
        laravel_through_key: 26,
        name: '4-ods-4',
        ods_id: 4,
        status: true,
        tag_name: 'ods-4',
        updated_at: '2020-02-17 16:44:07',
      },
      {
        created_at: '2020-02-17 16:43:45',
        id: 5,
        laravel_through_key: 26,
        name: '5-ods-5',
        ods_id: 5,
        status: true,
        tag_name: 'ods-5',
        updated_at: '2020-02-17 16:44:07',
      },
      {
        created_at: '2020-02-17 16:43:45',
        id: 6,
        laravel_through_key: 26,
        name: '6-ods-6',
        ods_id: 6,
        status: true,
        tag_name: 'ods-6',
        updated_at: '2020-02-17 16:44:07',
      },
    ],
    cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
    title: 'Criação de um canil comunitário para o Bairro do Aleixo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
    status: 'IN_REVIEW',
    uuid: '123',
    form: [
      {
        type: 'title',
        name: 'asdasd',
      },
      {
        name: 'Qual o modelo de governança da sua Iniciativa?',
        type: 'textarea',
        fixed: true,
        required: false,
        reply: '',
      },
      {
        name: 'Entidade Associada',
        help: '',
        type: 'input',
        required: true,
        reply:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      },
      {
        name: 'Qual o problema social/ambiental que pretende a resolver?',
        help: 'Justifique porque o problema que está a resolver é…cia deste problema gera consequências negativas).',
        type: 'textarea',
        required: true,
        reply:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      },
      {
        name: 'A solução é Inovadora? Justifique.',
        help: 'A solução do seu projeto é inovadora se resolver o… que não está a ser resolvido por nenhuma solução',
        type: 'textarea',
        required: true,
        reply:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      },
      {
        name: 'A sua solução é escalável e replicável?',
        help: 'A sua solução é replicável se conseguir aplicá-la …e energia eléctrica para os agregados familiares.',
        type: 'textarea',
        required: true,
        reply:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      },
      {
        name: 'A sua solução gera impacto?',
        help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
        type: 'textarea',
        required: true,
        reply:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      },
      {
        name: 'A sua solução é sustentável? Tem um modelo de negócios?',
        help: 'Descreva a forma como o seu projeto permite angari…ga pela solução? Para quem é que esta gera valor?',
        type: 'textarea',
        required: true,
        reply:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
      },
    ],
    images: [
      {
        id: 311,
        request_id: 204,
        streamImage: 'amazons3',
        image: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7.jpg',
        image_type: 'image/jpeg',
        image_size: '53730',
        position: 1,
        updated_at: '2020-01-31 14:17:20',
        created_at: '2020-01-31 14:16:37',
        thumbs: {
          standard: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-STANDARD.jpg',
          detail: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-DETAIL.jpg',
          thumb: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-THUMB.jpg',
        },
      },
    ],
    review_average: 4,
  },
  color: '#04C7E5',
  status: 'Aprovado',
  lang: 'pt',
  serverlessResizeImage: 'https://image.testesolidar.com',
  showReview: true,
};
