"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var CommentContent = function CommentContent(_ref) {
  var comment = _ref.comment;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "content",
    children: comment.comment.split('\n').map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
      }, index);
    })
  });
};

CommentContent.propTypes = process.env.NODE_ENV !== "production" ? {
  comment: _propTypes["default"].object
} : {};
var _default = CommentContent;
exports["default"] = _default;
module.exports = exports.default;