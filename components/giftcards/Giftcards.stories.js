"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Giftcards = _interopRequireDefault(require("./Giftcards"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/GiftCards/Giftcards',
  component: _Giftcards["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Giftcards["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  giftCardsList: [{
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
  }, {
    id: 119,
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
  }],
  usedExpiredText: 'used or Expired Giftcards',
  usedTitleText: 'used Title Giftcards',
  InputPlaceholderText: 'Search text',
  causeText: 'Lorem ipsum',
  amountText: 'Amount',
  dateText: 'Date',
  onSearchTable: function onSearchTable() {},
  giftCardsListUsed: [{
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
  }, {
    id: 119,
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
  }],
  options: {},
  renderCause: function renderCause() {},
  rendeAmount: function rendeAmount() {},
  giftCardsListActivePage: 1,
  giftCardsListPerPage: 10,
  giftCardsListTotal: 20,
  giftCardsListHandlePageChange: function giftCardsListHandlePageChange() {},
  activePageUsed: 1,
  itemsPerPage: 10,
  totalUsed: 2,
  handlePageChangeUsed: function handlePageChangeUsed() {}
};