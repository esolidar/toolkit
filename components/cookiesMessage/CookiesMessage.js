"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

var CookiesMessage = function CookiesMessage(_ref) {
  var message = _ref.message,
      btnText = _ref.btnText,
      btnClick = _ref.btnClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "cookiesMessage",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Container, {
      fluid: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: 12,
          md: 9,
          lg: 9,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: message
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: 12,
          md: 3,
          lg: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "dark",
            text: btnText,
            onClick: btnClick
          })
        })]
      })
    })
  });
};

CookiesMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  message: _propTypes["default"].string.isRequired,
  btnText: _propTypes["default"].string.isRequired,
  btnClick: _propTypes["default"].func.isRequired
} : {};
var _default = CookiesMessage;
exports["default"] = _default;
module.exports = exports.default;