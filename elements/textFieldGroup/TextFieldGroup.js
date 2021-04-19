"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _inputLabel = _interopRequireDefault(require("../inputLabel"));

var _jsxRuntime = require("react/jsx-runtime");

var TextFieldGroup = function TextFieldGroup(_ref) {
  var field = _ref.field,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      message = _ref.message,
      groupText = _ref.groupText,
      disabled = _ref.disabled,
      help = _ref.help,
      info = _ref.info,
      showOptionalLabel = _ref.showOptionalLabel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('form-group', {
      'has-error': error || message
    }),
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_inputLabel["default"], {
      field: field,
      label: label,
      showOptionalLabel: showOptionalLabel
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "help",
      children: help
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "input-group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        onChange: onChange,
        value: value || '',
        defaultValue: defaultValue,
        type: type,
        name: field,
        placeholder: placeholder,
        className: error ? 'form-control required-field' : 'form-control',
        disabled: disabled
      }), groupText && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (error ? 'input-group-addon required-field' : 'input-group-addon') + " " + (disabled ? 'disabled-group' : ''),
        children: groupText
      })]
    }), info && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
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

var _default = TextFieldGroup;
exports["default"] = _default;
TextFieldGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  field: _propTypes["default"].string.isRequired,
  help: _propTypes["default"].string,
  info: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  label: _propTypes["default"].string,
  error: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  type: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  message: _propTypes["default"].string,
  groupText: _propTypes["default"].string,
  showOptionalLabel: _propTypes["default"].bool
} : {};
TextFieldGroup.defaultProps = {
  type: 'text',
  showOptionalLabel: false
};
module.exports = exports.default;