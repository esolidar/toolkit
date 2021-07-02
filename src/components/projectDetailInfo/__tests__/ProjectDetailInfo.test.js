/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow, mount } from 'enzyme';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { IntlProvider } from 'react-intl';
import ProjectDetailInfo from '../index';
import ods from '../../../../__mocks__/ods';

describe('ProjectDetailInfo component', () => {
  it('renders ProjectDetailInfo correctly', () => {
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
      ods: [ods],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          position: 1,
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
    const component = shallow(<ProjectDetailInfo project={project} lang="en" />);
    expect(component).toHaveLength(1);
  });

  it('should show the correct amount of Question component', () => {
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
      ods: [ods],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          position: 1,
          type: 'title',
          name: 'asdasd',
        },
        {
          position: 2,
          name: 'Qual o modelo de governança da sua Iniciativa?',
          type: 'textarea',
          fixed: true,
          required: false,
          reply: '',
        },
        {
          position: 3,
          name: 'Entidade Associada',
          help: '',
          type: 'input',
          required: true,
          reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          position: 4,
          name: 'A sua solução gera impacto?',
          help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
          type: 'textarea',
          required: true,
          reply: '',
        },
        {
          position: 5,
          name: 'A sua solução gera impacto?',
          help: 'Quem beneficia com a sua solução? Quais os efeitos…nefícios da sua solução e como os pretende medir?',
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
    const component = shallow(<ProjectDetailInfo project={project} lang="en" />);
    expect(component.find('Question').length).toBe(project.form.length);
  });

  it('should show private icon one time', () => {
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
      ods: [ods],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          position: 1,
          name: 'Qual o modelo de governança da sua Iniciativa?',
          type: 'title',
          fixed: true,
          required: false,
          reply: '',
          isPrivate: true,
        },
        {
          position: 2,
          name: 'Qual o modelo de governança da sua Iniciativa?',
          type: 'title',
          fixed: true,
          required: false,
          reply: '',
          isPrivate: false,
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
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <ProjectDetailInfo project={project} lang="en" />
      </IntlProvider>
    );
    expect(component.find('PrivateIcon').length).toBe(1);
  });

  it('should show checkboxField if showRequestInfoView === true', () => {
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
      ods: [ods],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          position: 1,
          name: 'Qual o modelo de governança da sua Iniciativa?',
          type: 'ods',
          fixed: true,
          required: false,
          reply: '',
          isPrivate: false,
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
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <ProjectDetailInfo project={project} showRequestInfoView={true} lang="en" />
      </IntlProvider>
    );
    expect(component.find('CheckboxField').length).toBe(1);
  });

  it('should show TextareaField if question is selected', () => {
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
      ods: [ods],
      cover: 'feed/3f4b8396-c5bd-4c09-bb1f-f0738036e998-DETAIL.jpg',
      title: 'Criação de um canil comunitário para o Bairro do Aleixo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'IN_REVIEW',
      uuid: '123',
      form: [
        {
          position: 1,
          name: 'Qual o modelo de governança da sua Iniciativa?',
          type: 'ods',
          fixed: true,
          required: false,
          reply: '',
          isPrivate: false,
          selected: true,
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
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <ProjectDetailInfo project={project} showRequestInfoView={true} lang="en" />
      </IntlProvider>
    );
    expect(component.find('TextareaField').length).toBe(1);
  });
});
