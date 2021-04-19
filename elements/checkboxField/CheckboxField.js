"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var CheckboxField = function CheckboxField(_ref) {
  var value = _ref.value,
      name = _ref.name,
      onChange = _ref.onChange,
      checked = _ref.checked,
      label = _ref.label,
      error = _ref.error,
      disabled = _ref.disabled,
      id = _ref.id,
      dataTestId = _ref.dataTestId;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "checkbox-inline",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "form-group",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        htmlFor: name,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          "data-testid": dataTestId,
          type: "checkbox",
          id: id || name,
          name: name,
          value: value,
          onChange: onChange,
          checked: checked,
          disabled: disabled
        }), label, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "checkbox"
        })]
      })
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "help-block",
      children: error
    })]
  });
};

CheckboxField.propTypes = process.env.NODE_ENV !== "production" ? {
  dataTestId: _propTypes["default"].string,
  value: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  error: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string
} : {};
var _default = CheckboxField;
exports["default"] = _default;
module.exports = exports.default;