"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useDebounce = function useDebounce(value, delay) {
  var _useState = (0, _react.useState)(value),
      debouncedValue = _useState[0],
      setDebouncedValue = _useState[1];

  (0, _react.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};

var _default = useDebounce;
exports["default"] = _default;
module.exports = exports.default;