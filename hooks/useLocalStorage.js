"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _getLocalStorage = _interopRequireDefault(require("../utils/getLocalStorage"));

var useLocalStorage = function useLocalStorage(key, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = {};
  }

  var _useState = (0, _react.useState)(defaultValue),
      storedValue = _useState[0],
      setStoredValue = _useState[1];

  (0, _react.useEffect)(function () {
    setStoredValue((0, _getLocalStorage["default"])(key, defaultValue));
  }, []);

  var setValue = function setValue(value) {
    try {
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

var _default = useLocalStorage;
exports["default"] = _default;
module.exports = exports.default;