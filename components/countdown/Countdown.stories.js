"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Countdown = _interopRequireDefault(require("./Countdown"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Countdown',
  component: _Countdown["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Countdown["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  endDate: '2021-02-08 10:25:00',
  startDate: '2023-02-08 10:00:00',
  thumb: false
};