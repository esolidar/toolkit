"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _jsxRuntime = require("react/jsx-runtime");

var SocialNetworks = function SocialNetworks(_ref) {
  var icons = _ref.icons,
      headingText = _ref.headingText;
  var listIcons = icons.map(function (icon, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: icon.url,
      target: "blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon["default"], {
        iconClass: icon["class"]
      })
    }, index);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "socialNetworks",
    children: [headingText ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
      children: headingText
    }) : '', /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "list-icon",
      children: listIcons
    })]
  });
};

SocialNetworks.propTypes = process.env.NODE_ENV !== "production" ? {
  icons: _propTypes["default"].array.isRequired,
  headingText: _propTypes["default"].string
} : {};
var _default = SocialNetworks;
exports["default"] = _default;
module.exports = exports.default;