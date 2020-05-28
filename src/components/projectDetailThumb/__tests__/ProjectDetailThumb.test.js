/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetailThumb from '../ProjectDetailThumb';

describe('ProjectDetailThumb component', () => {
  it('renders ProjectDetailThumb correctly', () => {
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
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
          standard: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-STANDARD.jpg',
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
          type: 'title', name: 'asdasd',
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
    };
    const component = shallow(<ProjectDetailThumb project={project} lang="pt" serverlessResizeImage="https://image.testesolidar.com" />);
    expect(component).toHaveLength(1);
  });


  it('should hide admin buttons', () => {
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
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
          standard: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-STANDARD.jpg',
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
          type: 'title', name: 'asdasd',
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
          reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'A sua solução gera impacto?',
          help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
    };

    const component = shallow(<ProjectDetailThumb project={project} lang="pt" serverlessResizeImage="https://image.testesolidar.com" />);
    expect(component.find('.admin-buttons').length).toBe(0);
  });

  it('should show admin buttons', () => {
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
          thumb: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-THUMB.jpg',
          standard: 'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/users/9/9-STANDARD.jpg',
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
          type: 'title', name: 'asdasd',
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
          reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'A sua solução gera impacto?',
          help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
    };

    const admin = {
      changeStatus: () => { },
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(<ProjectDetailThumb project={project} lang="pt" serverlessResizeImage="https://image.testesolidar.com" admin={admin} />);
    expect(component.find('.admin-buttons').length).toBe(1);
  });
});
