"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CustomModal = _interopRequireDefault(require("./CustomModal"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/CustomModal',
  component: _CustomModal["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomModal["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  actionsChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "btn btn-secondary",
      children: "Cancelar"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "btn btn-primary",
      children: "Guardar"
    })]
  }),
  bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
    children: "Hello world!"
  }),
  onHide: function onHide() {},
  show: false,
  title: 'Title',
  subtitle: 'subtitle'
};