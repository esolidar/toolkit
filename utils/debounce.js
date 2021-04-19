"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _this = void 0;

var debounce = function debounce(callback, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = _this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return callback.apply(context, args);
    }, wait);
  };
};

var _default = debounce;
exports["default"] = _default;
module.exports = exports.default;