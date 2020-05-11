/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import CommentOptions from '../CommentOptions';

const props = {
  comment: [],
  companyEdit: [],
  logeduser: 0,
  editPost: () => {},
  deleteComment: () => {},
  showModalDelete: false,
  showModalUpdate: false,
  closeModal: () => {},
  confirmDelete: () => {},
  companyLogo: 'https://static.esolidar.com/frontend/logo/esolidar/logo.png',
  companyName: 'eSolidar',
  textareaText: 'Lorem ipsum',
  textareaOnChange: () => {},
  errors: [],
  role: null,
  onChangCheckBox: () => {},
  as_company: 1,
  isLoading: false,
  onSubmit: () => {},
};

describe('CommentOptions component', () => {
  it('renders CommentOptions correctly', () => {
    const component = shallow(<CommentOptions {...props} />);
    expect(component).toHaveLength(1);
  });
});
