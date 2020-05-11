/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import CommentMobile from '../CommentMobile';

const props = {
  comments: [],
  post: [],
  isLoading: false,
};

describe('CommentMobile component', () => {
  it('renders CommentMobile correctly', () => {
    const component = shallow(<CommentMobile {...props} />);
    expect(component).toHaveLength(1);
  });
});
