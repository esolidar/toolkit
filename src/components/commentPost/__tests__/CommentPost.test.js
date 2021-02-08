/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import CommentPost from '../CommentPost';

const props = {
  postId: 1,
  showCreateComment: () => {},
  onSubmit: () => {},
  role: 'string',
  companyLogo: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png',
  postAsCompany: () => {},
  locale: 'pt',
  postAsUser: () => {},
  textareaText: 'string',
  commentHereText: 'string',
  textareaOnChange: () => {},
  errors: [],
  user: {
    id: 153074,
    thumbs: {
      original: 'https://cdn.esolidar.com/users/153074/1588601339.jpg',
      standard: 'https://cdn.esolidar.com/users/153074/1588601339-STANDARD.jpg',
      thumb: 'https://cdn.esolidar.com/users/153074/1588601339-THUMB.jpg',
    },
    work_email: [
      {
        company_id: 1007,
        department: null,
        name: 'Patrícia Silva',
        role: 'admin',
        user: null,
      },
    ],
  },
  company: {
    id: 1007,
    thumbs: {
      cover_image:
        'https://cdn.esolidar.com/companies/1007/cover/2b48a9c1-f5f8-4a2a-9c10-4d02ddce451c.jpg',
      detail: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-DETAIL.png',
      thumb: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png',
    },
  },
};

describe('CommentPost component', () => {
  it('renders CommentPost correctly', () => {
    const component = shallow(<CommentPost {...props} />);
    expect(component).toHaveLength(1);
  });
});
