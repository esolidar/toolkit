"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _isDefined = _interopRequireDefault(require("./isDefined"));

var isObject = function isObject(v) {
  return (0, _isDefined["default"])(v) && (0, _typeof2["default"])(v) === 'object' && !Array.isArray(v);
};

var _default = isObject;
exports["default"] = _default;
module.exports = exports.default;