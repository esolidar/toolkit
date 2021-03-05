import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { advanceTo } from 'jest-date-mock';
import DatePicker from '../index';

configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const changed = jest.fn();

const props = {
  locale: 'en',
  selected: new Date('2021-03-05T10:20:30Z'),
  selectsStart: true,
  startDate: new Date('2021-03-05T10:20:30Z'),
  endDate: new Date('2021-03-06T10:20:30Z'),
  showTimeSelect: true,
  onChange: changed,
  className: 'form-control',
  placeholderText: 'dd-mm-yyyy',
  timeCaption: 'hour',
  dateFormat: 'd-MM-yyyy h:mm aa',
};

describe('DatePicker component', () => {
  it('renders DatePicker correctly', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders DatePicker correctly with props', () => {
    advanceTo(new Date(2021, 1, 3, 0, 0, 0));

    const wrapper = shallow(<DatePicker {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
