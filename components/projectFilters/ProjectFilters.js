"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _checkboxField = _interopRequireDefault(require("../../elements/checkboxField"));

var _selectField = _interopRequireDefault(require("../../elements/selectField"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var ProjectFilters = function ProjectFilters(_ref) {
  var searchTitleLabel = _ref.searchTitleLabel,
      onChangeInput = _ref.onChangeInput,
      searchLabelPlaceholder = _ref.searchLabelPlaceholder,
      filtersTitleLabel = _ref.filtersTitleLabel,
      color = _ref.color,
      odsLabel = _ref.odsLabel,
      ods = _ref.ods,
      onSelectOds = _ref.onSelectOds,
      categoriesLabel = _ref.categoriesLabel,
      statusLabel = _ref.statusLabel,
      applyFilter = _ref.applyFilter,
      onSelectCategory = _ref.onSelectCategory,
      onSelectStatus = _ref.onSelectStatus,
      categories = _ref.categories,
      status = _ref.status,
      categoryValue = _ref.categoryValue,
      statusValue = _ref.statusValue,
      applyButtonLabel = _ref.applyButtonLabel,
      search = _ref.search,
      showFiltersBox = _ref.showFiltersBox;

  var _useState = (0, _react.useState)(showFiltersBox),
      showFilters = _useState[0],
      setShowFilters = _useState[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "box project-filters",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: searchTitleLabel
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
          type: "text",
          onChange: onChangeInput,
          error: "",
          placeholder: searchLabelPlaceholder,
          defaultValue: "",
          field: "search",
          value: search
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "filters",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: function onClick() {
            return setShowFilters(!showFilters);
          },
          className: "filter-button",
          style: {
            color: color
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
            children: [filtersTitleLabel, /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "Open",
              src: _env.cdnStaticUrl + "/frontend/icons/caret.png"
            })]
          })
        })
      })]
    }), showFilters && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: odsLabel,
            className: "control-label",
            children: odsLabel
          })
        }), ods.map(function (o, idx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
              label: o.name,
              error: "",
              onChange: function onChange(x) {
                return onSelectOds(x, idx);
              },
              name: o.tag_name,
              value: o.ods_id,
              checked: o.checked,
              disabled: false
            })
          }, o.ods_id);
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
            value: categoryValue,
            options: categories,
            label: categoriesLabel,
            field: "category",
            onChange: onSelectCategory,
            selectText: "- -"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
            value: statusValue,
            options: status,
            label: statusLabel,
            field: "status",
            onChange: onSelectStatus,
            selectText: "- -"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "text-right",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "success-full",
            onClick: applyFilter,
            text: applyButtonLabel
          })
        })]
      })]
    })]
  });
};

ProjectFilters.propTypes = process.env.NODE_ENV !== "production" ? {
  searchTitleLabel: _propTypes["default"].string.isRequired,
  onChangeInput: _propTypes["default"].func.isRequired,
  searchLabelPlaceholder: _propTypes["default"].string.isRequired,
  filtersTitleLabel: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string.isRequired,
  odsLabel: _propTypes["default"].string.isRequired,
  ods: _propTypes["default"].array.isRequired,
  onSelectOds: _propTypes["default"].func.isRequired,
  categoriesLabel: _propTypes["default"].string.isRequired,
  statusLabel: _propTypes["default"].string.isRequired,
  applyFilter: _propTypes["default"].func.isRequired,
  onSelectCategory: _propTypes["default"].func.isRequired,
  onSelectStatus: _propTypes["default"].func.isRequired,
  categories: _propTypes["default"].array.isRequired,
  status: _propTypes["default"].array.isRequired,
  categoryValue: _propTypes["default"].string,
  statusValue: _propTypes["default"].string,
  applyButtonLabel: _propTypes["default"].string,
  search: _propTypes["default"].string,
  showFiltersBox: _propTypes["default"].bool
} : {};
ProjectFilters.defaultProps = {
  showFiltersBox: false
};
var _default = ProjectFilters;
exports["default"] = _default;
module.exports = exports.default;