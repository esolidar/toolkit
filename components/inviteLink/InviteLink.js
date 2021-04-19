"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

var InviteLink = function InviteLink(_ref) {
  var inviteLinkText = _ref.inviteLinkText,
      inviteLink = _ref.inviteLink,
      copyLinkFunc = _ref.copyLinkFunc,
      copied = _ref.copied,
      CopyLinkText = _ref.CopyLinkText,
      CopiedLinkText = _ref.CopiedLinkText;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col-sm-12",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: inviteLinkText
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-9",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              className: "form-control",
              value: inviteLink,
              onFocus: function onFocus(e) {
                return e.target.select();
              },
              readOnly: true
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-3",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCopyToClipboard.CopyToClipboard, {
              text: inviteLink,
              onCopy: copyLinkFunc,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "dark",
                href: "#",
                text: !copied ? CopyLinkText : CopiedLinkText
              })
            })
          })]
        })]
      })
    })
  });
};

InviteLink.propTypes = process.env.NODE_ENV !== "production" ? {
  inviteLinkText: _propTypes["default"].string,
  inviteLink: _propTypes["default"].string.isRequired,
  copyLinkFunc: _propTypes["default"].func.isRequired,
  copied: _propTypes["default"].bool.isRequired,
  CopyLinkText: _propTypes["default"].string,
  CopiedLinkText: _propTypes["default"].string
} : {};
var _default = InviteLink;
exports["default"] = _default;
module.exports = exports.default;