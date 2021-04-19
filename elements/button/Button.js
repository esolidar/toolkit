"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

var Button = function Button(_ref) {
  var className = _ref.className,
      dataTestId = _ref.dataTestId,
      disabled = _ref.disabled,
      extraClass = _ref.extraClass,
      fullWidth = _ref.fullWidth,
      href = _ref.href,
      icon = _ref.icon,
      id = _ref.id,
      onClick = _ref.onClick,
      rel = _ref.rel,
      rounded = _ref.rounded,
      size = _ref.size,
      target = _ref.target,
      text = _ref.text,
      to = _ref.to,
      type = _ref.type;
  var style;

  if (onClick) {
    style = 'button';
  } else if (type === 'submit') {
    style = 'submit';
  } else if (to) {
    style = 'link';
  }

  var classes = ['btn-esolidar', "btn-" + extraClass, "btn-" + size, rounded ? 'rounded' : '', fullWidth ? 'full-width' : '', disabled ? 'disabled' : '', className];

  var renderButton = function renderButton() {
    switch (style) {
      case 'button':
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          "data-testid": dataTestId,
          id: id,
          type: "button",
          onClick: onClick,
          className: classes.join(' '),
          disabled: disabled,
          children: [icon, text]
        });

      case 'submit':
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          "data-testid": dataTestId,
          id: id,
          type: "submit",
          className: classes.join(' '),
          disabled: disabled,
          children: [icon, text]
        });

      case 'link':
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
          "data-testid": dataTestId,
          id: id,
          to: to,
          className: classes.join(' '),
          children: [icon, text]
        });

      default:
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          "data-testid": dataTestId,
          id: id,
          href: href,
          target: target || '_self',
          rel: rel,
          className: classes.join(' '),
          children: [icon, text]
        });
    }
  };

  return renderButton();
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  extraClass: _propTypes["default"].string,
  fullWidth: _propTypes["default"].bool,
  href: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  id: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  rel: _propTypes["default"].string,
  rounded: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg']),
  target: _propTypes["default"].string,
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  to: _propTypes["default"].string,
  type: _propTypes["default"].string
} : {};
Button.defaultProps = {
  className: '',
  fullWidth: false,
  rounded: true,
  size: 'md',
  type: 'button'
};
var _default = Button;
exports["default"] = _default;
module.exports = exports.default;