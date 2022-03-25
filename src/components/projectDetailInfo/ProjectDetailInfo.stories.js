import React from 'react';
import ProjectDetailInfo from './ProjectDetailInfo';
import image from '../../../__mocks__/image';

export default {
  title: 'Components/Projects/ProjectDetailInfo',
  component: ProjectDetailInfo,
};

const Template = args => <ProjectDetailInfo {...args} />;

export const Default = Template.bind({});
export const Old = Template.bind({});

Default.parameters = {
  jest: ['ProjectDetailInfo.test.js'],
};
Default.args = {
  showRequestInfoView: false,
  project: {
    title: 'Título ',
    description: 'Descrição ',
    video: 'https://www.youtube.com/watch?v=f7x5IeWi0v8&t',
    categories: 61,
    id: 114,
    configId: 40,
    as_company: 1,
    whitelabel_config: {
      id: 5,
      company_id: 1,
      domain: null,
      subdomain: 'whitelabel.esolidar.local',
      company: {
        id: 1,
        name: 'Webankor (eSolidar)',
        logo: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/9e756c3b-4485-4558-a759-14fc8930c4bd.png',
        cover_image:
          'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
        thumbs: {
          detail:
            'https://cdn.testesolidar.com/companies/9e756c3b-4485-4558-a759-14fc8930c4bd-DETAIL.png',
          thumb:
            'https://cdn.testesolidar.com/companies/9e756c3b-4485-4558-a759-14fc8930c4bd-THUMB.png',
          cover_image:
            'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
        },
        s3_logo_key: 'companies/9e756c3b-4485-4558-a759-14fc8930c4bd.png',
        s3_cover_key: 'companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
        country: null,
        currency: null,
      },
    },
    user: {
      id: 9,
      institution_id: null,
      firstName: 'Joel F.',
      lastName: 'Calheiros',
      image:
        'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/9/1637160860.jpg?v=1637160860',
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: '1.127',
        symbol: '€',
        status: true,
        lastUpdate: '2021-12-15 01:00:14',
      },
      language: {
        id: 1,
        name: 'en',
        translate: 'English',
        status: 1,
        locale: 'en_US',
        dateAdded: '2015-01-06 16:58:22',
      },
      thumbs: {
        original: 'https://cdn.testesolidar.com/users/9/1637160860.jpg?v=1637160860',
        standard: 'https://cdn.testesolidar.com/users/9/1637160860-STANDARD.jpg',
        thumb: 'https://cdn.testesolidar.com/users/9/1637160860-THUMB.jpg',
      },
      work_email: [
        {
          company_id: 1,
          name: 'Joel F. Calheiros',
          role: 'admin',
          department: null,
          user: null,
        },
        {
          company_id: 171,
          name: '',
          role: null,
          department: null,
          user: null,
        },
        {
          company_id: 251,
          name: '',
          role: null,
          department: null,
          user: null,
        },
        {
          company_id: 257,
          name: '',
          role: 'owner',
          department: null,
          user: null,
        },
        {
          company_id: 258,
          name: '',
          role: 'owner',
          department: null,
          user: null,
        },
        {
          company_id: 273,
          name: 'Joel Rocha company',
          role: 'admin',
          department: null,
          user: null,
        },
      ],
      name: 'Joel F. Calheiros',
      s3_key: 'users/9/1637160860.jpg?v=1637160860',
      institution: null,
      phones: [
        {
          id: 77,
          user_id: 9,
          phone: '+351965790981',
          code: '7597',
          main: 1,
          verified: 1,
          updatedDate: '2016-10-14 13:46:02',
          dateAdded: '2016-10-14 14:45:51',
        },
        {
          id: 111,
          user_id: 9,
          phone: '+351965790981',
          code: '5078',
          main: 0,
          verified: 0,
          updatedDate: '2017-02-06 13:31:59',
          dateAdded: '2017-02-06 13:31:59',
        },
        {
          id: 119,
          user_id: 9,
          phone: '351965790981',
          code: '8935',
          main: 0,
          verified: 1,
          updatedDate: '2019-08-26 09:44:12',
          dateAdded: '2019-08-06 11:06:36',
        },
        {
          id: 131,
          user_id: 9,
          phone: '+351965790981',
          code: '1562',
          main: 0,
          verified: 1,
          updatedDate: '2019-09-17 15:22:32',
          dateAdded: '2019-09-17 16:20:50',
        },
        {
          id: 132,
          user_id: 9,
          phone: '+351965790981',
          code: '5530',
          main: 0,
          verified: 1,
          updatedDate: '2019-09-18 13:32:29',
          dateAdded: '2019-09-18 14:32:02',
        },
      ],
    },
    project_category: {
      id: 61,
      whitelabel_id: 5,
      project_config_id: 40,
      name: 'Energia',
      summary:
        'Soluções que visam reduzir os requisitos de energia através de processos mais eficientes em energia',
      status: 1,
      image: '',
      updated_at: '2021-12-15 14:17:23',
      created_at: '2021-12-06 17:22:27',
    },
    cover: null,
    ods: [
      {
        id: 1,
        ods_id: 1,
        tag_name: 'ods-1',
        status: true,
        updated_at: '2020-02-05 17:26:34',
        created_at: '2020-02-05 17:26:27',
        laravel_through_key: 114,
        name: '1-ods-1',
      },
      {
        id: 2,
        ods_id: 2,
        tag_name: 'ods-2',
        status: true,
        updated_at: '2020-02-05 17:26:41',
        created_at: '2020-02-05 17:26:41',
        laravel_through_key: 114,
        name: '2-ods-2',
      },
      {
        id: 10,
        ods_id: 10,
        tag_name: 'ods-10',
        status: true,
        updated_at: '2020-02-05 18:03:58',
        created_at: '2020-02-05 18:03:58',
        laravel_through_key: 114,
        name: '10-ods-10',
      },
    ],
    status: 'PENDING',
    images: [
      {
        id: 261,
        project_id: 114,
        streamImage: 'amazons3',
        image: 'whitelabel/5/projects/905937cd-d059-4284-9c34-a05595e9c989.jpg',
        image_type: 'jpg',
        image_size: 744830,
        default: 1,
        position: 1,
        updated_at: '2021-12-14 16:35:04',
        created_at: '2021-12-14 16:34:57',
      },
    ],
    review_average: null,
    requestInfoErrors: [],
    customQuestions: [
      {
        id: 0,
        type: 'shortAnswer',
        form: {
          privacy: 'public',
          required: false,
          question: 'A solução é Inovadora?',
          description:
            'A solução do seu projeto é inovadora se resolver o problema de uma forma mais eficaz',
        },
        reply: 'A solução é Inovadora',
      },
      {
        id: 1,
        type: 'longAnswer',
        form: {
          privacy: 'public',
          required: true,
          question: 'Qual o problema social/ambiental que pretende a resolver? ',
          description:
            'Justifique porque o problema que está a resolver é 1) Importante (afecta um grande número de pessoas ou um pequeno número de forma muito profunda), é 2) Negligenciado (não está a ser resolvido por outras soluções de forma eficaz), e 3) Gera externalidades (a existência deste problema gera consequências negativas).',
        },
        reply: 'Qual o problema social/ambiental que pretende a resolver?  ',
      },
      {
        id: 2,
        type: 'multiChoice',
        form: {
          privacy: 'private',
          required: true,
          question: "How's the weather today?",
          description: 'Check your weather app',
          options: [
            {
              id: 0,
              value: 'Sunny',
            },
            {
              id: 1,
              value: 'Rainy',
            },
            {
              id: 2,
              value: 'Cloudy',
            },
          ],
        },
        reply: 2,
      },
      {
        id: 3,
        type: 'checkboxes',
        form: {
          privacy: 'public',
          required: true,
          question: 'Escolha as opções que mais lhe agradam',
          description: '',
          answersAllowed: 'range',
          exact: null,
          rangeMin: 2,
          rangeMax: 3,
          options: [
            {
              id: 0,
              value: 'Cinema',
            },
            {
              id: 1,
              value: 'Literatura',
            },
            {
              id: 2,
              value: 'Praia',
            },
            {
              id: 3,
              value: 'Montanha',
            },
          ],
        },
        reply: [1, 3],
      },
      {
        id: 4,
        type: 'section',
        form: {
          privacy: 'public',
          title: 'A sua solução é escalável e replicável? ',
          description: {
            blocks: [
              {
                key: '58kdm',
                text: 'Justifique porque o problema que está a resolver é',
                type: 'unstyled',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: '60hb2',
                text: 'Importante (afecta um grande número de pessoas ou um pequeno número de forma muito profunda)',
                type: 'ordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: 'erm40',
                text: 'Negligenciado (não está a ser resolvido por outras soluções de forma eficaz)',
                type: 'ordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: 'dfnmb',
                text: 'Gera externalidades (a existência deste problema gera consequências negativas)',
                type: 'ordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          },
        },
      },
    ],
    form: [
      {
        id: 0,
        type: 'shortAnswer',
        form: {
          privacy: 'public',
          required: false,
          question: 'A solução é Inovadora?',
          description:
            'A solução do seu projeto é inovadora se resolver o problema de uma forma mais eficaz',
        },
        reply: 'A solução é Inovadora',
      },
      {
        id: 1,
        type: 'longAnswer',
        form: {
          privacy: 'public',
          required: true,
          question: 'Qual o problema social/ambiental que pretende a resolver? ',
          description:
            'Justifique porque o problema que está a resolver é 1) Importante (afecta um grande número de pessoas ou um pequeno número de forma muito profunda), é 2) Negligenciado (não está a ser resolvido por outras soluções de forma eficaz), e 3) Gera externalidades (a existência deste problema gera consequências negativas).',
        },
        reply: 'Qual o problema social/ambiental que pretende a resolver?  ',
      },
      {
        id: 2,
        type: 'multiChoice',
        form: {
          privacy: 'private',
          required: true,
          question: "How's the weather today?",
          description: 'Check your weather app',
          options: [
            {
              id: 0,
              value: 'Sunny',
            },
            {
              id: 1,
              value: 'Rainy',
            },
            {
              id: 2,
              value: 'Cloudy',
            },
          ],
        },
        reply: 2,
      },
      {
        id: 3,
        type: 'checkboxes',
        form: {
          privacy: 'public',
          required: true,
          question: 'Escolha as opções que mais lhe agradam',
          description: '',
          answersAllowed: 'range',
          exact: null,
          rangeMin: 2,
          rangeMax: 3,
          options: [
            {
              id: 0,
              value: 'Cinema',
            },
            {
              id: 1,
              value: 'Literatura',
            },
            {
              id: 2,
              value: 'Praia',
            },
            {
              id: 3,
              value: 'Montanha',
            },
          ],
        },
        reply: [1, 3],
      },
      {
        id: 4,
        type: 'section',
        form: {
          privacy: 'public',
          title: 'A sua solução é escalável e replicável? ',
          description: {
            blocks: [
              {
                key: '58kdm',
                text: 'Justifique porque o problema que está a resolver é',
                type: 'unstyled',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: '60hb2',
                text: 'Importante (afecta um grande número de pessoas ou um pequeno número de forma muito profunda)',
                type: 'ordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: 'erm40',
                text: 'Negligenciado (não está a ser resolvido por outras soluções de forma eficaz)',
                type: 'ordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
              {
                key: 'dfnmb',
                text: 'Gera externalidades (a existência deste problema gera consequências negativas)',
                type: 'ordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          },
        },
      },
    ],
  },
  color: '#04C7E5',
  lang: 'en',
  staticUrl: 'https://static.esolidar.com',
};

Old.args = {
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
