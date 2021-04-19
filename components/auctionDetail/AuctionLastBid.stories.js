"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _AuctionLastBid = _interopRequireDefault(require("./AuctionLastBid"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Auctions/AuctionLastBid',
  component: _AuctionLastBid["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuctionLastBid["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  auction: {
    id: 279,
    last_bid: {
      id: 1606,
      auction_id: 279,
      value: 73
    },
    currency: {
      small: 'EUR'
    }
  },
  isEnded: false,
  isCommingSoon: false,
  handleClickBid: function handleClickBid() {},
  isShowModal: function isShowModal() {},
  error: '',
  minValue: 10,
  inputBidValue: 10,
  valueBidTextField: function valueBidTextField() {},
  primaryColor: 'red'
};