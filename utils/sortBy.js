"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var sortBy = function sortBy(array, property) {
  return array.sort(function (a, b) {
    return a[property] - b[property];
  });
};

var _default = sortBy;
exports["default"] = _default;
module.exports = exports.default;