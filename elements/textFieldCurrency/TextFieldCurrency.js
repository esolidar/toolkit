"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _removeAllButLast = require("../../utils/removeAllButLast");

var _textField = _interopRequireDefault(require("../textField"));

var _jsxRuntime = require("react/jsx-runtime");

var TextFieldCurrency = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TextFieldCurrency, _Component);

  function TextFieldCurrency() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.props.value,
      prefix: _this.props.prefix,
      formattedValue: _this.props.intl.formatNumber(_this.props.value, {
        style: 'currency',
        currency: _this.props.prefix
      })
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      e.persist();
      var el = e.target;
      var inputValue = el.value;

      _this.setState({
        value: inputValue ? (0, _removeAllButLast.removeAllButLast)(inputValue.replace(/[^\d,.]/g, '').replace(',', '.'), '.') : '',
        formattedValue: el.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function (e) {
      e.persist();
      var el = e.target;
      var value = _this.state.value;
      el.value = value;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyDown", function (e) {
      e.persist();
      var el = e.target;
      var inputValue = el.value;
      var regex = /^[0-9]+(\.,){1}[0-9]+$/;

      if (!regex.test(inputValue)) {
        el.value = (0, _removeAllButLast.removeAllButLast)(inputValue.replace(/[^\d,.]/g, '').replace(',', '.'), '.');
        return false;
      }

      el.value = (0, _removeAllButLast.removeAllButLast)(inputValue.replace(/[^\d,.]/g, '').replace(',', '.'), '.');
      return true;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function (e) {
      var el = e.target;
      var _this$state = _this.state,
          value = _this$state.value,
          prefix = _this$state.prefix;
      el.value = _this.props.intl.formatNumber(value, {
        style: 'currency',
        currency: prefix
      });

      _this.setState({
        value: value ? Number(value).toFixed(2) : '',
        formattedValue: el.value
      }, function () {
        var valueObj = {
          formattedValue: _this.state.formattedValue,
          value: _this.state.value,
          floatValue: parseFloat(_this.state.value)
        };

        _this.props.onChange(valueObj);
      });
    });
    return _this;
  }

  var _proto = TextFieldCurrency.prototype;

  _proto.render = function render() {
    var _this$state2 = this.state,
        value = _this$state2.value,
        formattedValue = _this$state2.formattedValue;
    var _this$props = this.props,
        label = _this$props.label,
        placeholder = _this$props.placeholder,
        className = _this$props.className,
        disabled = _this$props.disabled,
        error = _this$props.error,
        message = _this$props.message;
    var inputProps = {
      label: label,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      error: error,
      value: value ? formattedValue : '',
      placeholder: placeholder,
      disabled: disabled,
      className: className,
      message: message
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], (0, _extends2["default"])({}, inputProps));
  };

  return TextFieldCurrency;
}(_react.Component);

TextFieldCurrency.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  prefix: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  intl: _propTypes["default"].object,
  error: _propTypes["default"].string,
  message: _propTypes["default"].string,
  decimalScale: _propTypes["default"].number
} : {};
TextFieldCurrency.defaultProps = {
  decimalScale: 0,
  value: ''
};

var _default = (0, _reactIntl.injectIntl)(TextFieldCurrency);

exports["default"] = _default;
module.exports = exports.default;