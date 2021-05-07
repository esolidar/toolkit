import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapsView = ({
  dataTestId,
  defaultZoom,
  draggable,
  isMarkerShown,
  latitude,
  longitude,
  onClickMap,
}) => (
  <GoogleMap
    defaultZoom={defaultZoom}
    defaultCenter={{ lat: +latitude, lng: +longitude }}
    center={{ lat: +latitude, lng: +longitude }}
    data-testid={dataTestId}
  >
    {isMarkerShown && (
      <Marker
        position={{ lat: +latitude, lng: +longitude }}
        onDragEnd={onClickMap}
        draggable={draggable}
      />
    )}
  </GoogleMap>
);

GoogleMapsView.propTypes = {
  dataTestId: PropTypes.string,
  defaultZoom: PropTypes.number,
  draggable: PropTypes.bool,
  isMarkerShown: PropTypes.bool,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  onClickMap: PropTypes.func,
};

GoogleMapsView.defaultProps = {
  defaultZoom: 8,
  draggable: true,
  isMarkerShown: true,
};

export default withScriptjs(withGoogleMap(GoogleMapsView));
