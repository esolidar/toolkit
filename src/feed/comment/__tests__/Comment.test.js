/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
/* global beforeAll */
/* global afterAll */
import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../Comment';

const props = {
  comment: {
    user: {
      id: 1,
      firstName: 'Maria',
      lastName: 'Silva',
      language: {
        name: 'English',
      },
      thumbs: {
        thumb: 'https://static.esolidar.com/frontend/logo/esolidar/logo.png',
      },
    },
  },
  responses: [],
  reply: [],
  toggleLines: () => {},
  showResponses: () => {},
  replyCommentButton: () => {},
  renderResponse: () => {},
  postCompanyId: 0,
  readMore: false,
  readMoreText: 'Read More',
  replyText: 'Reply',
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


describe('Comment component', () => {
  it('renders Comment correctly', () => {
    const component = shallow(<Comment {...props} />);
    expect(component).toHaveLength(1);
  });
});
