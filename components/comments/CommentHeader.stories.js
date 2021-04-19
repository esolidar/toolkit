"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CommentHeader = _interopRequireDefault(require("./CommentHeader"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Comments/CommentHeader',
  component: _CommentHeader["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CommentHeader["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  comment: {
    comment: 'teste 2',
    comment_id: null,
    company_id: null,
    created_at: '2020-08-07 13:07:29',
    crowdfunding_id: 45,
    id: 382,
    updated_at: '2020-08-07 13:07:29',
    user: {
      institution: {
        id: 106,
        image: 'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b.jpeg',
        name: 'Associação Um Milhão Contra a Pobreza e Exclusão Social em Portugal',
        s3_cover_key: null,
        s3_image_key: 'institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b.jpeg',
        sigla: 'CD',
        thumbs: {
          detail: 'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b-DETAIL.jpeg',
          thumb: 'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b-THUMB.jpeg'
        }
      }
    },
    user_id: 1275
  },
  deleteComment: function deleteComment() {},
  newName: 'Teste',
  newThumb: null,
  user: null
};