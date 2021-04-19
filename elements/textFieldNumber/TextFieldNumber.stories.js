"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TextFieldNumber = _interopRequireDefault(require("./TextFieldNumber"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/TextFieldNumber',
  component: _TextFieldNumber["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextFieldNumber["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'title',
  onChange: function onChange() {},
  error: '',
  value: 1000,
  suffix: '%',
  thousandSeparator: false,
  decimalScale: 2,
  placeholder: '0%'
};