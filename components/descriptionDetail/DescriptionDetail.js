"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

var DescriptionDetail = function DescriptionDetail(_ref) {
  var color = _ref.color,
      title = _ref.title,
      description = _ref.description,
      dataTestIdTitle = _ref.dataTestIdTitle,
      dataTestIdDescription = _ref.dataTestIdDescription;

  var _useState = (0, _react.useState)(description && description.length > 500),
      showMoreDescButton = _useState[0],
      setShowMoreDescButton = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      showMoreDesc = _useState2[0],
      setShowMoreDesc = _useState2[1];

  var showMoreDescAction = function showMoreDescAction() {
    setShowMoreDesc(true);
    setShowMoreDescButton(false);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "shipping-header",
      style: {
        color: color,
        borderColor: color,
        marginTop: '50px'
      },
      "data-testid": dataTestIdTitle,
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "description-text " + (showMoreDesc ? 'description-show-all' : ''),
      "data-testid": dataTestIdDescription,
      children: description && description.split('\n').map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
        }, index);
      })
    }), showMoreDescButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-block d-sm-none text-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        onClick: showMoreDescAction,
        className: "readmore-button",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "readmore",
          defaultMessage: "Read more"
        })
      })
    })]
  });
};

DescriptionDetail.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].string,
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  dataTestIdTitle: _propTypes["default"].string,
  dataTestIdDescription: _propTypes["default"].string
} : {};
var _default = DescriptionDetail;
exports["default"] = _default;
module.exports = exports.default;