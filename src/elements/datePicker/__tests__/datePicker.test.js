import { shallow } from 'enzyme';
import { advanceTo } from 'jest-date-mock';
import DatePicker from '../index';

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
  placeholderText: 'DD-MM-YYYY',
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

  it('renders DatePicker without label', () => {
    advanceTo(new Date(2021, 1, 3, 0, 0, 0));

    const wrapper = shallow(<DatePicker {...props} />);
    expect(wrapper.find('.control-label').length).toBe(0);
  });

  it('renders DatePicker with label', () => {
    advanceTo(new Date(2021, 1, 3, 0, 0, 0));

    const wrapper = shallow(<DatePicker {...props} label="Start Date" />);
    expect(wrapper.find('.control-label').length).toBe(1);
  });

  it('renders DatePicker with error', () => {
    advanceTo(new Date(2021, 1, 3, 0, 0, 0));

    const wrapper = shallow(<DatePicker {...props} errors="required field" />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.help-block').length).toBe(1);
  });
});
