"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CreateComment = _interopRequireDefault(require("./CreateComment"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Comments/CreateComment',
  component: _CreateComment["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CreateComment["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  env: 'https://static.testesolidar.com',
  user: {
    id: 9
  },
  commen: '',
  thumb: 'https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg'
};