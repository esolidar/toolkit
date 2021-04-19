"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CheckboxImage = _interopRequireDefault(require("./CheckboxImage"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/CheckboxImage',
  component: _CheckboxImage["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckboxImage["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Lorem Ipsum',
  img: _env.cdnStaticUrl + "/frontend/assets/ods/pt/ods-1.png",
  onChange: function onChange() {
    return console.log('test');
  },
  field: 'Textarea_name',
  value: 'Textarea'
};