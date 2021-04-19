"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CreditCardList = _interopRequireDefault(require("./CreditCardList"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/CreditCardList',
  component: _CreditCardList["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CreditCardList["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  getStripeCreditCardlist: function getStripeCreditCardlist() {},
  postStripeCreditCard: function postStripeCreditCard() {},
  stripeCreditCard: {},
  showAddBtnCreditCard: true,
  stripeCreditCardList: {
    code: 200,
    data: []
  },
  env: {
    stripe: {
      publishableKey: 'pk_test_51HwraUDRsG5ScpiIgYWfWizITsiVhiyaKECi0YaOCVo5GoCB4kv2EXSRgsPowMfisHMUU9M7nn2Kz4AU2h0EtO2000BTReJHG1'
    }
  }
};