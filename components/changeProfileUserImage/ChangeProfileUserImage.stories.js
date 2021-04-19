"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ChangeProfileUserImage = _interopRequireDefault(require("./ChangeProfileUserImage"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ChangeProfileUserImage',
  component: _ChangeProfileUserImage["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChangeProfileUserImage["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  // color: {
  //   primaryColor: '#ddd',
  // },
  thumb: 'https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485',
  errors: {},
  onDrop: function onDrop() {},
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com'
  }
};