import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextFieldCurrency from '../index';

configure({ adapter: new Adapter() });

describe('<TextFieldCurrency />', function () {
  it('component renders', () => {
    const wrapper = shallow(<TextFieldCurrency currency="EUR" value={1000} />);
    expect(wrapper).toHaveLength(1);
  });
});
