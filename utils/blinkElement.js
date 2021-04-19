"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _isDefined = _interopRequireDefault(require("./isDefined"));

var blinkElement = function blinkElement(elmId, className) {
  var element = document.getElementById(elmId);
  if (!(0, _isDefined["default"])(element)) return;
  element.classList.add(className);
  setTimeout(function () {
    element.classList.remove(className);
  }, 3000);
};

var _default = blinkElement;
exports["default"] = _default;
module.exports = exports.default;