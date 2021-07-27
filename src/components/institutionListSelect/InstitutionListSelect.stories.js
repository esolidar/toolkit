import React, { useState } from 'react';
import InstitutionListSelect from './InstitutionListSelect';

export default {
  title: 'Components/InstitutionListSelect',
  component: InstitutionListSelect,
};

const Template = args => {
  const [institutionSelected, setInstitutionSelected] = useState(args.institutionSelected);

  const handleOnChange = value => {
    setInstitutionSelected(value);
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
Default.parameters = {
  jest: ['InstitutionListSelect.test.js'],
};
Default.args = {
  institutionSelected: Number(''),
  user_id: null,
  isLoading: false,
  institutions: [
    {
      user_id: 1124,
      id: 30,
      category_id: 1,
      name: 'Helpo',
      sigla: 'helpo',
      accept_volunteer: 1,
      accept_donations: 1,
      paypal_email: 'donativos@esolidar.com',
      image:
        'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
      cover_image:
        'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
      country: 208,
      language: 2,
    },
    {
      user_id: 1125,
      id: 31,
      category_id: 1,
      name: 'Fundo Brasileiro para a Biodiversidade Fundo Brasileiro para a Biodiversidade Fundo Brasileiro para a Biodiversidade ',
      sigla: 'AP Braga',
      accept_volunteer: 1,
      accept_donations: 1,
      paypal_email: 'donativos@esolidar.com',
      image:
        'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
      cover_image:
        'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
      country: 208,
      language: 2,
    },
  ],
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
