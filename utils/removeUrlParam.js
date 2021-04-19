"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var removeUrlParam = function removeUrlParam(param) {
  var url = new URL(window.location.href);
  url.searchParams["delete"](param);
  window.history.pushState({
    path: url.href
  }, '', url.href);
};

var _default = removeUrlParam;
exports["default"] = _default;
module.exports = exports.default;