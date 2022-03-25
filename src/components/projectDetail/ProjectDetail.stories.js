import React from 'react';
import ProjectDetail from './ProjectDetail';
import image from '../../../__mocks__/image';

export default {
  title: 'Components/Projects/ProjectDetail',
  component: ProjectDetail,
};

const Template = args => <ProjectDetail {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ProjectDetail.test.js'],
};
Default.args = {
  project: {
    video: 'https://www.youtube.com/watch?v=f7x5IeWi0v8&t',
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
    ods: [1, 4, 6, 9, 11, 12, 17],
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
        id: 'input-19',
        isPrivate: true,
        name: 'Texto privado.',
        position: 1,
        type: 'title',
      },
      {
        id: 'input-10',
        isPrivate: true,
        name: 'Texto privado.',
        position: 2,
        type: 'paragraph',
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
  },
  returnText: 'Voltar',
  color: '#04C7E5',
  status: 'Aprovado',
  lang: 'pt',
  serverlessResizeImage: 'https://image.testesolidar.com',
  admin: {
    changeStatus: () => {},
    pendingText: 'Pendente',
    requestInfoText: 'Solicitar informação',
    inReviewText: 'Em revisão',
    aproveText: 'Aprovar',
    completeText: 'Finalizar',
    rejectText: 'Rejeitar',
  },
};
