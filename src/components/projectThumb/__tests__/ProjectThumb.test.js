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
    ods: [1, 4, 6, 9, 11, 12, 17],
    cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
    title: 'Criação de um canil comunitário para o Bairro do Aleixo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    form: '{}',
    status: 'IN_REVIEW',
    uuid: '123',
  },
  serverlessResizeImage: 'https://image.testesolidar.com',
  lang: 'pt',
  cols: 3,
  showStatus: true,
  status: 'Em revisão',
};

describe('BoxInfo component', () => {
  it('renders BoxInfo correctly', () => {
    const component = shallow(<ProjectThumb {...props} />);
    expect(component).toHaveLength(1);
  });
});
