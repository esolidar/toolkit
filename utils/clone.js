"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var clone = function clone(v) {
  return JSON.parse(JSON.stringify(v));
};

var _default = clone;
exports["default"] = _default;
module.exports = exports.default;