"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _DescriptionDetail = _interopRequireDefault(require("./DescriptionDetail"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/DescriptionDetail',
  component: _DescriptionDetail["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DescriptionDetail["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Description',
  description: 'Test Description',
  showmoreDesc: false,
  showMoreDescButton: false
};