"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Primary = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _InputLabel = _interopRequireDefault(require("./InputLabel"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/InputLabel',
  component: _InputLabel["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel["default"], (0, _extends2["default"])({}, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Lorem Ipsum',
  field: 'Textarea_name',
  showOptionalLabel: true
};