/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ProjectDetailThumb from '../index';

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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          type: 'title',
          name: 'asdasd',
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
    const component = shallow(
      <ProjectDetailThumb
        project={project}
        lang="pt"
        serverlessResizeImage="https://image.testesolidar.com"
      />
    );
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
          thumb: 'https://cdn.testesolidar.com/users/9/9-THUMB.jpg',
          standard: 'https://cdn.testesolidar.com/users/9/9-STANDARD.jpg',
        },
      },
      ods: [],
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
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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

    const component = shallow(
      <ProjectDetailThumb
        project={project}
        lang="pt"
        serverlessResizeImage="https://image.testesolidar.com"
      />
    );
    expect(component.find('.admin-buttons').length).toBe(0);
  });

  it('should show change status SelectField', () => {
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
      ],
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
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
      changeStatus: () => {},
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(
      <IntlProvider locale="en">
        <ProjectDetailThumb
          project={project}
          lang="pt"
          serverlessResizeImage="https://image.testesolidar.com"
          admin={admin}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('SelectField').length).toBe(1);
    expect(component.find('SelectField').props().field).toBe('changeState');
  });

  it('should show request info button if status === IN_REVIEW', () => {
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
      ],
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
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
      changeStatus: () => {},
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(
      <IntlProvider locale="en">
        <ProjectDetailThumb
          project={project}
          lang="pt"
          serverlessResizeImage="https://image.testesolidar.com"
          admin={admin}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('Button').length).toBe(1);
    expect(component.find('Button').props().id).toBe('request-info-btn');
  });

  it('should not show request info button if status !== IN_REVIEW', () => {
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
      ],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'ACCEPTED',
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
          reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
      changeStatus: () => {},
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(
      <ProjectDetailThumb
        project={project}
        lang="pt"
        serverlessResizeImage="https://image.testesolidar.com"
        admin={admin}
      />
    );
    expect(component.find('Button').length).toBe(0);
  });

  it('should show 2 ods images', () => {
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
      ],
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
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
      changeStatus: () => {},
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(
      <IntlProvider locale="en">
        <ProjectDetailThumb
          project={project}
          lang="pt"
          serverlessResizeImage="https://image.testesolidar.com"
          admin={admin}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('.ods').length).toBe(2);
  });

  it('should render rating component if "showReview" is true', () => {
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
      ],
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
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
      review_average: 3,
    };

    const admin = {
      changeStatus: () => {},
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(
      <IntlProvider locale="en">
        <ProjectDetailThumb
          project={project}
          lang="pt"
          serverlessResizeImage="https://image.testesolidar.com"
          admin={admin}
          showReview={true}
          reviewAverage={2}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('RatingAPILayer').length).toBe(1);
  });

  it('should not render rating component if "showReview" is false', () => {
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
      ],
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
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          name: 'A sua solução gera impacto?',
          help:
            'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor turpis. Nulla ut feugiat tortor.',
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
      changeStatus: () => {},
      inReviewText: 'inReviewText',
      aproveText: 'aproveText',
      completeText: 'completeText',
      rejectText: 'rejectText',
    };

    const component = shallow(
      <IntlProvider locale="en">
        <ProjectDetailThumb
          project={project}
          lang="pt"
          serverlessResizeImage="https://image.testesolidar.com"
          admin={admin}
          showReview={false}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('RatingAPILayer').length).toBe(0);
  });
});
