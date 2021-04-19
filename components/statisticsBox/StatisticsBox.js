"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable no-nested-ternary */
var StatisticsBox = function StatisticsBox(_ref) {
  var features = _ref.features,
      footer = _ref.footer;

  var statistics = function statistics(items) {
    return items.map(function (item, index) {
      if (index <= 2) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: items.length === 1 ? 12 : items.length === 2 ? 6 : 4,
          className: "stats-box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              children: item.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              children: item.statistics
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: item.subtitle
            })]
          })
        }, index);
      } // eslint-disable-next-line no-console


      console.error('Only the first 3 features are displayed in items array.');
    });
  };

  var footerList = function footerList(items) {
    return items.map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        "data-testid": "footer-row",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
            children: [item.iconClass && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon["default"], {
              iconClass: item.iconClass
            }), item.title]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 2,
          className: "text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "people-involved",
            children: item.statistics
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 5,
          className: "text-right",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "people-involved-stats",
            children: item.subtitle
          })
        })]
      }, index);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
    className: "statisticsBox",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "statistics",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: statistics(features)
        }), footer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "stats-bottom",
          children: footerList(footer)
        })]
      })
    })
  });
};

StatisticsBox.propTypes = process.env.NODE_ENV !== "production" ? {
  features: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    statistics: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
    subtitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
  })).isRequired,
  footer: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    iconClass: _propTypes["default"].string,
    statistics: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
    subtitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
  }))
} : {};
var _default = StatisticsBox;
exports["default"] = _default;
module.exports = exports.default;