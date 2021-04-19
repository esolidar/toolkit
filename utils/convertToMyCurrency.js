"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

var convertToMyCurrency = function convertToMyCurrency(value, currency) {
  var convertedValue = value;
  var user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  var myCurrency = user && user.currency !== 'null' ? user.currency : currency;

  if (myCurrency.id !== currency.id) {
    convertedValue = value * currency.value / myCurrency.value;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
    value: convertedValue,
    style: "currency",
    currency: myCurrency.small
  });
};

var _default = convertToMyCurrency;
exports["default"] = _default;
module.exports = exports.default;