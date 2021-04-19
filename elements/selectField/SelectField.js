"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputLabel = _interopRequireDefault(require("../inputLabel"));

var _jsxRuntime = require("react/jsx-runtime");

var SelectField = function SelectField(_ref) {
  var options = _ref.options,
      value = _ref.value,
      label = _ref.label,
      field = _ref.field,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      selectText = _ref.selectText,
      error = _ref.error,
      defaultValue = _ref.defaultValue,
      className = _ref.className,
      hiddenSelectText = _ref.hiddenSelectText,
      dataTestId = _ref.dataTestId,
      optionTestId = _ref.optionTestId,
      info = _ref.info,
      help = _ref.help,
      showOptionalLabel = _ref.showOptionalLabel;

  var optionsList = function optionsList(options) {
    if (options) {
      return options.map(function (option, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          "data-testid": optionTestId + "-" + option.id,
          value: option.id,
          disabled: option.disabled,
          children: option.name || option.title
        }, option.id || i);
      });
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('form-group', {
      'has-error': error
    }),
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_inputLabel["default"], {
      field: field,
      label: label,
      showOptionalLabel: showOptionalLabel
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "label-help",
      children: help
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
      "data-testid": dataTestId,
      name: field,
      className: error ? "form-control " + className + " required-field" : "form-control " + className,
      value: value,
      defaultValue: defaultValue,
      onChange: onChange,
      disabled: disabled,
      children: [!hiddenSelectText && /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
        value: "",
        children: selectText
      }), optionsList(options)]
    }), info && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "footer-label-info",
      children: info
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "help-block",
      children: error
    })]
  });
};

var _default = SelectField;
exports["default"] = _default;
SelectField.propTypes = process.env.NODE_ENV !== "production" ? {
  dataTestId: _propTypes["default"].string,
  optionTestId: _propTypes["default"].string,
  options: _propTypes["default"].array,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  field: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  selectText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  hiddenSelectText: _propTypes["default"].bool,
  info: _propTypes["default"].string,
  help: _propTypes["default"].string,
  showOptionalLabel: _propTypes["default"].bool
} : {};
SelectField.defaultProps = {
  hiddenSelectText: false
};
module.exports = exports.default;