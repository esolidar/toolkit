"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactGoogleMaps = require("react-google-maps");

var _jsxRuntime = require("react/jsx-runtime");

var GoogleMapsView = function GoogleMapsView(_ref) {
  var dataTestId = _ref.dataTestId,
      defaultZoom = _ref.defaultZoom,
      draggable = _ref.draggable,
      isMarkerShown = _ref.isMarkerShown,
      latitude = _ref.latitude,
      longitude = _ref.longitude,
      onClickMap = _ref.onClickMap;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactGoogleMaps.GoogleMap, {
    defaultZoom: defaultZoom,
    defaultCenter: {
      lat: +latitude,
      lng: +longitude
    },
    center: {
      lat: +latitude,
      lng: +longitude
    },
    "data-testid": dataTestId,
    children: isMarkerShown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactGoogleMaps.Marker, {
      position: {
        lat: +latitude,
        lng: +longitude
      },
      onDragEnd: onClickMap,
      draggable: draggable
    })
  });
};

GoogleMapsView.propTypes = process.env.NODE_ENV !== "production" ? {
  dataTestId: _propTypes["default"].string,
  defaultZoom: _propTypes["default"].number,
  draggable: _propTypes["default"].bool,
  isMarkerShown: _propTypes["default"].bool,
  latitude: _propTypes["default"].string,
  longitude: _propTypes["default"].string,
  onClickMap: _propTypes["default"].func
} : {};
GoogleMapsView.defaultProps = {
  defaultZoom: 8,
  draggable: true,
  isMarkerShown: true
};

var _default = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(GoogleMapsView));

exports["default"] = _default;
module.exports = exports.default;