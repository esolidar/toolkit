import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormatCurrency from '../index';

configure({ adapter: new Adapter() });

describe('<FormatCurrency />', function () {
  it('component renders', () => {
    const wrapper = shallow(<FormatCurrency currency="EUR" value={1000} />);
    expect(wrapper).toHaveLength(1);
  });
});
