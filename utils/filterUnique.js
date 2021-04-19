"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var filterUnique = function filterUnique(array, key) {
  return array.filter(function (v, i, a) {
    return a.findIndex(function (t) {
      return t[key] === v[key];
    }) === i;
  });
};

var _default = filterUnique;
exports["default"] = _default;
module.exports = exports.default;