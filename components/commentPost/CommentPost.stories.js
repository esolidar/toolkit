"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CommentPost = _interopRequireDefault(require("./CommentPost"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Comments/CommentPost',
  component: _CommentPost["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CommentPost["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  postId: 1,
  showCreateComment: function showCreateComment() {},
  onSubmit: function onSubmit() {},
  role: 'string',
  companyLogo: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png',
  postAsCompany: function postAsCompany() {},
  locale: 'pt',
  postAsUser: function postAsUser() {},
  textareaText: 'string',
  commentHereText: 'string',
  textareaOnChange: function textareaOnChange() {},
  errors: [],
  disabled: false,
  user: {
    id: 153074,
    thumbs: {
      original: 'https://cdn.esolidar.com/users/153074/1588601339.jpg',
      standard: 'https://cdn.esolidar.com/users/153074/1588601339-STANDARD.jpg',
      thumb: 'https://cdn.esolidar.com/users/153074/1588601339-THUMB.jpg'
    },
    work_email: [{
      company_id: 1007,
      department: null,
      name: 'Patrícia Silva',
      role: 'admin',
      user: null
    }]
  },
  company: {
    id: 1007,
    thumbs: {
      cover_image: 'https://cdn.esolidar.com/companies/1007/cover/2b48a9c1-f5f8-4a2a-9c10-4d02ddce451c.jpg',
      detail: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-DETAIL.png',
      thumb: 'https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png'
    }
  }
};