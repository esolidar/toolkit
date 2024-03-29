/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import Post from '../index';

const props = {
  post: {
    text: 'Lorem ipsum lorem ipsum lorem ipsum',
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
    replies: [],
  },
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
  commentUpdated: {},
  editComment: () => {},
  deleteComment: () => {},
  onSubmitReply: () => {},
  addMessageKeyDown: () => {},
  replyValue: '',
  commentHereText: 'Comment here ...',
  textareaOnChange: () => {},
  errors: [],
  deletedComment: {},
  onKeyDown: () => {},
};

describe('Post component', () => {
  it('renders Post correctly', () => {
    const component = shallow(<Post {...props} />);
    expect(component).toHaveLength(1);
  });
});
