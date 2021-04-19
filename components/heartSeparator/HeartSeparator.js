"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactBootstrap = require("react-bootstrap");

var _Icon = _interopRequireDefault(require("../icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

var HeartSeparator = function HeartSeparator() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "heartSeparator",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: {
          span: 6,
          offset: 3
        },
        className: "separator",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          iconClass: "icon-heart"
        })
      })
    })
  });
};

var _default = HeartSeparator;
exports["default"] = _default;
module.exports = exports.default;