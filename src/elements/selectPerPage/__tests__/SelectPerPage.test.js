import { shallow } from 'enzyme';
import SelectPerPage from '../index';

const changed = jest.fn();
const value = 10;

describe('SelectPerPage component', () => {
  it('renders SelectPerPage correctly', () => {
    const component = shallow(<SelectPerPage onChange={changed} value={value} />);
    expect(component).toHaveLength(1);
    expect(component.find('[data-testid="label"]').length).toBe(1);
    expect(component.find('[data-testid="select"]').length).toBe(1);
    expect(component.find('[data-testid="option"]').length).toBe(4);
  });

  it('renders the correct number of options if prop is used', () => {
    const component = shallow(
      <SelectPerPage onChange={changed} value={value} options={[10, 100]} />
    );
    expect(component.find('[data-testid="option"]').length).toBe(2);
  });
});
