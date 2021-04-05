import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CrowdfundingProgressBar from '../index';

configure({ adapter: new Adapter() });

describe('CrowdfundingProgressBar', () => {
  it('render without crash', () => {
    const wrapper = shallow(<CrowdfundingProgressBar />);
    expect(wrapper).toHaveLength(1);
  });

  it('Progress bar with values', () => {
    const wrapper = shallow(<CrowdfundingProgressBar contributesSum={60} goal={10000} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.progress-goal-bar')).toHaveLength(1);
  });

  it('Progress bar without values', () => {
    const wrapper = shallow(<CrowdfundingProgressBar contributesSum={0} goal={0} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.progress-goal-bar')).toHaveLength(1);
  });

  it('% Progress bar', () => {
    const wrapper = shallow(<CrowdfundingProgressBar contributesSum={50} goal={100} />);
    expect(wrapper.find('.progress-goal-bar').props().style.width).toEqual('50%');
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.progress-goal-bar')).toHaveLength(1);
  });
});
