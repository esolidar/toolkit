"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ChangeLanguage = _interopRequireDefault(require("./ChangeLanguage"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ChangeLanguage',
  component: _ChangeLanguage["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      background: '#163352',
      width: '100%',
      padding: '15px'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChangeLanguage["default"], (0, _extends2["default"])({}, args))
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  languages: [{
    id: 0,
    name: 'pt',
    translate: 'Português (PT)'
  }, {
    id: 1,
    name: 'br',
    translate: 'Português (BR)'
  }, {
    id: 2,
    name: 'en',
    translate: 'English'
  }],
  onChangeLang: function onChangeLang() {
    return console.log('');
  },
  currentLang: 'pt'
};