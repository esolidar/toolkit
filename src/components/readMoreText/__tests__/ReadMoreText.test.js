import { shallow } from 'enzyme';
import ReadMoreText from '../index';

describe('ReadMoreText component', () => {
  it('renders ReadMoreText correctly', () => {
    const component = shallow(<ReadMoreText text="lorem ipsum" />);
    expect(component).toHaveLength(1);
  });
});
