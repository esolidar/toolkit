"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _GoogleMapsView = _interopRequireDefault(require("./GoogleMapsView"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/GoogleMapsView',
  component: _GoogleMapsView["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GoogleMapsView["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  latitude: '41.6918275',
  longitude: '-8.8344101',
  onClickMap: function onClickMap() {},
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBppPOaHl8Dm8OLmzeDDysyyoAfjuxto2U',
  loadingElement: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: '100%'
    }
  }),
  containerElement: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: '300px'
    }
  }),
  mapElement: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: '100%'
    }
  })
};