"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ChangeCurrency = _interopRequireDefault(require("./ChangeCurrency"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ChangeCurrency',
  component: _ChangeCurrency["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      background: '#163352',
      width: '100%',
      padding: '15px'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChangeCurrency["default"], (0, _extends2["default"])({}, args))
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  currentCurrency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03'
  },
  currencies: [{
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03'
  }, {
    id: 1,
    name: 'U. S. Dollar',
    small: 'USD',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03'
  }],
  onChange: function onChange() {
    return console.log('');
  }
};