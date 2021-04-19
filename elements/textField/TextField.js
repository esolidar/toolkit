"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _inputLabel = _interopRequireDefault(require("../inputLabel"));

var _jsxRuntime = require("react/jsx-runtime");

var TextField = function TextField(_ref) {
  var field = _ref.field,
      id = _ref.id,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      type = _ref.type,
      onChange = _ref.onChange,
      error = _ref.error,
      maxLength = _ref.maxLength,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      message = _ref.message,
      disabled = _ref.disabled,
      help = _ref.help,
      required = _ref.required,
      className = _ref.className,
      dataTestId = _ref.dataTestId,
      inputRef = _ref.inputRef,
      children = _ref.children,
      info = _ref.info,
      showOptionalLabel = _ref.showOptionalLabel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('form-group', {
      'has-error': error || message
    }, {
      required: required
    }, className),
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_inputLabel["default"], {
      field: id || field,
      label: label,
      showOptionalLabel: showOptionalLabel
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "help",
      children: help
    }), !children && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      "data-testid": dataTestId,
      autoComplete: "off",
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      value: value,
      defaultValue: defaultValue,
      type: type,
      name: field,
      id: id || field,
      placeholder: placeholder,
      maxLength: maxLength,
      disabled: disabled,
      className: error ? 'form-control required-field' : 'form-control',
      ref: inputRef
    }), children && children, info && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "footer-label-info",
      children: info
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "help-block",
      children: error
    }), message && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "help-block",
      children: message
    })]
  });
};

TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  dataTestId: _propTypes["default"].string,
  info: _propTypes["default"].string,
  field: _propTypes["default"].string,
  id: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  label: _propTypes["default"].string,
  type: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  error: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  maxLength: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  message: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  help: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  inputRef: _propTypes["default"].object,
  children: _propTypes["default"].node,
  showOptionalLabel: _propTypes["default"].bool
} : {};
TextField.defaultProps = {
  children: null,
  showOptionalLabel: false
};
var _default = TextField;
exports["default"] = _default;
module.exports = exports.default;