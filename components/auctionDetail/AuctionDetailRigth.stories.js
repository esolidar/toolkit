"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _AuctionDetailRigth = _interopRequireDefault(require("./AuctionDetailRigth"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Auctions/AuctionDetailRigth',
  component: _AuctionDetailRigth["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuctionDetailRigth["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  auctionTitle: 'Titulo',
  auction: {
    id: 279,
    recipient: {
      id: 1073,
      institution_id: 51,
      institution: {
        id: 51,
        name: 'Fundo Brasileiro para a Biodiversidade',
        image: 'https://static.esolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        currency: {
          id: 1
        },
        thumbs: {
          detail: 'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-DETAIL.JPG',
          thumb: 'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-THUMB.JPG'
        },
        s3_image_key: 'institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        s3_cover_key: null
      },
      phones: []
    },
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
  error: '',
  minValue: 10,
  showModalSubscribe: function showModalSubscribe() {},
  user: {
    currency: {
      small: 'EUR'
    }
  },
  inputBidValue: 10,
  valueBidTextField: function valueBidTextField() {},
  primaryColor: '05c6e5',
  inputRef: {},
  env: {
    cdn_uploads_url: ''
  }
};