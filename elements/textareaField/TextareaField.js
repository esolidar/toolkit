"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _autosize = _interopRequireDefault(require("autosize"));

var _inputLabel = _interopRequireDefault(require("../inputLabel"));

var _jsxRuntime = require("react/jsx-runtime");

var TextareaField = function TextareaField(_ref) {
  var field = _ref.field,
      id = _ref.id,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      error = _ref.error,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      message = _ref.message,
      maxLength = _ref.maxLength,
      disabled = _ref.disabled,
      help = _ref.help,
      required = _ref.required,
      resize = _ref.resize,
      className = _ref.className,
      info = _ref.info,
      showOptionalLabel = _ref.showOptionalLabel;

  if (resize) {
    if (typeof window !== 'undefined') {
      setTimeout(function () {
        var item = document.getElementById(id || field);
        (0, _autosize["default"])(item);
        var evt = document.createEvent('Event');
        evt.initEvent('autosize:update', true, false);
        item.dispatchEvent(evt);
      }, 500);
    }
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('form-group', {
      'has-error': error || message
    }, {
      required: required
    }, className),
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_inputLabel["default"], {
      field: field,
      label: label,
      showOptionalLabel: showOptionalLabel
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "help",
      children: help
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
      id: id || field,
      disabled: disabled,
      onChange: onChange,
      value: value,
      defaultValue: defaultValue,
      name: field,
      maxLength: maxLength || '',
      placeholder: placeholder,
      className: error ? 'form-control required-field' : 'form-control'
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

TextareaField.propTypes = process.env.NODE_ENV !== "production" ? {
  field: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].string,
  error: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  placeholder: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  message: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  help: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  resize: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  info: _propTypes["default"].string,
  showOptionalLabel: _propTypes["default"].bool
} : {};
TextareaField.defaultProps = {
  showOptionalLabel: false
};
var _default = TextareaField;
exports["default"] = _default;
module.exports = exports.default;