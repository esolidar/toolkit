"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CrowdfundingPaymentMethod = _interopRequireDefault(require("./CrowdfundingPaymentMethod"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Crowdfundings/CrowdfundingPaymentMethod',
  component: _CrowdfundingPaymentMethod["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CrowdfundingPaymentMethod["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  utrust: 1,
  paypal: 1,
  stripe: 1,
  sibsMbway: 1,
  sibsCc: 1,
  cdnStaticUrl: 'https://static.esolidar.com'
};