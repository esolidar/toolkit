"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Documents = _interopRequireDefault(require("./Documents"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Documents',
  component: _Documents["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Documents["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  isLoadingSearch: false,
  documents: [{
    company_id: 1,
    created_at: '2017-08-24 10:20:28',
    file: 'https://cdn.testesolidar.com/companies/1/documents/92b5e29c-e8fd-44e4-acdf-3634c77002c9.txt?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J/20200427/eu-west-1/s3/aws4_request&X-Amz-Date=20200427T162430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=d88cc8444aef12e7387fb35d7d5448788ac1f0a6add4f35ed93b7a0be44534a4',
    file_size: '1103660',
    file_type: 'txt',
    id: 28,
    streamFile: 'amazons3',
    summary: 'cum caraças',
    tags: 'asdgfdsafgsdfg',
    title: 'teste deploy',
    updated_at: '2018-10-31 19:49:35'
  }],
  downloadText: 'Download',
  noResultsText: 'No Results',
  headerTitleText: 'Shared documents',
  headerSubtitleText: 'Here you have the documents shared by your company to see or download.',
  handlePageChange: function handlePageChange() {},
  onSearch: function onSearch() {},
  errors: {},
  searchPlaceholder: 'Search by title or description',
  searchValue: '',
  activePage: 1,
  per_page: 5,
  total: 10
};