"use strict";

exports.__esModule = true;
exports["default"] = exports.removeAllButLast = exports.returnTrue = void 0;

var returnTrue = function returnTrue() {
  return true;
};

exports.returnTrue = returnTrue;

var removeAllButLast = function removeAllButLast(string, token) {
  var parts = string.split(token);

  if (parts[1] === undefined) {
    return string;
  }

  return parts.length > 1 ? parts.slice(0, -1).join('') + token + parts.slice(-1) : '';
};

exports.removeAllButLast = removeAllButLast;
var _default = removeAllButLast;
exports["default"] = _default;