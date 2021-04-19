"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TextareaField = _interopRequireDefault(require("./TextareaField"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/TextareaField',
  component: _TextareaField["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextareaField["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  id: 'textareaField-id',
  label: 'Lorem Ipsum',
  error: 'error',
  placeholder: 'Placeholder',
  onChange: function onChange() {
    return console.log('test');
  },
  field: 'Textarea_name',
  defaultValue: 'Textarea',
  message: 'Mensagem',
  maxLength: 100,
  required: true,
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis. Duis quis sem non lorem venenatis scelerisque vel euismod magna. Fusce aliquet nunc rutrum libero scelerisque ornare. Nullam ac lacus quis dolor egestas tempor eget et ligula. Sed eget convallis elit. Quisque finibus in metus quis blandit. Fusce porta lobortis nisl id pellentesque. Cras venenatis eros in dolor scelerisque gravida. orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis. Duis quis sem non lorem venenatis scelerisque vel euismod magna. Fusce aliquet nunc rutrum libero scelerisque ornare. Nullam ac lacus quis dolor egestas tempor eget et ligula. Sed eget convallis elit. Quisque finibus in metus quis blandit. Fusce porta lobortis nisl id pellentesque. Cras venenatis eros in dolor scelerisque gravida.'
};