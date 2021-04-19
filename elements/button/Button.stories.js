"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Outlined = exports.Squared = exports.Warning = exports.Danger = exports.Success = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Button = _interopRequireDefault(require("./Button"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/Button',
  component: _Button["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], (0, _extends2["default"])({}, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  extraClass: 'info-full',
  target: '_blank',
  href: '#',
  text: 'Primary'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  extraClass: 'dark-full',
  target: '_blank',
  href: '#',
  text: 'Secondary'
};
var Success = Template.bind({});
exports.Success = Success;
Success.args = {
  extraClass: 'success-full',
  target: '_blank',
  href: '#',
  text: 'Success'
};
var Danger = Template.bind({});
exports.Danger = Danger;
Danger.args = {
  extraClass: 'danger-full',
  target: '_blank',
  href: '#',
  text: 'Danger'
};
var Warning = Template.bind({});
exports.Warning = Warning;
Warning.args = {
  extraClass: 'warning-full',
  target: '_blank',
  href: '#',
  text: 'Warning'
};
var Squared = Template.bind({});
exports.Squared = Squared;
Squared.args = {
  extraClass: 'info-full',
  target: '_blank',
  href: '#',
  text: 'Squared',
  rounded: false
};
var Outlined = Template.bind({});
exports.Outlined = Outlined;
Outlined.args = {
  extraClass: 'info',
  target: '_blank',
  href: '#',
  text: 'Outlined'
};