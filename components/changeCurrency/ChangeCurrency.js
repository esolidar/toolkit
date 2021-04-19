"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jsxRuntime = require("react/jsx-runtime");

var ChangeCurrency = function ChangeCurrency(_ref) {
  var onChange = _ref.onChange,
      currentCurrency = _ref.currentCurrency,
      currencies = _ref.currencies;
  var allCurrencies = currencies.map(function (currency, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown.Item, {
      eventKey: index,
      onSelect: onChange,
      children: currency.name
    }, index);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "changeCurrency",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.DropdownButton, {
      drop: "up",
      variant: "footer",
      title: currentCurrency.symbol + " " + currentCurrency.small,
      children: allCurrencies
    }, "up")
  });
};

ChangeCurrency.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes["default"].func.isRequired,
  currentCurrency: _propTypes["default"].object.isRequired,
  currencies: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    small: _propTypes["default"].string,
    symbol: _propTypes["default"].string
  })).isRequired
} : {};
var _default = ChangeCurrency;
exports["default"] = _default;
module.exports = exports.default;