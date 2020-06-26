/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import CommentHeader from '../CommentHeader';

const comment = {
  user: {
    id: 1,
  },
};

const user = {
  id: 1,
};

const user2 = {
  id: 2,
};

describe('CommentHeader component', () => {
  it('renders CommentCoCommentHeaderntent correctly', () => {
    const component = shallow(<CommentHeader comment={comment} user={user} newThumb="image.png" newName="User name" deleteComment={() => {}} />);
    expect(component).toHaveLength(1);
  });

  it('Show dropdown if user id is comment user id', () => {
    const component = shallow(<CommentHeader comment={comment} user={user} newThumb="image.png" newName="User name" deleteComment={() => {}} />);
    expect(component.find('Dropdown').length).toBe(1);
  });

  it('Hide dropdown if user id is differnt comment user id', () => {
    const component = shallow(<CommentHeader comment={comment} user={user2} newThumb="image.png" newName="User name" deleteComment={() => {}} />);
    expect(component.find('Dropdown').length).toBe(0);
  });

  it('Show date', () => {
    const component = shallow(<CommentHeader comment={comment} user={user} newThumb="image.png" newName="User name" deleteComment={() => {}} />);
    expect(component.find('.date').length).toBe(1);
  });
});
