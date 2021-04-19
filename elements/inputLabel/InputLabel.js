"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

var InputLabel = function InputLabel(_ref) {
  var field = _ref.field,
      label = _ref.label,
      showOptionalLabel = _ref.showOptionalLabel,
      cssClass = _ref.cssClass,
      style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    htmlFor: field,
    className: "control-label " + cssClass,
    style: style,
    children: [label, showOptionalLabel && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "label-optional",
      children: ["(", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "optional"
      }), ")"]
    })]
  });
};

InputLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  field: _propTypes["default"].string,
  label: _propTypes["default"].string.isRequired,
  showOptionalLabel: _propTypes["default"].bool,
  cssClass: _propTypes["default"].string,
  style: _propTypes["default"].object
} : {};
var _default = InputLabel;
exports["default"] = _default;
module.exports = exports.default;