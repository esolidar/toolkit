"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jsxRuntime = require("react/jsx-runtime");

var FaqTabs = function FaqTabs(_ref) {
  var tabs = _ref.tabs,
      type = _ref.type,
      changeType = _ref.changeType;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "wrapper-tabs",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: tabs.map(function (tab, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: true,
          className: "tab " + (tab.type === type ? 'active' : ''),
          onClick: function onClick() {
            return changeType(tab.type);
          },
          children: tab.text
        }, index);
      })
    })
  });
};

FaqTabs.propTypes = process.env.NODE_ENV !== "production" ? {
  tabs: _propTypes["default"].array.isRequired,
  type: _propTypes["default"].string.isRequired,
  changeType: _propTypes["default"].func.isRequired
} : {};
var _default = FaqTabs;
exports["default"] = _default;
module.exports = exports.default;