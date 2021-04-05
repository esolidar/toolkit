/* eslint-disable max-len */

import { shallow } from 'enzyme';
import ConvertToMyTimezone from '../index';

describe('ConvertToMyTimezone component', () => {
  it('renders ConvertToMyTimezone correctly', () => {
    const component = shallow(<ConvertToMyTimezone date="2009-01-01 10:00:00" />);
    expect(component).toHaveLength(1);
  });
});
