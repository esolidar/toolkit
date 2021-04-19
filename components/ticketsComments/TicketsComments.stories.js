"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TicketsComments = _interopRequireDefault(require("./TicketsComments"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Tickets/TicketsComments',
  component: _TicketsComments["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TicketsComments["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  ticketComments: [{
    project_comment: {
      text: 'Comment text',
      attachment_files: [{
        created_at: '2020-05-29 08:48:55',
        file: 'https://cdn.testesolidar.com/whitelabel/1/projects/31/files/amazon.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20200530%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200530T094257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=53ec28aed49788ccacfaf24390373679d628d60311b4586c25e4ab82a4ba3082',
        file_size: 13264,
        file_type: 'pdf',
        id: 39,
        name: 'amazon.pdf',
        project_id: 31,
        updated_at: '2020-05-29 08:48:55',
        user_id: 51702
      }, {
        created_at: '2020-05-29 08:48:55',
        file: 'https://cdn.testesolidar.com/whitelabel/1/projects/31/files/amazon.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20200530%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200530T094257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=53ec28aed49788ccacfaf24390373679d628d60311b4586c25e4ab82a4ba3082',
        file_size: 13264,
        file_type: 'pdf',
        id: 40,
        name: 'teste.pdf',
        project_id: 31,
        updated_at: '2020-05-29 08:48:55',
        user_id: 51702
      }],
      user: {
        firstName: 'Patricia',
        id: 51859,
        image: null,
        institution: {
          name: 'Associação XPTO',
          sigla: 'AX',
          thumbs: {
            original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
            standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
            thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png'
          }
        },
        institution_id: 1,
        lastName: 'Silva',
        name: 'Patricia Silva',
        streamImage: 'local',
        thumbs: {
          original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png'
        }
      }
    },
    company_id: 1,
    created_at: '2020-05-29 22:24:50',
    id: 11,
    project_id: 13,
    text: 'Esta é uma descrição de teste \n https://github.com/esolidar/whitelabel/pull/178',
    updated_at: '2020-05-29 22:24:50',
    user_id: 51859,
    project_comment_id: 11,
    ticket_id: 1
  }],
  activePage: 1,
  per_page: 10,
  total: 12,
  handlePageChange: function handlePageChange() {}
};