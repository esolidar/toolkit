import { shallow } from 'enzyme';
import GoogleMapsView from '../index';

const props = {
  latitude: '41.6918275',
  longitude: '-8.8344101',
  onClickMap: () => {},
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBppPOaHl8Dm8OLmzeDDysyyoAfjuxto2U',
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '300px' }} />,
  mapElement: <div style={{ height: '100%' }} />,
};

describe('GoogleMapsView component', () => {
  it('renders GoogleMapsView correctly', () => {
    const component = shallow(<GoogleMapsView {...props} />);
    expect(component).toHaveLength(1);
  });
});
