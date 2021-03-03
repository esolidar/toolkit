import React, { useState as useStateMock } from 'react';
import { shallow } from 'enzyme';
import FileInput from '../index';
import cdnStaticUrl from '../../../constants/env';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const changed = jest.fn();

describe('FileInput component', () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders FileInput correctly', () => {
    const wrapper = shallow(<FileInput />);
    expect(wrapper).toHaveLength(1);
  });

  it('FileInput render logo', () => {
    const wrapper = shallow(
      <FileInput
        name="logo_image"
        accept=".png,.jpg,.jpeg"
        disabled=""
        placeholder=""
        value=""
        handleChange={() => {}}
        styleLogo={`background-image: url(${cdnStaticUrl}/frontend/assets/brand-logo.jpg)`}
      />
    );
    expect(wrapper.find('.company-thumb-logo')).toHaveLength(1);
  });

  it('FileInput render cover', () => {
    const wrapper = shallow(
      <FileInput
        name="cover"
        accept=".png,.jpg,.jpeg"
        disabled=""
        placeholder=""
        value=""
        handleChange={() => {}}
        styleLogo={`background-image: url(${cdnStaticUrl}/frontend/assets/brand-logo.jpg)`}
      />
    );
    expect(wrapper.find('.company-thumb-cover')).toHaveLength(1);
  });

  it('FileInput render cover without background image', () => {
    const wrapper = shallow(
      <FileInput
        name="cover"
        accept=".png,.jpg,.jpeg"
        disabled=""
        placeholder=""
        value=""
        handleChange={() => {}}
        styleLogo=""
      />
    );
    expect(wrapper.find('.company-thumb-cover')).toHaveLength(1);
  });

  it('FileInput render cover disabled', () => {
    const wrapper = shallow(
      <FileInput
        name="cover"
        accept=".png,.jpg,.jpeg"
        disabled="disabled"
        placeholder=""
        value=""
        handleChange={() => {}}
        styleLogo=""
      />
    );
    expect(wrapper.find('.input-image').at(1).is('[disabled]')).toBe(true);
  });

  it('FileInput call usestate', () => {
    const event = {
      target: {
        value: 'C:/teste.jpg',
      },
    };

    const wrapper = shallow(
      <FileInput
        name="logo_image"
        accept=".png,.jpg,.jpeg"
        disabled="disabled"
        placeholder=""
        onChange={changed}
        styleLogo=""
      />
    );
    wrapper.find('input[name="logo_image"]').props().onChange(event);
    expect(setState).toHaveBeenCalledTimes(1);
  });

  it('FileInput expect value hook', () => {
    const event = {
      target: {
        value: 'C:/teste.jpg',
      },
    };

    const wrapper = shallow(
      <FileInput
        name="logo_image"
        accept=".png,.jpg,.jpeg"
        disabled="disabled"
        placeholder=""
        onChange={changed}
        styleLogo=""
      />
    );
    wrapper.find('input[name="logo_image"]').props().onChange(event);
    expect(setState).toHaveBeenCalledWith('teste.jpg');
  });
});
