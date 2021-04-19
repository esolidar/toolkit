"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _StatisticsBox = _interopRequireDefault(require("./StatisticsBox"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/StatisticsBox',
  component: _StatisticsBox["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatisticsBox["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  features: [{
    title: 'Raised',
    statistics: '$279.47',
    subtitle: '0% growth last quarter'
  }, {
    title: 'Auctions',
    statistics: '4',
    subtitle: '0% growth last quarter'
  }, {
    title: 'Bids',
    statistics: '152',
    subtitle: '0% growth last quarter'
  }],
  footer: [{
    title: 'Raised',
    iconClass: 'icon-icon-manage-employees',
    statistics: '$279.47',
    subtitle: '0% growth last quarter'
  }, {
    title: 'Auctions',
    iconClass: 'icon-ic-charities-benefited',
    statistics: '4',
    subtitle: '0% growth last quarter'
  }, {
    title: 'Bids',
    iconClass: 'icon-ic-donations',
    statistics: '152',
    subtitle: '0% growth last quarter'
  }]
};