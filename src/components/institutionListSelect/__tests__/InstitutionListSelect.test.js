/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import InstitutionListSelect from '../index';

const props = {
  institutions: [],
  onChangeInstitutionCategory: () => {},
  selectCategoryText: 'selectCategoryText',
  error: {},
  onSearch: () => {},
  categories: [],
  search: '',
  handlePageChange: () => {},
  npoId: 1,
  institutionSelected: 1,
  onChange: () => {},
  selectText: '',
  NoResultsText: '',
  pagination: {},
};

describe('InstitutionListSelect component', () => {
  it('renders InstitutionListSelect correctly', () => {
    const component = shallow(<InstitutionListSelect {...props} />);
    expect(component).toHaveLength(1);
  });
});
