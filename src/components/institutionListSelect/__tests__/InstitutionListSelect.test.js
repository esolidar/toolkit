/* eslint-disable react/jsx-props-no-spreading */

import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import InstitutionListSelect from '../index';

const fx = jest.fn();

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
  translateMessage: fx,
};

describe('InstitutionListSelect component', () => {
  it('renders InstitutionListSelect correctly', () => {
    const component = shallow(<InstitutionListSelect {...props} />);
    expect(component).toHaveLength(1);
  });
});
