"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Secondary = exports.Primary = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _RadioField = _interopRequireDefault(require("./RadioField"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/RadioField',
  component: _RadioField["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioField["default"], (0, _extends2["default"])({}, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'error',
  onChange: function onChange(x) {
    return console.log('test', x);
  },
  name: 'CheckboxField_name',
  value: 'CheckboxField_value',
  checked: true,
  disabled: false,
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'error',
  onChange: function onChange(x) {
    return console.log('test', x);
  },
  name: 'CheckboxField_name',
  value: 'CheckboxField_value',
  checked: false,
  disabled: false
};