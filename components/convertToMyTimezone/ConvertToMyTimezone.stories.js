"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ConvertToMyTimezone = _interopRequireDefault(require("./ConvertToMyTimezone"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ConvertToMyTimezone',
  component: _ConvertToMyTimezone["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConvertToMyTimezone["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  date: '2009-01-01 10:00:00',
  format: 'LLLL'
};