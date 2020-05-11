/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ReplyComment from '../ReplyComment';

const props = {
  onSubmit: () => { },
  comment: {},
  companyLogo: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png',
  company: {},
  user: {},
  postAsCompany: () => { },
  postAsUser: () => { },
  textareaText: 'textarea text',
  commentHereText: 'comment here',
  textareaOnChange: () => { },
  role: '1',
  locale: 'pt',
  errors: {},
};

describe('ReplyComment component', () => {
  it('renders ReplyComment correctly', () => {
    const component = shallow(<ReplyComment {...props} />);
    expect(component).toHaveLength(1);
  });
});
