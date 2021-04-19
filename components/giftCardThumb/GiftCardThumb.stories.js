"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _GiftCardThumb = _interopRequireDefault(require("./GiftCardThumb"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/GiftCards/GiftCardThumb',
  component: _GiftCardThumb["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "row",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col-sm-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GiftCardThumb["default"], (0, _extends2["default"])({}, args))
    })
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  giftCard: {
    id: 118,
    company_id: 1,
    name: 'Giftcard Oliver',
    description: 'Lorem ippsum',
    amount: 10,
    amount_usd: 11.8,
    currency_id: 1,
    expire_at: '2020-11-13 00:00:00',
    updated_at: '2020-04-15 10:28:14',
    created_at: '2020-04-15 10:28:14',
    laravel_through_key: 'email@gmail.com',
    giftcard_institution: [],
    currency: {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: 1.091,
      symbol: '€',
      status: 1
    }
  },
  giftCardClick: function giftCardClick() {},
  expireText: 'Expired',
  usedAtText: 'used At Text',
  usedText: 'used Text',
  noText: 'no',
  yesText: 'yes',
  amountText: 'Amount',
  giftCardExpireAt: '12-12-12',
  giftCardInstitutionCreatedAt: '12-12-12',
  giftCardAmountValue: '12€'
};