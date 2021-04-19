"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("./Icon"));

var _icons = _interopRequireDefault(require("../../constants/icons"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Icon',
  component: _Icon["default"]
};
exports["default"] = _default;

var Template = function Template() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "d-flex",
    style: {
      flexFlow: 'wrap'
    },
    children: _icons["default"].map(function (icon) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-3 d-flex align-items-center flex-column",
        style: {
          width: '20%'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          iconClass: icon.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: icon.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: icon.font
        })]
      });
    })
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {};