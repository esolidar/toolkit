/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import ProjectFilters from '../index';

const props = {
  color: 'red',
  searchTitleLabel: 'Pesquisar',
  searchLabelPlaceholder: 'Pesquisar por título',
  onChangeInput: () => {},
  filtersTitleLabel: 'Filtros',
  odsLabel: 'ODS',
  onSelectOds: () => {},
  categories: [
    {
      id: 1,
      name: 'Categoria 1',
    },
  ],
  status: [
    {
      id: 1,
      name: 'Pending',
    },
  ],
  ods: [
    {
      id: 1,
      ods_id: 1,
      name: 'Erradicar a pobreza',
      tag_name: 'ods-1',
      status: 1,
      updated_at: '2020-01-23 10:14:03',
      created_at: '2020-01-23 10:14:03',
    },
  ],
  categoriesLabel: 'Selecione a Categoria',
  statusLabel: 'Selecione o Estado',
  applyButtonLabel: 'Aplicar filtro',
  applyFilter: () => {},
  onSelectCategory: () => {},
  onSelectStatus: () => {},
};

describe('ProjectFilters component', () => {
  it('renders ProjectFilters correctly', () => {
    const component = shallow(<ProjectFilters {...props} />);
    expect(component).toHaveLength(1);
  });
});
