"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _slugify = _interopRequireDefault(require("slugify"));

var slugify = function slugify(v) {
  return (0, _slugify["default"])(v, {
    replacement: '-',
    remove: /[?$*_+~./,()'"!\-:@]/g,
    lower: true
  });
};

var _default = slugify;
exports["default"] = _default;
module.exports = exports.default;