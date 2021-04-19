"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SocialNetworks = _interopRequireDefault(require("./SocialNetworks"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/SocialNetworks',
  component: _SocialNetworks["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialNetworks["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  icons: [{
    "class": 'icon-facebook',
    url: 'https://www.facebook.com/esolidar'
  }, {
    "class": 'icon-twitter',
    url: '#'
  }, {
    "class": 'icon-linkedin2',
    url: '#'
  }, {
    "class": 'icon-google-plus',
    url: '#'
  }],
  headingText: 'All rights reserved.'
};