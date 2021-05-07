import ProjectThumb from './ProjectThumb';

export default {
  title: 'Components/Projects/ProjectThumb',
  component: ProjectThumb,
};

const Template = args => <ProjectThumb {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ProjectThumb.test.js'],
};
Default.args = {
  project: {
    id: 1,
    as_company: 1,
    whitelabel_config: {
      company: {
        logo: 'https://static.esolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
        name: 'Webankor (eSolidar)',
        thumbs: {
          cover_image:
            'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
          detail:
            'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-DETAIL.jpg',
          thumb:
            'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-THUMB.jpg',
        },
      },
      company_id: 1,
    },
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
        thumb: 'https://cdn.testesolidar.com/users/9/9-THUMB.jpg',
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
    ],
    cover: null,
    title:
      'Criação de um canil comunitário para o Bairro do Aleixo. Criação de um canil comunitário para o Bairro do Aleixo. Criação de um canil comunitário para o Bairro do Aleixo.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
    form: '{}',
    status: 'PENDING',
    uuid: '123',
  },
  serverlessResizeImage: 'https://image.testesolidar.com',
  lang: 'pt',
  cols: 3,
  showStatus: true,
  status: 'Em revisão',
  myProject: true,
  select: false,
  selectText: 'Select',
  selectedText: 'Selected',
  isSelected: true,
  selectedIds: [1, 2, 3],
};

export const Secondary = Template.bind({});
Secondary.args = {
  project: {
    id: 2,
    as_company: 0,
    whitelabel_config: null,
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
        thumb: 'https://cdn.testesolidar.com/users/9/9-THUMB.jpg',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar, nunc in maximus tempus, diam tortor ultrices leo, sed tempor nulla elit eget nunc. Nullam lacinia sem ipsum, at fermentum est elementum at. Curabitur ultrices mi tincidunt, feugiat quam vel, fermentum erat. Phasellus eget metus et ante euismod eleifend. Donec in egestas velit. Duis facilisis luctus rutrum.',
    form: '{}',
    status: 'PENDING',
    uuid: '123',
  },
  serverlessResizeImage: 'https://image.testesolidar.com',
  lang: 'pt',
  cols: 3,
  showStatus: true,
  status: 'Em revisão',
  myProject: true,
  select: false,
  selectText: 'Select',
  selectedText: 'Selected',
  isSelected: true,
  selectedIds: [1, 2, 3],
};
