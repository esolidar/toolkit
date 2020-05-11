/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ReplyOptions from '../ReplyOptions';

const props = {
  editPost: () => {},
  deletePost: () => {},
  showModalDelete: false,
  closeModal: () => {},
  confirmDelete: () => {},
  showModalUpdate: false,
  companyLogo: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png',
  companyName: 'eSolidar',
  textareaText: 'textarea string',
  textareaOnChange: () => {},
  errors: {},
  onChangCheckBox: () => {},
  asCompany: '1',
  isLoading: false,
  onSubmit: () => {},
  response: {},
  commentCompanyId: 1,
  role: '1',
  loggedUserId: 1006,
};

describe('ReplyOptions component', () => {
  it('renders ReplyOptions correctly', () => {
    const component = shallow(<ReplyOptions {...props} />);
    expect(component).toHaveLength(1);
  });
});
