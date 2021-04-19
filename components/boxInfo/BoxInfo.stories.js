"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _BoxInfo = _interopRequireDefault(require("./BoxInfo"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/BoxInfo',
  component: _BoxInfo["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BoxInfo["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare enim bibendum consequat. Proin dictum malesuada mollis. Donec pellentesque lacus non purus tincidunt, a sagittis massa molestie. Morbi varius vulputate ex vel accumsan.',
  button: {
    style: 'success',
    text: 'Action button',
    onClick: '#'
  }
};