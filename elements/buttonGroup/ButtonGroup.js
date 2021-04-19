"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jsxRuntime = require("react/jsx-runtime");

var ButtonGroup = function ButtonGroup(_ref) {
  var buttonList = _ref.buttonList,
      className = _ref.className,
      size = _ref.size,
      style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.ButtonGroup, {
    className: className + " button-group",
    size: size,
    style: style,
    children: buttonList.map(function (btn, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Button, {
        variant: "",
        className: btn.className + " " + (btn.isActive ? 'active' : ''),
        onClick: btn.onClick,
        style: btn.style,
        children: btn.text
      }, i);
    })
  });
};

var _default = ButtonGroup;
exports["default"] = _default;
ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  buttonList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    isActive: _propTypes["default"].bool,
    onClick: _propTypes["default"].func,
    text: _propTypes["default"].string
  })).isRequired,
  className: _propTypes["default"].string,
  size: _propTypes["default"].string,
  style: _propTypes["default"].object
} : {};
ButtonGroup.defaultProps = {
  className: '',
  size: 'md'
};
module.exports = exports.default;