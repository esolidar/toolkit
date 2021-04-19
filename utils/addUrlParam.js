"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var addUrlParam = function addUrlParam(param, value) {
  var url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({
    path: url.href
  }, '', url.href);
};

var _default = addUrlParam;
exports["default"] = _default;
module.exports = exports.default;