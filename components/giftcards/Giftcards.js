"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactBootstrapTable = require("react-bootstrap-table");

var _reactJsPagination = _interopRequireDefault(require("react-js-pagination"));

var _reactIntl = require("react-intl");

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _loading = _interopRequireDefault(require("../loading"));

var _jsxRuntime = require("react/jsx-runtime");

var Giftcards = function Giftcards(_ref) {
  var giftCardsList = _ref.giftCardsList,
      giftcardTableTitleText = _ref.giftcardTableTitleText,
      usedExpiredText = _ref.usedExpiredText,
      usedTitleText = _ref.usedTitleText,
      InputPlaceholderText = _ref.InputPlaceholderText,
      causeText = _ref.causeText,
      amountText = _ref.amountText,
      dateText = _ref.dateText,
      onSearchTable = _ref.onSearchTable,
      giftCardsListUsed = _ref.giftCardsListUsed,
      options = _ref.options,
      renderCause = _ref.renderCause,
      rendeAmount = _ref.rendeAmount,
      giftCardsListActivePage = _ref.giftCardsListActivePage,
      giftCardsListPerPage = _ref.giftCardsListPerPage,
      giftCardsListTotal = _ref.giftCardsListTotal,
      giftCardsListHandlePageChange = _ref.giftCardsListHandlePageChange,
      activePageUsed = _ref.activePageUsed,
      itemsPerPage = _ref.itemsPerPage,
      totalUsed = _ref.totalUsed,
      handlePageChangeUsed = _ref.handlePageChangeUsed,
      loading = _ref.loading,
      searchTerm = _ref.searchTerm;

  var renderDate = function renderDate(cell, row) {
    if (row.giftcard_institution.length > 0) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          whiteSpace: 'initial',
          textAlign: 'center',
          fontSize: '13px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
          utc: true,
          tz: row.timezone,
          format: "YYYY-MM-DD HH:mm:ss",
          children: row.giftcard_institution[0].created_at
        })
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "error",
      style: {
        textAlign: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "giftcard.expired",
        defaultMessage: "Expired"
      })
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
    children: [giftCardsList.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "text-center mobile-nopadding",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsPagination["default"], {
        prevPageText: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "prev-page"
        }),
        nextPageText: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "next-page"
        }),
        activePage: giftCardsListActivePage,
        itemsCountPerPage: Number(giftCardsListPerPage),
        totalItemsCount: giftCardsListTotal,
        pageRangeDisplayed: 5,
        onChange: giftCardsListHandlePageChange
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
      sm: 12,
      className: "mobile-nopadding",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: usedExpiredText
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: usedTitleText
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "giftcards-used-table padding-bottom30 mobile-nopadding",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        onChange: onSearchTable,
        className: "form-control",
        placeholder: InputPlaceholderText,
        value: searchTerm
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
      sm: 12,
      className: "giftcards-used-table mobile-nopadding",
      children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "loading-list",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrapTable.BootstrapTable, {
        tableHeaderClass: "table-header",
        trClassName: "tableRow",
        tableBodyClass: "table-body",
        options: options,
        data: giftCardsListUsed,
        remote: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrapTable.TableHeaderColumn, {
          dataField: "id",
          isKey: true,
          hidden: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrapTable.TableHeaderColumn, {
          dataSort: true,
          dataField: "name",
          children: giftcardTableTitleText
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrapTable.TableHeaderColumn, {
          dataSort: true,
          dataField: "institution_name",
          dataFormat: renderCause,
          children: causeText
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrapTable.TableHeaderColumn, {
          dataField: "amount",
          dataSort: true,
          dataFormat: rendeAmount,
          width: "130",
          children: amountText
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrapTable.TableHeaderColumn, {
          dataField: "date",
          dataFormat: renderDate,
          dataSort: true,
          width: "130",
          children: dateText
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "text-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsPagination["default"], {
        prevPageText: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "prev-page"
        }),
        nextPageText: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "next-page"
        }),
        activePage: activePageUsed,
        itemsCountPerPage: Number(itemsPerPage),
        totalItemsCount: totalUsed,
        pageRangeDisplayed: 5,
        onChange: handlePageChangeUsed
      })
    })]
  });
};

var _default = Giftcards;
exports["default"] = _default;
Giftcards.propTypes = process.env.NODE_ENV !== "production" ? {
  giftCardsList: _propTypes["default"].array.isRequired,
  onSearchTable: _propTypes["default"].func.isRequired,
  giftCardsListUsed: _propTypes["default"].array.isRequired,
  options: _propTypes["default"].object.isRequired,
  renderCause: _propTypes["default"].func.isRequired,
  rendeAmount: _propTypes["default"].func.isRequired,
  giftCardsListActivePage: _propTypes["default"].number.isRequired,
  giftCardsListPerPage: _propTypes["default"].number.isRequired,
  giftCardsListTotal: _propTypes["default"].number.isRequired,
  giftCardsListHandlePageChange: _propTypes["default"].func.isRequired,
  activePageUsed: _propTypes["default"].number.isRequired,
  itemsPerPage: _propTypes["default"].number.isRequired,
  totalUsed: _propTypes["default"].number.isRequired,
  handlePageChangeUsed: _propTypes["default"].func.isRequired,
  giftcardTableTitleText: _propTypes["default"].string,
  usedExpiredText: _propTypes["default"].string,
  usedTitleText: _propTypes["default"].string,
  InputPlaceholderText: _propTypes["default"].string,
  causeText: _propTypes["default"].string,
  amountText: _propTypes["default"].string,
  dateText: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  searchTerm: _propTypes["default"].string
} : {};
module.exports = exports.default;