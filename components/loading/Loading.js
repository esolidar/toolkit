"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactDeviceDetect = require("react-device-detect");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var Loading = function Loading(_ref) {
  var loadingClass = _ref.loadingClass,
      message = _ref.message,
      curtain = _ref.curtain;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames["default"])(loadingClass, {
      curtain: curtain
    }),
    children: _reactDeviceDetect.isIE ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ie-loader"
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "Loading",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "loader"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "loader-message",
        children: message
      })]
    })
  });
};

var _default = Loading;
exports["default"] = _default;
Loading.propTypes = process.env.NODE_ENV !== "production" ? {
  loadingClass: _propTypes["default"].string,
  message: _propTypes["default"].string,
  curtain: _propTypes["default"].bool
} : {};
Loading.defaultProps = {
  curtain: false
};
module.exports = exports.default;