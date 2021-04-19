"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _textField = _interopRequireDefault(require("../textField"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/label-has-associated-control */
var TextFieldNumber = function TextFieldNumber(_ref) {
  var value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      message = _ref.message,
      disabled = _ref.disabled,
      format = _ref.format,
      thousandSeparator = _ref.thousandSeparator,
      displayType = _ref.displayType,
      decimalSeparator = _ref.decimalSeparator,
      decimalScale = _ref.decimalScale,
      fixedDecimalScale = _ref.fixedDecimalScale,
      allowNegative = _ref.allowNegative,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      isNumericString = _ref.isNumericString,
      removeFormatting = _ref.removeFormatting,
      mask = _ref.mask,
      isAllowed = _ref.isAllowed,
      renderText = _ref.renderText,
      classStyle = _ref.classStyle;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
    label: label,
    error: error,
    message: message,
    className: classStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNumberFormat["default"], {
      value: value,
      displayType: displayType,
      prefix: prefix,
      placeholder: placeholder,
      decimalSeparator: decimalSeparator,
      decimalScale: decimalScale,
      fixedDecimalScale: fixedDecimalScale,
      allowNegative: allowNegative,
      suffix: suffix,
      isNumericString: isNumericString,
      type: type,
      format: format,
      thousandSeparator: thousandSeparator,
      removeFormatting: removeFormatting,
      mask: mask,
      onValueChange: onChange,
      isAllowed: isAllowed,
      renderText: renderText,
      disabled: disabled,
      className: error ? 'form-control required-field' : 'form-control'
    })
  });
};

TextFieldNumber.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  label: _propTypes["default"].string,
  type: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  error: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  message: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  thousandSeparator: _propTypes["default"].bool,
  displayType: _propTypes["default"].string,
  decimalSeparator: _propTypes["default"].string,
  decimalScale: _propTypes["default"].number,
  fixedDecimalScale: _propTypes["default"].string,
  allowNegative: _propTypes["default"].bool,
  prefix: _propTypes["default"].string,
  suffix: _propTypes["default"].string,
  isNumericString: _propTypes["default"].bool,
  removeFormatting: _propTypes["default"].bool,
  mask: _propTypes["default"].string,
  isAllowed: _propTypes["default"].bool,
  renderText: _propTypes["default"].string,
  classStyle: _propTypes["default"].string
} : {};
TextFieldNumber.defaultProps = {
  type: 'text',
  thousandSeparator: false
};
var _default = TextFieldNumber;
exports["default"] = _default;
module.exports = exports.default;