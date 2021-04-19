"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _LightboxGallery = _interopRequireDefault(require("./LightboxGallery"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/LightboxGallery',
  component: _LightboxGallery["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightboxGallery["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  images: [{
    image: 'requests/14392756-2993-4102-a52c-480569468fca.jpg'
  }, {
    image: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-STANDARD.jpg'
  }],
  serverlessResizeImage: 'https://image.testesolidar.com',
  thumbs: false
};