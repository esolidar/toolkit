"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _isArray = _interopRequireDefault(require("./isArray"));

var _isDefined = _interopRequireDefault(require("./isDefined"));

var getLocalStorage = function getLocalStorage(key, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = {};
  }

  var type;
  var item = localStorage.getItem(key);

  if (!(0, _isDefined["default"])(item)) {
    type = 'undefined';
  } else {
    try {
      type = (0, _isArray["default"])(JSON.parse(item)) ? 'array' : 'object';
    } catch (err) {
      if ((0, _isDefined["default"])(item)) type = 'string';
    }
  }

  switch (type) {
    case 'object':
    case 'array':
      return JSON.parse(item);

    case 'string':
      return item;

    default:
      return defaultValue;
  }
};

var _default = getLocalStorage;
exports["default"] = _default;
module.exports = exports.default;