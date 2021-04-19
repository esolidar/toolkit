"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jsxRuntime = require("react/jsx-runtime");

var CrowdfundingProgressBar = function CrowdfundingProgressBar(_ref) {
  var contributesSum = _ref.contributesSum,
      goal = _ref.goal;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
    sm: 12,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      className: "goal",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "progress-goal-bar",
        style: {
          width: contributesSum / goal * 100 + "%"
        }
      })
    })
  });
};

CrowdfundingProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  contributesSum: _propTypes["default"].number,
  goal: _propTypes["default"].number
} : {};
var _default = CrowdfundingProgressBar;
exports["default"] = _default;
module.exports = exports.default;