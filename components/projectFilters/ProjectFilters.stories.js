"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ProjectFilters = _interopRequireDefault(require("./ProjectFilters"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Projects/ProjectFilters',
  component: _ProjectFilters["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProjectFilters["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  color: 'red',
  searchTitleLabel: 'Pesquisar',
  searchLabelPlaceholder: 'Pesquisar por título',
  onChangeInput: function onChangeInput() {},
  filtersTitleLabel: 'Filtros',
  odsLabel: 'ODS',
  onSelectOds: function onSelectOds() {},
  categories: [{
    id: 1,
    name: 'Categoria 1'
  }],
  status: [{
    id: 1,
    name: 'Pending'
  }],
  ods: [{
    id: 1,
    ods_id: 1,
    name: 'Erradicar a pobreza',
    tag_name: 'ods-1',
    status: 1,
    updated_at: '2020-01-23 10:14:03',
    created_at: '2020-01-23 10:14:03'
  }, {
    id: 2,
    ods_id: 2,
    name: 'Erradicar a fome',
    tag_name: 'ods-2',
    status: 1,
    updated_at: '2020-01-23 10:14:03',
    created_at: '2020-01-23 10:14:03'
  }, {
    id: 3,
    ods_id: 3,
    name: 'Saúde de qualidade',
    tag_name: 'ods-3',
    status: 1,
    updated_at: '2020-01-23 10:14:03',
    created_at: '2020-01-23 10:14:03'
  }],
  categoriesLabel: 'Selecione a Categoria',
  statusLabel: 'Selecione o Estado',
  applyButtonLabel: 'Aplicar filtro'
};