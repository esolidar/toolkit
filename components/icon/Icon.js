"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var Icon = function Icon(_ref) {
  var iconClass = _ref.iconClass,
      style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
    className: iconClass,
    style: style
  });
};

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  iconClass: _propTypes["default"].string,
  style: _propTypes["default"].object
} : {};
var _default = Icon;
exports["default"] = _default;
module.exports = exports.default;