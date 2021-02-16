import React from 'react';
import { shallow } from 'enzyme';
import CommentHeader from '../CommentHeader';

const comment = {
  comment: 'teste 2',
  comment_id: null,
  company_id: null,
  created_at: '2020-08-07 13:07:29',
  crowdfunding_id: 45,
  id: 382,
  updated_at: '2020-08-07 13:07:29',
  user: {
    institution: {
      id: 106,
      image:
        'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b.jpeg',
      name: 'Associação Um Milhão Contra a Pobreza e Exclusão Social em Portugal',
      s3_cover_key: null,
      s3_image_key: 'institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b.jpeg',
      sigla: 'CD',
      thumbs: {
        detail:
          'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b-DETAIL.jpeg',
        thumb:
          'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b-THUMB.jpeg',
      },
    },
  },
  user_id: 1,
  replies: [],
};

const user = {
  id: 1,
};

const user2 = {
  id: 2,
};

describe('CommentHeader component', () => {
  it('renders CommentCoCommentHeaderntent correctly', () => {
    const component = shallow(
      <CommentHeader
        comment={comment}
        user={user}
        newThumb="image.png"
        newName="User name"
        deleteComment={() => {}}
      />
    );
    expect(component).toHaveLength(1);
  });

  it('Show dropdown if user id is comment user id', () => {
    const component = shallow(
      <CommentHeader
        comment={comment}
        user={user}
        newThumb="image.png"
        newName="User name"
        deleteComment={() => {}}
      />
    );
    expect(component.find('Dropdown').length).toBe(1);
  });

  it('Hide dropdown if user id is differnt comment user id', () => {
    const component = shallow(
      <CommentHeader
        comment={comment}
        user={user2}
        newThumb="image.png"
        newName="User name"
        deleteComment={() => {}}
      />
    );
    expect(component.find('Dropdown').length).toBe(0);
  });

  it('Show date', () => {
    const component = shallow(
      <CommentHeader
        comment={comment}
        user={user}
        newThumb="image.png"
        newName="User name"
        deleteComment={() => {}}
      />
    );
    expect(component.find('.date').length).toBe(1);
  });
});
