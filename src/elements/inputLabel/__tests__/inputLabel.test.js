import React from 'react';
import { shallow } from 'enzyme';
import InputLabel from '../index';

describe('InputLabel component', () => {
  it('renders InputLabel correctly', () => {
    const component = shallow(<InputLabel field="fiend-name" label="Label" />);
    expect(component).toHaveLength(1);
  });

  it('renders showOptionalLabel correctly', () => {
    const component = shallow(
      <InputLabel field="fiend-name" label="Label" showOptionalLabel={true} />
    );
    expect(component.find('.label-optional')).toHaveLength(1);
  });

  it('renders cssClass correctly', () => {
    const component = shallow(<InputLabel field="fiend-name" label="Label" cssClass="new-class" />);
    expect(component.find('.new-class')).toHaveLength(1);
  });
});
