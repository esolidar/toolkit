import React from 'react';
import ProjectDetailInfo from './ProjectDetailInfo';
import image from '../../../__mocks__/image';

export default {
  title: 'Components/Projects/ProjectDetailInfo',
  component: ProjectDetailInfo,
};

const Template = args => <ProjectDetailInfo {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ProjectDetailInfo.test.js'],
};
Default.args = {
  showRequestInfoView: true,
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
        created_at: '2020-02-17 16:44:02',
        id: 2,
        laravel_through_key: 85,
        name: '2-ods-2',
        ods_id: 2,
        status: true,
        tag_name: 'ods-2',
        updated_at: '2020-02-17 16:44:12',
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
      { id: 'input-4', name: 'ODS', type: 'ods', fixed: true, position: 3 },
      {
        id: 'input-10',
        isPrivate: true,
        name: 'Texto privado.',
        position: 2,
        type: 'paragraph',
      },
      {
        id: 'input-19',
        isPrivate: true,
        name: 'Texto privado.',
        position: 1,
        type: 'title',
      },
      {
        help: 'New multiple choice',
        id: 'input-100',
        isPrivate: true,
        name: 'New multiple choice',
        options: ['Option 1', 'Option 2', 'Option 3'],
        required: true,
        requiredMax: 3,
        requiredMin: 1,
        type: 'checkbox',
        checked: ['Option 1', 'Option 3'],
      },
      {
        help: 'New single choice',
        id: 'input-102',
        isPrivate: true,
        name: 'New single choice',
        options: ['Option 4', 'Option 5', 'Option 6'],
        required: true,
        type: 'radiobox',
        reply: 'Option 3',
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
    images: [image],
    requestInfoErrors: [0, 3],
  },
  color: '#04C7E5',
  lang: 'en',
  staticUrl: 'https://static.esolidar.com',
};
