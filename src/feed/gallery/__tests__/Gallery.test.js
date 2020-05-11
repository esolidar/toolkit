/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
/* global beforeAll */
/* global afterAll */
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../Gallery';

const props = {
  post: {
    user: {
      id: 1,
      firstName: 'Joana',
      lastName: 'Pereira',
      language: {
        name: 'English',
      },
      thumbs: {
        thumb: 'https://static.esolidar.com/frontend/logo/esolidar/logo.png',
      },
    },
  },
  comments: {},
  lovesCount: 12,
  loves: {},
  commentsCount: 12,
  highlightedOverlayText: 'destaque',
  feedType: 'myFeed',
  lovesList: {},
  loveClick: () => { },
  openCommentsMobile: () => { },
  nextPage: () => { },
  queryCommentId: 12,
  queryResponseId: 12,
  showMobileComments: false,
  closeModal: false,
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


describe('Gallery component', () => {
  it('renders Gallery correctly', () => {
    const component = shallow(<Gallery {...props} />);
    expect(component).toHaveLength(1);
  });
});
