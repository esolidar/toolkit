/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { advanceTo } from 'jest-date-mock';
import Countdown from '../Countdown';

jest.useFakeTimers();

configure({ adapter: new Adapter() });
let propsEnded = {};
let propsSoon = {};

beforeAll(() => {
  propsEnded = {
    startDate: '10/01/2016 10:00:00',
    endDate: '10/02/2016 10:00:00',
  };

  propsSoon = {
    startDate: '10/01/2020 10:00:00',
    endDate: '10/02/2020 10:00:00',
  };
});

describe('Countdown', () => {
  it('renders Countdown correctly', () => {
    const componentEnded = shallow(<Countdown {...propsEnded} />);
    const componentSoon = shallow(<Countdown {...propsSoon} />);
    expect(componentEnded).toHaveLength(1);
    expect(componentSoon).toHaveLength(1);
  });

  it('calls componentWillUnmount', () => {
    const component = shallow(<Countdown {...propsEnded} />);
    expect(component.instance().componentWillUnmount());
  });

  it('calls addLeadingZeros to add "0" if less than 10', () => {
    const wrapper = shallow(<Countdown {...propsEnded} />);
    const inst = wrapper.instance();

    expect(inst.addLeadingZeros(9)).toEqual('09');
  });
});

describe('Test calculate countdown', () => {
  it('calls calculateCountdown to ended', () => {
    advanceTo(new Date(2020, 1, 1, 0, 0, 0));

    const wrapper = shallow(<Countdown {...propsEnded} />);
    const inst = wrapper.instance();
    expect(inst.calculateCountdown());
    expect(wrapper.state('status')).toBe('ended');
    expect(inst.calculateCountdown()).toBe(false);
  });

  it('calls calculateCountdown to end in 1 minute', () => {
    advanceTo(new Date(2015, 1, 11, 9, 59, 0));

    const wrapper = shallow(<Countdown {...propsEnded} />);
    const inst = wrapper.instance();

    expect(inst.calculateCountdown().min).toEqual(1);
  });

  it('calls calculateCountdown to end in 1 year', () => {
    advanceTo(new Date(2015, 1, 11, 9, 0, 0));

    const wrapper = shallow(<Countdown {...propsEnded} />);
    const inst = wrapper.instance();

    expect(inst.calculateCountdown().years).toEqual(1);
  });
});
