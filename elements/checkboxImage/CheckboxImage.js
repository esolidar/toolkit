"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var CheckboxImage = function CheckboxImage(_ref) {
  var value = _ref.value,
      name = _ref.name,
      _onChange = _ref.onChange,
      img = _ref.img,
      field = _ref.field,
      disabled = _ref.disabled,
      checked = _ref.checked;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "checkbox-image",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "form-group",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        htmlFor: name,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "checkbox",
          id: name,
          name: name,
          value: value,
          onChange: function onChange(x) {
            return _onChange(x);
          },
          disabled: disabled,
          checked: checked
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "img",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: img,
            alt: field
          })
        })]
      })
    })
  });
};

CheckboxImage.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  img: _propTypes["default"].string,
  field: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  checked: _propTypes["default"].bool
} : {};
var _default = CheckboxImage;
exports["default"] = _default;
module.exports = exports.default;