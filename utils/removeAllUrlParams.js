"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var removeAllUrlParams = function removeAllUrlParams(url) {
  return url.substring(0, url.indexOf('?'));
};

var _default = removeAllUrlParams;
exports["default"] = _default;
module.exports = exports.default;