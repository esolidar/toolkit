"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _AuctionSupport = _interopRequireDefault(require("./AuctionSupport"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Auctions/AuctionSupport',
  component: _AuctionSupport["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuctionSupport["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
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
    }
  }
};