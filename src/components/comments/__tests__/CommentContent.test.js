import React from 'react';
import { shallow } from 'enzyme';
import CommentContent from '../CommentContent';

const comment = {
  comment: 'leni 1 \n line 2',
};

describe('CommentContent component', () => {
  it('renders CommentContent correctly', () => {
    const component = shallow(<CommentContent comment={comment} />);
    expect(component).toHaveLength(1);
  });

  it('renders CommentContent with 2 text lines', () => {
    const component = shallow(<CommentContent comment={comment} />);
    expect(component.find('.content span').length).toBe(2);
  });
});
