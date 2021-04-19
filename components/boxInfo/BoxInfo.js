"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

var BoxInfo = function BoxInfo(_ref) {
  var button = _ref.button,
      className = _ref.className,
      style = _ref.style,
      text = _ref.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "box box-info " + className,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "text",
      children: text
    }), button && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "button",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        extraClass: "" + (button.style ? button.style : 'success'),
        onClick: button.onClick,
        href: button.href,
        text: button.text,
        to: button.to,
        disabled: button.disabled
      })
    })]
  });
};

BoxInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  button: _propTypes["default"].shape({
    style: _propTypes["default"].string,
    text: _propTypes["default"].string,
    onClick: _propTypes["default"].func,
    href: _propTypes["default"].string,
    to: _propTypes["default"].string,
    disabled: _propTypes["default"].bool
  }),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  text: _propTypes["default"].string.isRequired
} : {};
BoxInfo.defaultProps = {
  className: ''
};
var _default = BoxInfo;
exports["default"] = _default;
module.exports = exports.default;