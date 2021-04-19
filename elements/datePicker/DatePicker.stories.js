"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/DatePicker',
  component: _DatePicker["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  classnames: function classnames() {},
  label: 'Start Date',
  locale: 'en',
  selected: new Date('2021-03-05T10:20:30Z'),
  startDate: new Date('2021-03-05T10:20:30Z'),
  endDate: new Date('2021-03-06T10:20:30Z'),
  onChange: function onChange() {},
  className: 'form-control',
  errors: ''
};