import React from 'react';
import { shallow, configure } from 'enzyme';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { IntlProvider } from 'react-intl';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TextFieldCurrency from '../index';

configure({ adapter: new Adapter() });

const props = {
  value: 1000,
  label: 'Title',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '€ 0,00',
  defaultValue: 'defaultValue',
  disabled: false,
  className: 'teste',
};

describe('render TextFieldCurrency', function () {
  it('component renders', () => {
    const wrapper = shallow(
      <IntlProvider locale="en" messages={translation}>
        <TextFieldCurrency {...props} prefix="EUR" />
      </IntlProvider>
    )
      .shallow()
      .shallow()
      .shallow();
    expect(wrapper).toHaveLength(1);
  });

  it('component verify states and return value EUR formatted', () => {
    const wrapper = shallow(
      <IntlProvider locale="en" messages={translation}>
        <TextFieldCurrency {...props} prefix="EUR" />
      </IntlProvider>
    )
      .shallow()
      .shallow()
      .shallow()
      .shallow();

    expect(wrapper.state('value')).toEqual(1000);
    expect(wrapper.state('prefix')).toEqual('EUR');
    expect(wrapper.state('formattedValue')).toEqual('€1,000.00');
    expect(wrapper).toHaveLength(1);
  });

  it('component verify states and return value USD formatted', () => {
    const wrapper = shallow(
      <IntlProvider locale="en" messages={translation}>
        <TextFieldCurrency {...props} prefix="USD" />
      </IntlProvider>
    )
      .shallow()
      .shallow()
      .shallow()
      .shallow();

    expect(wrapper.state('value')).toEqual(1000);
    expect(wrapper.state('prefix')).toEqual('USD');
    expect(wrapper.state('formattedValue')).toEqual('$1,000.00');
    expect(wrapper).toHaveLength(1);
  });
});
