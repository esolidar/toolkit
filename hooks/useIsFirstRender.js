"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useIsFirstRender = function useIsFirstRender() {
  var isFirstRenderRef = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    isFirstRenderRef.current = false;
  }, []);
  return isFirstRenderRef.current;
};

var _default = useIsFirstRender;
exports["default"] = _default;
module.exports = exports.default;