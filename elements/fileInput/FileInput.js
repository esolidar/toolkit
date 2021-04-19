"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var FileInput = function FileInput(_ref) {
  var name = _ref.name,
      accept = _ref.accept,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      styleLogo = _ref.styleLogo;

  var _useState = (0, _react.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  var handleOnChange = function handleOnChange(e) {
    setValue(e.target.value.split(/(\\|\/)/g).pop());
    if (onChange) onChange(e);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: name === 'logo_image' ? 'company-thumb-logo' : 'company-thumb-cover',
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: styleLogo,
      className: name === 'logo_image' ? 'logo' : 'company-cover-image'
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "input-company-logo",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        alt: "Add",
        src: _env.cdnStaticUrl + "/frontend/icons/camera.svg"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          position: 'relative'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "file",
          name: name,
          className: "input-image",
          onChange: handleOnChange,
          disabled: disabled,
          accept: accept,
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            width: '100%',
            zIndex: 1
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          tabIndex: "-1",
          name: "this.props.name + '_filename'",
          value: value,
          className: "input-image",
          onChange: function onChange() {},
          placeholder: placeholder,
          disabled: disabled,
          style: {
            position: 'relative',
            zIndex: -1
          }
        })]
      })]
    })]
  });
};

FileInput.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string.isRequired,
  accept: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].string,
  styleLogo: _propTypes["default"].object,
  onChange: _propTypes["default"].func
} : {};
var _default = FileInput;
exports["default"] = _default;
module.exports = exports.default;