"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/control-has-associated-label */
var CommentPost = function CommentPost(_ref) {
  var postId = _ref.postId,
      _onSubmit = _ref.onSubmit,
      textareaValue = _ref.textareaValue,
      commentHereText = _ref.commentHereText,
      textareaOnChange = _ref.textareaOnChange,
      errors = _ref.errors,
      disabled = _ref.disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
    id: "post-" + postId,
    sm: 12,
    className: "no-padding",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "comment-post-no-border d-block",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "comment-post-projects",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
          onSubmit: function onSubmit(e) {
            e.preventDefault();

            _onSubmit(postId);
          },
          method: "post",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
            sm: 12,
            className: "pt-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
              id: "text-reply-" + postId,
              field: "reply-" + postId,
              defaultValue: textareaValue,
              className: "new-post background-post-comment w-100",
              placeholder: commentHereText,
              onChange: textareaOnChange,
              error: errors["reply-" + postId],
              required: true,
              maxLength: 500
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "submit",
              className: "btn-esolidar btn-success-full float-right",
              disabled: disabled,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "projects.comments.send",
                defaultMessage: "Send"
              })
            }), errors.text && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "error",
              children: errors.text
            })]
          })
        })
      })
    })
  });
};

CommentPost.propTypes = process.env.NODE_ENV !== "production" ? {
  postId: _propTypes["default"].number,
  onSubmit: _propTypes["default"].func,
  textareaValue: _propTypes["default"].string,
  commentHereText: _propTypes["default"].string,
  textareaOnChange: _propTypes["default"].func,
  errors: _propTypes["default"].array,
  disabled: _propTypes["default"].bool
} : {};
var _default = CommentPost;
exports["default"] = _default;
module.exports = exports.default;