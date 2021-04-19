"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getUrlParam = function getUrlParam(param) {
  if (typeof window !== 'undefined') {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }
};

var _default = getUrlParam;
exports["default"] = _default;
module.exports = exports.default;