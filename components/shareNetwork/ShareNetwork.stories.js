"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ShareNetwork = _interopRequireDefault(require("./ShareNetwork"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ShareNetwork',
  component: _ShareNetwork["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShareNetwork["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'teste',
  image: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg',
  description: 'description test'
};