/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ReplyReply from '../ReplyReply';

const props = {
  replyCommentButton: () => {},
  response: {},
};

describe('ReplyReply component', () => {
  it('renders ReplyReply correctly', () => {
    const component = shallow(<ReplyReply {...props} />);
    expect(component).toHaveLength(1);
  });
});
