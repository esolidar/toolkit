/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import ProjectAddForm from '../index';

const props = {
  form: [
    { id: 'input-1', name: 'Project title', type: 'input', fixed: true, required: true },
    { id: 'input-2', name: 'Description', type: 'textarea', fixed: true, required: true },
    { id: 'input-3', name: 'Categories', type: 'dropdown', fixed: true, required: true },
    { id: 'input-4', name: 'ODS', type: 'ods', fixed: true },
    { id: 'input-5', name: 'Images', type: 'upload-images', fixed: true },
    { id: 'input-105', name: 'title', type: 'title', isPrivate: true },
    { id: 'input-106', name: 'paragraph', type: 'paragraph', isPrivate: false },
    {
      id: 'input-107',
      name: 'short question',
      help: 'help',
      type: 'input',
      required: true,
      isPrivate: true,
    },
    {
      id: 'input-108',
      name: 'long question',
      help: 'help',
      type: 'textarea',
      required: false,
      isPrivate: false,
    },
    {
      id: 'input-109',
      name: 'single question',
      help: 'help',
      type: 'radiobox',
      required: false,
      isPrivate: false,
      options: ['option A', 'option B', 'option C'],
    },
    {
      id: 'input-110',
      name: 'multiple choice',
      help: 'help',
      type: 'checkbox',
      required: false,
      requiredMin: 1,
      requiredMax: 2,
      isPrivate: false,
      options: ['option A', 'option B', 'option C'],
    },
    {
      type: 'none',
    },
  ],
  ods: [
    {
      created_at: '2020-02-17 16:43:45',
      id: 1,
      name: '1-ods-1',
      ods_id: 1,
      status: true,
      tag_name: 'ods-1',
      updated_at: '2020-02-17 16:44:07',
    },
  ],
  categories: [
    {
      created_at: '2020-08-06 15:56:39',
      id: 9,
      image: 'projects/categories/29e71c2e-4213-45b0-b388-24d81df1b7a8.jpg',
      name: 'Ambiente',
      name_tag: 'ambiente',
      status: 1,
      summary:
        'A tartaruga-marinha-comum (Caretta caretta) também chamada de tartaruga-amarela, tartaruga-cabeçuda, tartaruga-meio-pente ou tartaruga-mestiça, é uma espécie de tartaruga marinha pertencente à família Cheloniidae. Habita no oceano Atlântico, Pac',
      updated_at: '2021-05-04 13:56:32',
      whitelabel_id: 5,
    },
  ],
  lang: 'pt',
  color: {
    primaryColor: 'red',
  },
  errors: {
    'input-110': 'Required',
    'input-109': 'Required',
  },
  dragAndDropMessage: 'dragAndDropMessage',
  hideDropZone: false,
};

describe('ProjectAddForm component', () => {
  it('renders ProjectAddForm correctly', () => {
    const component = shallow(<ProjectAddForm {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders CheckboxField', () => {
    const component = shallow(<ProjectAddForm {...props} />);
    expect(component.find('CheckboxField').length).toBe(3);
  });

  it('renders CheckboxField', () => {
    const component = shallow(<ProjectAddForm {...props} />);
    expect(component.find('RadioField').length).toBe(3);
  });
});
