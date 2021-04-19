"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CheckboxField = _interopRequireDefault(require("./CheckboxField"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/CheckboxField',
  component: _CheckboxField["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckboxField["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'error',
  onChange: function onChange(x) {
    return console.log('test', x);
  },
  name: 'CheckboxField_name',
  value: 'CheckboxField_value',
  checked: true,
  disabled: false
};