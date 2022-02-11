import React from 'react';
import { shallow } from 'enzyme';
import LocationTextField from '../index';

const changed = jest.fn();

describe('LocationTextField component', () => {
  it('renders LocationTextField correctly', () => {
    const component = shallow(<LocationTextField field="businessEmail" onChange={changed} />);
    expect(component).toHaveLength(1);
    expect(component.find('[dataTestId="input-left-icon"]').length).toBe(0);
    expect(component.find('[dataTestId="input-right-icon"]').length).toBe(0);
  });

  it('renders LocationTextField with field label', () => {
    const component = shallow(
      <LocationTextField
        label="For Companies"
        field="businessEmail"
        onChange={changed}
        disabled={true}
      />
    );
    expect(component.find('InputLabel')).toHaveLength(1);
  });

  it('renders LocationTextField with string error', () => {
    const component = shallow(
      <LocationTextField field="businessEmail" onChange={changed} error="error" />
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders LocationTextField with object error', () => {
    const component = shallow(
      <LocationTextField field="businessEmail" onChange={changed} error="error" />
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders LocationTextField with message', () => {
    const component = shallow(
      <LocationTextField field="businessEmail" onChange={changed} message="message" />
    );
    expect(component.find('.form-group').hasClass('has-error')).toEqual(true);
    expect(component.find('.form-group .help-block')).toHaveLength(1);
  });

  it('renders LocationTextField classes from className prop', () => {
    const component = shallow(
      <LocationTextField field="businessEmail" className="test new-class" />
    );
    expect(component.find('.test').length).toBe(1);
    expect(component.find('.new-class').length).toBe(1);
  });

  it('renders LocationTextField with left and delete button', () => {
    const component = shallow(
      <LocationTextField leftIcon={{ name: 'icon-search', show: true }} local="teste" />
    );

    expect(component.find('[dataTestId="input-left-icon"]').length).toBe(1);
    expect(component.find('.icon-left').length).toBe(1);

    expect(component.find('[dataTestId="input-right-icon"]').length).toBe(1);
    expect(component.find('.icon-left').length).toBe(1);
  });
});
