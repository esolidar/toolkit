"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ConfirmModal = _interopRequireDefault(require("./ConfirmModal"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/ConfirmModal',
  component: _ConfirmModal["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConfirmModal["default"], (0, _extends2["default"])({}, args, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      children: "Delete Stuff"
    })
  }));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  onConfirm: function onConfirm() {
    alert('Confirmed');
  },
  body: 'Are you sure you want to delete this?',
  confirmText: 'Confirm Delete',
  title: 'Deleting Stuff'
};