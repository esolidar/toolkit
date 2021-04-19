"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _InstitutionListSelect = _interopRequireDefault(require("./InstitutionListSelect"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/InstitutionListSelect',
  component: _InstitutionListSelect["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InstitutionListSelect["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  selectText: 'Selecionar',
  institutionSelected: 30,
  user_id: null,
  isLoading: false,
  institutions: [{
    user_id: 1124,
    id: 30,
    category_id: 1,
    name: 'Helpo',
    sigla: 'helpo',
    accept_volunteer: 1,
    accept_donations: 1,
    paypal_email: 'donativos@esolidar.com',
    image: 'https://static.esolidar.com/institutions/5db984ee-51b4-43c3-b363-23eaac1f17c3.png',
    cover_image: 'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
    country: 208,
    language: 2
  }, {
    user_id: 1125,
    id: 31,
    category_id: 1,
    name: 'Fundo Brasileiro para a Biodiversidade',
    sigla: 'AP Braga',
    accept_volunteer: 1,
    accept_donations: 1,
    paypal_email: 'donativos@esolidar.com',
    image: 'https://static.esolidar.com/institutions/5d00d812-c3a8-47c3-a66c-46bbac1f2e6d.jpg',
    cover_image: 'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
    country: 208,
    language: 2
  }],
  categories: [],
  onChangeInstitutionCategory: function onChangeInstitutionCategory() {},
  handlePageChange: function handlePageChange() {},
  onSearch: function onSearch() {},
  NoResultsText: 'No result text',
  selectCategoryText: 'Select Category',
  error: 'error',
  search: 'search',
  npoId: 30,
  pagination: {
    activePage: 1,
    itemsCountPerPage: 6,
    totalItemsCount: 50
  }
};