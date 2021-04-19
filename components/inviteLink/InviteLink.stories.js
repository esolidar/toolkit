"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _InviteLink = _interopRequireDefault(require("./InviteLink"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/InviteLink',
  component: _InviteLink["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InviteLink["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  inviteLinkText: 'You can invite your members to participate in your company members by sharing this link with them. Remember that who joins through this link will be associated to your company as an member.',
  inviteLink: 'whitelabel_subdomain/lang/user/company-invite?invite_whitelabel=code',
  copyLinkFunc: function copyLinkFunc() {},
  copied: false,
  CopyLinkText: 'Copy link',
  CopiedLinkText: 'Copied'
};