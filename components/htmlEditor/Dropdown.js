"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
var Dropdown = function Dropdown(_ref) {
  var title = _ref.title,
      options = _ref.options,
      value = _ref.value,
      handleChange = _ref.handleChange,
      testId = _ref.testId;

  var _useState = (0, _react.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleOnClick = function handleOnClick() {
    return setOpen(!open);
  };

  var handleOnBlur = function handleOnBlur() {
    return setOpen(false);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    onClick: handleOnClick,
    onBlur: handleOnBlur,
    className: "rdw-block-wrapper",
    "aria-label": "rdw-block-control",
    "data-testid": testId,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "rdw-dropdown-wrapper rdw-block-dropdown rdw-custom-dropdown",
      "aria-label": "rdw-dropdown",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "rdw-dropdown-selectedtext",
        title: title,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: title + ": " + value
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rdw-dropdown-caretto" + (open ? 'close' : 'open')
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "rdw-dropdown-optionwrapper rdw-custom-ul " + (!open ? 'hidden' : ''),
        children: options.map(function (item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
            item: item,
            handleChange: handleChange,
            value: value
          }, item);
        })
      })]
    })
  });
};

Dropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes["default"].string,
  options: _propTypes["default"].array,
  value: _propTypes["default"].number,
  handleChange: _propTypes["default"].func,
  testId: _propTypes["default"].string
} : {};

var Option = function Option(_ref2) {
  var item = _ref2.item,
      handleChange = _ref2.handleChange,
      value = _ref2.value;
  var isActive = value === item;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    onClick: function onClick() {
      return handleChange(item);
    },
    className: "rdw-dropdownoption-default " + (isActive ? 'active' : ''),
    children: item
  });
};

Option.propTypes = process.env.NODE_ENV !== "production" ? {
  item: _propTypes["default"].number,
  handleChange: _propTypes["default"].func,
  value: _propTypes["default"].number
} : {};
var _default = Dropdown;
exports["default"] = _default;
module.exports = exports.default;