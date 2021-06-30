/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import InstitutionListSelect from '../index';
import institution from '../../../../__mocks__/institution';

const props = {
  institutions: [institution],
  onChangeInstitutionCategory: () => {},
  selectCategoryText: 'selectCategoryText',
  error: {},
  onSearch: () => {},
  categories: [],
  search: '',
  handlePageChange: () => {},
  removeInstitutionSelected: () => {},
  npoId: 1,
  institutionSelected: 1,
  onChange: () => {},
  selectText: '',
  NoResultsText: '',
  pagination: {
    activePage: 1,
    itemsCountPerPage: 5,
    totalItemsCount: 10,
  },
  user_id: 30,
};

describe('InstitutionListSelect component', () => {
  it('renders InstitutionListSelect correctly', () => {
    const component = shallow(<InstitutionListSelect {...props} />);
    expect(component).toHaveLength(1);
    expect(component.find('.npo-thumb')).toHaveLength(1);
  });

  it('renders InstitutionListSelect correctly without institutions', () => {
    props.institutions = [];
    const component = shallow(<InstitutionListSelect {...props} />);
    expect(component.find('.npo-thumb')).toHaveLength(0);
    expect(component.find('.no-results')).toHaveLength(1);
  });
});
