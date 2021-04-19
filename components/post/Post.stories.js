"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Post = _interopRequireDefault(require("./Post"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Post',
  component: _Post["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Post["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  post: {
    attachment: null,
    created_at: '2020-05-13 15:20:32',
    id: 2,
    parent_id: null,
    project_id: 31,
    replies: [{
      attachment: null,
      created_at: '2020-05-13 15:20:32',
      id: 2,
      parent_id: null,
      project_id: 31,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      updated_at: '2020-05-13 15:20:32',
      user_id: 9,
      user: {
        id: 9,
        name: 'Patrícia Silva',
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
      }
    }],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    updated_at: '2020-05-13 15:20:32',
    user_id: 9
  },
  user: {
    id: 9,
    name: 'Patrícia Silva',
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
  commentUpdated: {},
  editComment: function editComment() {},
  deleteComment: function deleteComment() {},
  onSubmitReply: function onSubmitReply() {},
  addMessageKeyDown: function addMessageKeyDown() {},
  replyValue: '',
  commentHereText: 'Comment here ...',
  textareaOnChange: function textareaOnChange() {},
  errorsReply: [],
  errors: {},
  deletedComment: {},
  onKeyDown: function onKeyDown() {},
  disabled: false
};