"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ErrorBoundary',
  component: _ErrorBoundary["default"],
  argTypes: {
    color: {
      control: {
        type: 'object'
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorBoundary["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  showError: true
};