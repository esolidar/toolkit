import { shallow } from 'enzyme';
import BoxInfo from '../index';

describe('BoxInfo component', () => {
  it('renders BoxInfo correctly', () => {
    const component = shallow(<BoxInfo text="text goes here" />);
    expect(component).toHaveLength(1);
  });
});
