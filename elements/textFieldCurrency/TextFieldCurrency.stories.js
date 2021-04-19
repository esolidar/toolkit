"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TextFieldCurrency = _interopRequireDefault(require("./TextFieldCurrency"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/TextFieldCurrency',
  component: _TextFieldCurrency["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextFieldCurrency["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Title',
  prefix: 'EUR',
  type: 'text',
  onChange: function onChange() {},
  error: '',
  placeholder: '€ 0,00',
  defaultValue: 'defaultValue',
  disabled: false,
  className: 'teste'
};