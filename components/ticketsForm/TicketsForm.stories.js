"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TicketsForm = _interopRequireDefault(require("./TicketsForm"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Tickets/TicketsForm',
  component: _TicketsForm["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TicketsForm["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  onSubmit: function onSubmit() {},
  onChange: function onChange() {},
  errors: {},
  statusDefault: '',
  status: [],
  priorityDefault: '',
  priority: [],
  openModalFiles: function openModalFiles() {},
  disabled: false,
  hideText: false,
  editTicket: {},
  showAddFilesButtton: true,
  showModalFiles: false,
  showModalSimpleFiles: false,
  toggleModalFiles: function toggleModalFiles() {},
  searchFiles: function searchFiles() {},
  search: '',
  onSubmitComment: function onSubmitComment() {},
  onChangeComment: function onChangeComment() {},
  addComment: function addComment() {},
  showCommentForm: false,
  uploadedFiles: [{
    created_at: '2020-06-01 10:44:34',
    file: 'https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300',
    file_size: 282141,
    file_type: 'jpg',
    id: 21,
    name: '81734938_10157905502927402_5327388253257465856_o.jpg',
    project_id: 14,
    updated_at: '2020-06-01 10:44:34',
    user_id: 9
  }, {
    created_at: '2020-06-01 10:44:34',
    file: 'https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300',
    file_size: 282141,
    file_type: 'jpg',
    id: 21,
    name: '81734938_10157905502927402_5327388253257465856_o.jpg',
    project_id: 14,
    updated_at: '2020-06-01 10:44:34',
    user_id: 9
  }],
  files: [{
    checked: true,
    created_at: '2020-06-01 10:44:34',
    file: 'https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300',
    file_size: 282141,
    file_type: 'jpg',
    id: 21,
    name: '81734938_10157905502927402_5327388253257465856_o.jpg',
    project_id: 14,
    updated_at: '2020-06-01 10:44:34',
    user_id: 9
  }, {
    created_at: '2020-06-01 10:44:34',
    file: 'https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.pdf',
    file_size: 282141,
    file_type: 'pdf',
    id: 21,
    name: '81734938_10157905502927402_5327388253257465856_o.pdf',
    project_id: 14,
    updated_at: '2020-06-01 10:44:34',
    user_id: 9
  }, {
    created_at: '2020-06-01 10:44:34',
    file: 'https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300',
    file_size: 282141,
    file_type: 'jpg',
    id: 21,
    name: '81734938_10157905502927402_5327388253257465856_o.jpg',
    project_id: 14,
    updated_at: '2020-06-01 10:44:34',
    user_id: 9
  }],
  loadingFiles: false,
  onChangeFile: function onChangeFile() {},
  isLoadingUplod: false,
  onDrop: function onDrop() {},
  onDropRejected: function onDropRejected() {},
  onDropErrorFileList: []
};