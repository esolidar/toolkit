import React, { useState } from 'react';
import InstitutionListSelect from './InstitutionListSelect';
import institution from '../../../__mocks__/institution';

export default {
  title: 'Components/InstitutionListSelect',
  component: InstitutionListSelect,
};

const Template = args => {
  const [institutionSelected, setInstitutionSelected] = useState(args.institutionSelected);

  const handleOnChange = value => {
    setInstitutionSelected(value.id);
  };

  const handleOnRemove = () => {
    setInstitutionSelected(args.institutionSelected);
  };

  return (
    <InstitutionListSelect
      {...args}
      institutionSelected={institutionSelected}
      onChange={handleOnChange}
      removeInstitutionSelected={handleOnRemove}
    />
  );
};

export const Default = Template.bind({});
export const ListFooter = Template.bind({});

Default.parameters = {
  jest: ['InstitutionListSelect.test.js'],
};

const istitution2 = { ...institution };
istitution2.id = 31;

Default.args = {
  institutionSelected: Number(''),
  user_id: null,
  isLoading: false,
  institutions: [institution, istitution2],
  categories: [],
  onChangeInstitutionCategory: () => {},
  removeInstitutionSelected: () => {},
  handlePageChange: () => {},
  onSearch: () => {},
  NoResultsText: 'No result text',
  selectCategoryText: 'Select Category',
  error: 'error',
  search: 'search',
  npoId: 30,
  pagination: {
    activePage: 1,
    itemsCountPerPage: 6,
    totalItemsCount: 50,
  },
};

ListFooter.args = {
  institutionSelected: Number(''),
  user_id: null,
  isLoading: false,
  institutions: [institution, istitution2],
  categories: [],
  onChangeInstitutionCategory: () => {},
  removeInstitutionSelected: () => {},
  handlePageChange: () => {},
  onSearch: () => {},
  NoResultsText: 'No result text',
  selectCategoryText: 'Select Category',
  error: 'error',
  search: 'search',
  npoId: 30,
  pagination: {
    activePage: 1,
    itemsCountPerPage: 6,
    totalItemsCount: 50,
  },
  listFooter: true,
  onChangeSelectPerPage: () => {},
};
