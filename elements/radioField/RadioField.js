"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var RadioField = function RadioField(_ref) {
  var value = _ref.value,
      name = _ref.name,
      onChange = _ref.onChange,
      checked = _ref.checked,
      label = _ref.label,
      error = _ref.error,
      disabled = _ref.disabled,
      message = _ref.message,
      id = _ref.id;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "radio-inline",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        htmlFor: name,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "radio",
          id: id || name,
          name: name,
          value: value,
          onChange: onChange,
          checked: checked,
          disabled: disabled
        }), label, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "checkbox"
        })]
      }), message && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "message",
        children: message
      }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "help-block",
        children: error
      })]
    })
  });
};

RadioField.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].string,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  error: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  message: _propTypes["default"].string
} : {};
var _default = RadioField;
exports["default"] = _default;
module.exports = exports.default;