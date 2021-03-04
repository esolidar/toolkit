import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CrowdfundingPaymentMethod from '../index';

configure({ adapter: new Adapter() });

const propsEnv = {
  cdnStaticUrl: 'https://static.esolidar.com',
};

describe('CrowdfundingHeader', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CrowdfundingPaymentMethod />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders image utrust', () => {
    const wrapper = shallow(
      <CrowdfundingPaymentMethod utrust={1} cdnStaticUrl={propsEnv.cdnStaticUrl} />
    );
    expect(wrapper.find('img').prop('src')).toEqual(
      'https://static.esolidar.com/frontend/icons/ic-pm-utrust.png'
    );
  });

  it('renders image utrust', () => {
    const wrapper = shallow(
      <CrowdfundingPaymentMethod paypal={0} cdnStaticUrl={propsEnv.cdnStaticUrl} />
    );
    expect(wrapper.find('img')).toHaveLength(0);
  });
});
