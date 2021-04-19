"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _InvoicingData = _interopRequireDefault(require("./InvoicingData"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Checkout/InvoicingData',
  component: _InvoicingData["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InvoicingData["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  state: {
    errors: {},
    receipt: 1,
    nif: '123456789',
    invoice_address: '',
    agree: 1
  },
  onChangCheckBoxInvoicing: function onChangCheckBoxInvoicing() {},
  onChange: function onChange() {}
};