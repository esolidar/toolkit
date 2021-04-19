"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _reactJsPagination = _interopRequireDefault(require("react-js-pagination"));

var _classnames = _interopRequireDefault(require("classnames"));

var _selectField = _interopRequireDefault(require("../../elements/selectField"));

var _loading = _interopRequireDefault(require("../loading"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable camelcase */
var InstitutionListSelect = function InstitutionListSelect(_ref) {
  var institutions = _ref.institutions,
      onChangeInstitutionCategory = _ref.onChangeInstitutionCategory,
      selectCategoryText = _ref.selectCategoryText,
      error = _ref.error,
      onSearch = _ref.onSearch,
      categories = _ref.categories,
      search = _ref.search,
      placeholderSearch = _ref.placeholderSearch,
      handlePageChange = _ref.handlePageChange,
      institutionSelected = _ref.institutionSelected,
      onChange = _ref.onChange,
      selectText = _ref.selectText,
      NoResultsText = _ref.NoResultsText,
      pagination = _ref.pagination,
      isLoading = _ref.isLoading,
      user_id = _ref.user_id,
      removeInstitutionSelected = _ref.removeInstitutionSelected;

  var renderCharities = function renderCharities() {
    if (institutions) {
      if (institutions.length > 0) {
        return institutions.map(function (charity) {
          var divStyle = {
            backgroundImage: "url(" + charity.image + ")"
          };
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "npo-thumb",
              title: charity.name,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                htmlFor: "input_" + charity.id,
                children: [institutionSelected ? /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  onChange: onChange,
                  type: "radio",
                  name: "input_" + charity.id,
                  id: "input_" + charity.id,
                  checked: +institutionSelected === +charity.id,
                  value: charity.id
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  onChange: onChange,
                  type: "radio",
                  name: "user_id",
                  id: "input_" + charity.id,
                  checked: +user_id === +charity.user_id,
                  value: charity.user_id
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "npo-pin-thumb",
                  style: divStyle
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "name",
                  children: charity.name
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "btn btn-select",
                  children: [selectText || '', !selectText && +user_id !== charity.user_id && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "institutions.list.select",
                    defaultMessage: "Select"
                  }), !selectText && +user_id === charity.user_id && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "institutions.list.selected",
                    defaultMessage: "Selected"
                  }), +user_id === charity.user_id && removeInstitutionSelected && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    onClick: removeInstitutionSelected,
                    className: "remove-selected",
                    type: "button",
                    children: "x"
                  })]
                })]
              })
            })
          }, charity.id);
        });
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          className: "text-center no-results",
          children: NoResultsText
        })
      });
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
    className: "institutions-list",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      md: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
        label: (0, _reactIntl.useIntl)().formatMessage({
          id: 'institution',
          defaultMessage: 'Institution'
        }),
        onChange: onChangeInstitutionCategory,
        idLabel: "selectCategory",
        field: "institution_category",
        selectText: selectCategoryText,
        options: categories
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      md: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "form-control search-institutions",
        onChange: onSearch,
        value: search,
        placeholder: placeholderSearch,
        name: "search"
      })
    }), isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      md: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
    }), !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])('col-sm-12', {
        'has-error': error
      }),
      children: [renderCharities(), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "help-block",
        children: error
      }), institutions.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsPagination["default"], {
            innerClass: "pagination justify-content-center",
            activePage: pagination.activePage,
            itemsCountPerPage: pagination.itemsCountPerPage,
            totalItemsCount: pagination.totalItemsCount,
            pageRangeDisplayed: 5,
            onChange: handlePageChange
          })
        })
      })]
    })]
  });
};

InstitutionListSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  categories: _propTypes["default"].array.isRequired,
  institutions: _propTypes["default"].array.isRequired,
  onChangeInstitutionCategory: _propTypes["default"].func.isRequired,
  handlePageChange: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onSearch: _propTypes["default"].func.isRequired,
  selectText: _propTypes["default"].string,
  NoResultsText: _propTypes["default"].string.isRequired,
  selectCategoryText: _propTypes["default"].string.isRequired,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  search: _propTypes["default"].string,
  placeholderSearch: _propTypes["default"].string,
  institutionSelected: _propTypes["default"].number,
  pagination: _propTypes["default"].shape({
    activePage: _propTypes["default"].number.isRequired,
    itemsCountPerPage: _propTypes["default"].number.isRequired,
    totalItemsCount: _propTypes["default"].number.isRequired
  }),
  isLoading: _propTypes["default"].bool,
  user_id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  removeInstitutionSelected: _propTypes["default"].func
} : {};
var _default = InstitutionListSelect;
exports["default"] = _default;
module.exports = exports.default;