/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
/* global beforeAll */
/* global afterAll */
import React from 'react';
import { shallow } from 'enzyme';
import Response from '../Response';

const props = {
  response: {
    as_company: 1,
    auction_id: null,
    comments_count: 1,
    company_id: 1007,
    created_at: '2019-06-06 11:01:29',
    highlighted: 0,
    id: 256,
    images: [{ id: 476, post_id: 256, streamImage: 'amazons3' }],
    post_id: null,
    public: 0,
    share: null,
    share_id: null,
    text: 'A Rainbow Braga promoveu, ontem 4 de Junho, o evento solidário!',
    type: 'gallery',
    updated_at: '2019-06-06 10:01:29',
    user: {
      id: 9, institution_id: null, firstName: 'Joel', lastName: 'Calheiros',
    },
    user_id: 9,
  },
  updateResponse: {},
  toggleLines: () => { },
  postCompanyId: 1,
  readMore: 0,
};

const JSONCompany = {
  id: 1,
  thumbs: {
    thumb: 'https://static.esolidar.com/frontend/logo/esolidar/logo.png',
  },
};

const JSONUser = {
  id: 1,
  firstName: 'Maria',
  lastName: 'Silva',
  language: {
    name: 'English',
  },
};

beforeAll(() => {
  localStorage.setItem('company', JSON.stringify(JSONCompany));
  localStorage.setItem('user', JSON.stringify(JSONUser));
});

afterAll(() => {
  localStorage.clear();
});

describe('Response component', () => {
  it('renders Response correctly', () => {
    const component = shallow(<Response {...props} />);
    expect(component).toHaveLength(1);
  });
});
