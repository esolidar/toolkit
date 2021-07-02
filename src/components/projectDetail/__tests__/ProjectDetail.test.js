/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetail from '../index';
import image from '../../../../__mocks__/image';

describe('ProjectDetail component', () => {
  it('renders ProjectDetail correctly', () => {
    const project = {
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          type: 'title',
          name: 'asdasd',
        },
      ],
      images: [image],
    };
    const component = shallow(
      <ProjectDetail
        project={project}
        lang="pt"
        serverlessResizeImage="https://image.testesolidar.com"
      />
    );
    expect(component).toHaveLength(1);
  });
});
