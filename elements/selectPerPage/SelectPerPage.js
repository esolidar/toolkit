"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var SelectPerPage = function SelectPerPage(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value;
  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "select-per-page",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "items.per-page",
        defaultMessage: "Items per page:",
        "data-testid": "label"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        name: "per_page",
        className: "form-control",
        onChange: onChange,
        value: value,
        "data-testid": "select",
        children: options.map(function (item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: String(item),
            "data-testid": "option",
            children: item
          }, item);
        })
      })]
    });
  });
};

var _default = SelectPerPage;
exports["default"] = _default;
SelectPerPage.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].array,
  value: _propTypes["default"].number.isRequired
} : {};
SelectPerPage.defaultProps = {
  options: [10, 25, 50, 100]
};
module.exports = exports.default;