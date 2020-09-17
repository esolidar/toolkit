/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ProjectThumb from '../ProjectThumb';

const props = {
  project: {
    whitelabel_id: 1,
    category_id: 1,
    user_id: 1,
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
    ],
    cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
    title: 'Criação de um canil comunitário para o Bairro do Aleixo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    form: '{}',
    status: 'IN_REVIEW',
    uuid: '123',
    images: [],
  },
  serverlessResizeImage: 'https://image.testesolidar.com',
  lang: 'pt',
  cols: 3,
  showStatus: true,
  status: 'Em revisão',
};

const propsWithMoreOds = {
  project: {
    whitelabel_id: 1,
    category_id: 1,
    user_id: 1,
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
      {
        id: 7,
      },
    ],
    cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
    title: 'Criação de um canil comunitário para o Bairro do Aleixo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    form: '{}',
    status: 'IN_REVIEW',
    uuid: '123',
    images: [],
  },
  serverlessResizeImage: 'https://image.testesolidar.com',
  lang: 'pt',
  cols: 3,
  showStatus: true,
  status: 'Em revisão',
};

const propsPending = {
  project: {
    whitelabel_id: 1,
    category_id: 1,
    user_id: 1,
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
    ],
    cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
    title: 'Criação de um canil comunitário para o Bairro do Aleixo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    form: '{}',
    status: 'PENDING',
    uuid: '123',
    images: [],
  },
  serverlessResizeImage: 'https://image.testesolidar.com',
  lang: 'pt',
  cols: 3,
  showStatus: true,
  status: 'Em revisão',
};

describe('ProjectThumb component', () => {
  it('renders ProjectThumb correctly', () => {
    const component = shallow(<ProjectThumb {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders ProjectThumb ods with 2 images', () => {
    const component = shallow(<ProjectThumb {...props} />);
    expect(component.find('.ods').length).toBe(2);
  });

  it('renders ProjectThumb ods with more images', () => {
    const component = shallow(<ProjectThumb {...propsWithMoreOds} />);
    expect(component.find('.ods').length).toBe(4);
    expect(component.find('.more-ods').length).toBe(1);
  });

  it('renders ProjectThumb edit button with PENDING stuts', () => {
    const component = shallow(<ProjectThumb {...propsPending} />);
    expect(component.find('.edit-button').length).toBe(1);
  });
});
