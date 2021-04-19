"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Cover = exports.Logo = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _FileInput = _interopRequireDefault(require("./FileInput"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/FileInput',
  component: _FileInput["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput["default"], (0, _extends2["default"])({}, args));
};

var Logo = Template.bind({});
exports.Logo = Logo;
Logo.args = {
  name: 'logo_image',
  accept: '.png,.jpg,.jpeg',
  disabled: '',
  placeholder: '',
  onChange: function onChange() {},
  styleLogo: {
    backgroundImage: "url(" + _env.cdnStaticUrl + "/frontend/assets/brand-logo.jpg)"
  }
};
var Cover = Template.bind({});
exports.Cover = Cover;
Cover.args = {
  name: 'cover',
  accept: '.png,.jpg,.jpeg',
  className: 'input-image',
  disabled: '',
  placeholder: '',
  onChange: function onChange() {},
  styleLogo: {
    backgroundImage: "url(" + _env.cdnStaticUrl + "/frontend/assets/standard-brand.jpg)"
  }
};