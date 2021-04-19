"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CookiesMessage = _interopRequireDefault(require("./CookiesMessage"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/CookiesMessage',
  component: _CookiesMessage["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CookiesMessage["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  message: "A eSolidar utiliza cookies - pequenos ficheiros informativos - para melhorar a sua experiência de navegação. Ao continuar, aceita que o façamos, a não ser que altere as suas definições, pelo que queremos que consulte a nossa Política de Cookies, antes de prosseguir <a href='#'>aqui</a>",
  btnText: 'Concordo',
  btnClick: function btnClick() {
    console.log('aqui');
  }
};