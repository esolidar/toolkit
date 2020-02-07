/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetail from '../ProjectDetail';

const props = {
  project: {
    whitelabel_id: 1,
    category_id: 1,
    user_id: 1,
    category: {
      name: 'Category 1',
    },
    user: {
      name: 'Joel Calheiros',
      thumbs: {
        thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
        standard: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-STANDARD.jpg',
      },
    },
    ods: [1, 4, 6, 9, 11, 12, 17],
    cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
    title: 'Criação de um canil comunitário para o Bairro do Aleixo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor. Vestibulum pulvinar.',
    status: 'IN_REVIEW',
    uuid: '123',
    form: [
      {
        name: 'Qual o modelo de governança da sua Iniciativa?', type: 'textarea', fixed: true, required: true, answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
  },
  returnUrl: '/projects/list',
  returnText: 'Voltar',
  color: '#04C7E5',
  status: 'Aprovado',
  lang: 'pt',
  serverlessResizeImage: 'https://image.testesolidar.com',
};

describe('ProjectDetail component', () => {
  it('renders ProjectDetail correctly', () => {
    const component = shallow(<ProjectDetail {...props} />);
    expect(component).toHaveLength(1);
  });
});
