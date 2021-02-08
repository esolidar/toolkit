/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import ProjectAddForm from '../ProjectAddForm';

const props = {
  form: [
    {
      help: 'New multiple choice',
      id: 'input-100',
      isPrivate: true,
      name: 'New multiple choice',
      options: ['Option 1', 'Option 2', 'Option 3'],
      required: true,
      requiredMax: 3,
      requiredMin: 1,
      type: 'checkbox',
      checked: ['Option 3'],
    },
    {
      help: 'New single choice',
      id: 'input-102',
      isPrivate: true,
      name: 'New single choice',
      options: ['Option 4', 'Option 5', 'Option 6'],
      required: true,
      type: 'radiobox',
      reply: 'Option 3',
    },
  ],
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

  it('renders CheckboxField', () => {
    const component = shallow(<ProjectAddForm {...props} />);
    expect(component.find('CheckboxField').length).toBe(3);
  });

  it('renders CheckboxField', () => {
    const component = shallow(<ProjectAddForm {...props} />);
    expect(component.find('RadioField').length).toBe(3);
  });
});
