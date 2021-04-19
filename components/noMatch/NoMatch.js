"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

var NoMatch = function NoMatch(_ref) {
  var color = _ref.color,
      errorMessage = _ref.errorMessage,
      link = _ref.link,
      linkText = _ref.linkText;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "not-found-page mx-auto",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          "data-testid": "error-404",
          className: "error-404",
          style: {
            color: color
          },
          children: "404"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "div-message",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "message-404",
          "data-testid": "message-404",
          style: {
            color: color
          },
          children: errorMessage || /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "error-404-message"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "div-link-homepage",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          className: "link-homepage",
          "data-testid": "link-homepage",
          href: link || '/',
          children: linkText || /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "back.to.homepage"
          })
        })
      })]
    })
  });
};

NoMatch.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].string,
  errorMessage: _propTypes["default"].string,
  link: _propTypes["default"].string,
  linkText: _propTypes["default"].string
} : {};
var _default = NoMatch;
exports["default"] = _default;
module.exports = exports.default;