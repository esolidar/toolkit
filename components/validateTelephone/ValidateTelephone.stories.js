"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ValidateTelephone = _interopRequireDefault(require("./ValidateTelephone"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/ValidateTelephone',
  component: _ValidateTelephone["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidateTelephone["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  localStorage: {
    lang: 'pt',
    user: JSON.stringify({
      id: '51792',
      phones: []
    })
  },
  mobileValidatePost: function mobileValidatePost() {},
  validatePhone: {
    code: 200,
    data: {
      phone: {
        user_id: 1,
        phone: '+351919552199',
        code: 1955,
        twilio_sid: 'SM88bee75b4d214539a7f1db2828ac3ed3',
        dateAdded: '2020-12-28 12:40:19',
        updatedDate: '2020-12-28 12:40:19',
        id: 146
      }
    }
  },
  mobileConfirmPost: function mobileConfirmPost() {},
  confirmPhone: {
    code: 200,
    data: {
      confirm: true,
      phone: {
        id: 147,
        user_id: 1,
        phone: '+351919552199',
        code: '2869',
        main: 0,
        twilio_sid: 'SMeab42f2f139e44be90289f3aea71b4e3',
        verified: 1,
        updatedDate: '2020-12-28 12:54:29',
        dateAdded: '2020-12-28 12:54:09'
      }
    }
  }
};