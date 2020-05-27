/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import Post from '../Post';

const props = {
  post: {
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

describe('Post component', () => {
  it('renders Post correctly', () => {
    const component = shallow(<Post {...props} />);
    expect(component).toHaveLength(1);
  });
});
