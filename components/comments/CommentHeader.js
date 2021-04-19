"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _reactIntl = require("react-intl");

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var CommentHeader = function CommentHeader(_ref) {
  var comment = _ref.comment,
      deleteComment = _ref.deleteComment,
      newThumb = _ref.newThumb,
      newName = _ref.newName,
      user = _ref.user;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: "Thumb",
      src: newThumb
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "company-name",
      children: newName
    }), user && user.id === comment.user_id && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Dropdown, {
      id: "options-reply",
      className: "options-reply options-dropdown",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown.Toggle, {
        className: "options-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          alt: "Open",
          src: _env.cdnStaticUrl + "/frontend/icons/caret.png"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown.Menu, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown.Header, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: deleteComment,
            type: "button",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.delete.comments",
              defaultMessage: "Delete comment"
            })
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "date",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
        utc: true,
        toNow: true,
        ago: true,
        children: comment.created_at || comment.dateAdded
      })
    })]
  });
};

CommentHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  comment: _propTypes["default"].object,
  deleteComment: _propTypes["default"].func.isRequired,
  newThumb: _propTypes["default"].string,
  newName: _propTypes["default"].string,
  user: _propTypes["default"].object
} : {};
var _default = CommentHeader;
exports["default"] = _default;
module.exports = exports.default;