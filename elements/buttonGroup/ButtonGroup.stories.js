"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/ButtonGroup',
  component: _ButtonGroup["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroup["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  buttonList: [{
    isActive: true,
    onClick: function onClick() {},
    text: 'Activos'
  }, {
    isActive: false,
    onClick: function onClick() {},
    text: 'Inactivos'
  }]
};