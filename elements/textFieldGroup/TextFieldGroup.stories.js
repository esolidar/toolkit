"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TextFieldGroup = _interopRequireDefault(require("./TextFieldGroup"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/TextFieldGroup',
  component: _TextFieldGroup["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextFieldGroup["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: 'type',
  label: 'Lorem Ipsum',
  groupText: 'Group Text',
  error: 'error',
  placeholder: 'Placeholder',
  onChange: function onChange() {
    return console.log('test');
  },
  field: 'textFieldGroup',
  defaultValue: 'defaultValue',
  message: 'Mensagem',
  disabled: true
};