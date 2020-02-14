/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import ProjectAddForm from '../ProjectAddForm';

const props = {
  form: [],
  ods: [],
  categories: [],
  lang: 'pt',
  color: {},
  errors: {},
};

describe('ProjectAddForm component', () => {
  it('renders ProjectAddForm correctly', () => {
    const component = shallow(<ProjectAddForm {...props} />);
    expect(component).toHaveLength(1);
  });
});
