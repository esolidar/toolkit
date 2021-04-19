"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _StripeCreditCard = _interopRequireDefault(require("./StripeCreditCard"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/StripeCreditCard',
  component: _StripeCreditCard["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_StripeCreditCard["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  submitStripePayment: function submitStripePayment() {},
  loadingStripe: false,
  total: 100,
  currencyId: 1,
  updateState: function updateState() {},
  order: {},
  env: {
    stripe: {
      publishableKey: 'pk_test_k1GFy6gdCeEfB8yfQWVWEQvZ',
      publishableKeyBr: 'pk_test_Og1YsCuVnh08BMh7gNbBKZ9z00NpxiYELH'
    }
  }
};