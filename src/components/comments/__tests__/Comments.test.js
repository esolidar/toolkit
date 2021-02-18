/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../index';

const props = {
  comments: [
    {
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
      user_id: 1275,
      replies: [],
    },
    {
      as_company: 0,
      comment: 'Muito boa mesmo',
      comment_id: null,
      company_id: 1,
      created_at: '2020-06-12 16:50:47',
      crowdfunding_id: 88,
      id: 375,
      updated_at: '2020-06-12 16:50:47',
      user_id: 9,
      user: {
        name: 'Joel Calheiros',
        thumbs: {
          original: 'https://cdn.testesolidar.com/users/9/1591351190.jpg',
          standard: 'https://cdn.testesolidar.com/users/9/1591351190-STANDARD.jpg',
          thumb: 'https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg',
        },
      },
      company: {
        name: 'Company name',
        thumbs: {
          original: 'https://cdn.testesolidar.com/users/9/1591351190.jpg',
          standard: 'https://cdn.testesolidar.com/users/9/1591351190-STANDARD.jpg',
          thumb: 'https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg',
        },
      },
      as_company_response: {
        name: 'Company name',
        thumbs: {
          original: 'https://cdn.testesolidar.com/users/9/1591351190.jpg',
          standard: 'https://cdn.testesolidar.com/users/9/1591351190-STANDARD.jpg',
          thumb: 'https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg',
        },
      },
      replies: [
        {
          comment: 'boa tarde',
          comment_id: 68,
          company_id: null,
          created_at: '2020-06-23 10:16:54',
          crowdfunding_id: 46,
          id: 73,
          updated_at: '2020-06-23 10:16:54',
          user: {
            name: 'Joel Calheiros',
            thumbs: {
              original: 'https://cdn.testesolidar.com/users/9/1591351190.jpg',
              standard: 'https://cdn.testesolidar.com/users/9/1591351190-STANDARD.jpg',
              thumb: 'https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg',
            },
          },
          user_id: 9,
        },
      ],
    },
  ],
  env: '',
  user: {},
  deleteComment: () => {},
  getEmployeeName: () => {},
  reply: '',
  requireLogin: () => {},
  onSubmitResponse: () => {},
  laodingPostReply: false,
  loadMore: () => {},
  onChange: () => {},
  translateMessage: () => {},
  totalComments: 3,
  loadingMoreComments: false,
  loadMoreComments: () => {},
  thumb: 'image.png',
};

describe('Comments component', () => {
  it('renders Comments correctly', () => {
    const component = shallow(<Comments {...props} />);
    expect(component).toHaveLength(1);
  });

  it('show readmore comments button', () => {
    const component = shallow(<Comments {...props} />);
    expect(component.find('.btn-read-more-comments').length).toBe(1);
  });

  it('show CommentHeader', () => {
    const component = shallow(<Comments {...props} />);
    expect(component.find('CommentHeader').length).toBe(2);
  });

  it('show CommentContent', () => {
    const component = shallow(<Comments {...props} />);
    expect(component.find('CommentContent').length).toBe(2);
  });
});
