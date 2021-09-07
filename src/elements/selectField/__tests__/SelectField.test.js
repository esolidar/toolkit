import React from 'react';
import { shallow } from 'enzyme';
import { composeStory } from '@storybook/testing-react';
import SelectField from '../index';
import '@testing-library/jest-dom';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { LeftLabel } from '../SelectField.stories';

const LeftLabelComponent = composeStory(LeftLabel, Meta);

const changed = jest.fn();

describe('SelectField component', () => {
  it('renders SelectField correctly', () => {
    const component = shallow(<SelectField field="example" onChange={changed} />);
    expect(component).toHaveLength(1);
  });

  it('renders SelectField with all string props', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem' }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        selectText="Exemplo"
        error="error"
      />
    );
    expect(component.find('InputLabel')).toHaveLength(1);
    expect(component.find('option')).toHaveLength(2);
    expect(component.find('select').props().name).toEqual('example');
  });

  it('renders SelectField with selectText', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem' }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
      />
    );
    expect(component.find('option')).toHaveLength(2);
  });

  it('renders SelectField without selectText', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem' }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
        hiddenSelectText={true}
      />
    );
    expect(component.find('option')).toHaveLength(1);
  });

  it('renders SelectField with disabled options', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem', disabled: true }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
        hiddenSelectText={true}
      />
    );

    expect(component.find('option').is('[disabled]')).toBe(true);
  });

  it('renders SelectField with error class', () => {
    const component = shallow(
      <SelectField
        options={[{ id: 1, name: 'lorem', disabled: true }]}
        value=""
        label="Select exemple"
        field="example"
        onChange={() => {}}
        error="error"
        hiddenSelectText={true}
      />
    );

    expect(component.find('.form-control').hasClass('required-field')).toEqual(true);
  });

  it('renders Select Field with label on the left side', () => {
    const { getByText, getByClass } = render(<LeftLabelComponent />);

    expect(getByText('Select left')).toBeInTheDocument();
    expect(getByClass('select-field form-group left-label')).toBeInTheDocument();
  });
});
