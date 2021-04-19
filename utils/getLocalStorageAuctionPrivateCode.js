"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getLocalStorageAuctionPrivateCode = function getLocalStorageAuctionPrivateCode(auctionId) {
  if (localStorage.privateCode) {
    var hasAuctionCode = JSON.parse(localStorage.privateCode);
    var auctionCode = hasAuctionCode.find(function (item) {
      return +item.id === +auctionId;
    });
    return auctionCode ? auctionCode.code : null;
  }

  return null;
};

var _default = getLocalStorageAuctionPrivateCode;
exports["default"] = _default;
module.exports = exports.default;