"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SelectField = _interopRequireDefault(require("./SelectField"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/SelectField',
  component: _SelectField["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  options: [{
    id: 1,
    name: 'lorem'
  }],
  value: '',
  label: 'Select exemple',
  field: 'name',
  onChange: function onChange() {},
  selectText: 'Exemplo'
};