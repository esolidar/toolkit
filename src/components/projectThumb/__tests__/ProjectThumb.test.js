/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ProjectThumb from '../ProjectThumb';

const props = {
  project: {
    whitelabel_id: 1,
    whitelabel_config: {
      company: {
        logo:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
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
    whitelabel_config: {
      company: {
        logo:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
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
    as_company: 1,
    whitelabel_config: {
      company: {
        logo:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
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

const user = {
  id: 1,
};

beforeAll(() => {
  localStorage.setItem('user', JSON.stringify(user));
});

afterAll(() => {
  localStorage.clear();
});

describe('ProjectThumb component', () => {
  it('renders ProjectThumb correctly', () => {
    const component = shallow(<ProjectThumb {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders ProjectThumb ods with 2 images', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <ProjectThumb {...props} />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();
    expect(component.find('.ods').length).toBe(2);
  });

  it('renders ProjectThumb ods with more images', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <ProjectThumb {...propsWithMoreOds} />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('.ods').length).toBe(4);
    expect(component.find('.more-ods').length).toBe(1);
  });

  it('renders ProjectThumb edit button with PENDING stuts', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <ProjectThumb {...propsPending} />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('.edit-button').length).toBe(1);
  });
});
