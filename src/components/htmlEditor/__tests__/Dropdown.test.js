import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../Dropdown';

describe('Dropdown component', () => {
  it('renders Dropdown correctly', () => {
    const component = shallow(
      <Dropdown title="Colunas" options={[1, 2, 3]} value={2} handleChange={() => {}} />
    );
    expect(component).toHaveLength(1);
  });

  it('renders the correct number of options', () => {
    const component = shallow(
      <Dropdown title="Colunas" options={[1, 2, 3]} value={2} handleChange={() => {}} />
    );
    expect(component.find('Option').length).toBe(3);
  });
});
