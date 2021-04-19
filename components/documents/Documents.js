"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJsPagination = _interopRequireDefault(require("react-js-pagination"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _loading = _interopRequireDefault(require("../loading"));

var _icon = _interopRequireDefault(require("../icon"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable camelcase */
var Documents = function Documents(_ref) {
  var isLoadingSearch = _ref.isLoadingSearch,
      documents = _ref.documents,
      downloadText = _ref.downloadText,
      noResultsText = _ref.noResultsText,
      activePage = _ref.activePage,
      per_page = _ref.per_page,
      total = _ref.total,
      handlePageChange = _ref.handlePageChange,
      headerTitleText = _ref.headerTitleText,
      headerSubtitleText = _ref.headerSubtitleText,
      onSearch = _ref.onSearch,
      errors = _ref.errors,
      searchPlaceholder = _ref.searchPlaceholder,
      searchValue = _ref.searchValue,
      deleteDocument = _ref.deleteDocument,
      openModalDelete = _ref.openModalDelete,
      showDeleteModal = _ref.showDeleteModal,
      closeModal = _ref.closeModal,
      colSm = _ref.colSm;

  var formatBytes = function formatBytes(bytes) {
    var kb = 1024;
    var ndx = Math.floor(Math.log(bytes) / Math.log(kb));
    var fileSizeTypes = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'pb', 'eb', 'zb', 'yb'];
    return (bytes / kb / kb).toFixed(2) + " " + fileSizeTypes[ndx];
  };

  var renderDocuments = function renderDocuments() {
    if (isLoadingSearch) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {});
    }

    if (documents.length > 0) {
      return documents.map(function (document) {
        var fileUserOwner = document.user_id ? document.user_id : 0;
        var userId = localStorage.user ? JSON.parse(localStorage.user).id : '';
        var icon;

        switch (document.file_type) {
          case 'application/pdf':
            icon = 'icon-pdf';
            break;

          case 'application/msword':
            icon = 'icon-ic-doc';
            break;

          case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            icon = 'icon-ic-ppt';
            break;

          default:
            icon = 'icon-ic-txt';
        }

        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "document-row",
          children: [document.title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: document.title
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: decodeURI(document.name)
          }), document.summary && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: document.summary
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon["default"], {
            iconClass: icon
          }), "\xA0", /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            href: document.file,
            className: "download-file",
            rel: "noopener noreferrer",
            target: "_blank",
            title: document.title,
            children: [downloadText, "\xA0", formatBytes(document.file_size)]
          }), openModalDelete && fileUserOwner === userId && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "deleteButton",
            onClick: function onClick() {
              return openModalDelete(document.id);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon["default"], {
              iconClass: "icon-icon-delete"
            })
          })]
        }, document.id);
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "noResult-div",
      children: noResultsText
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
    sm: colSm || 9,
    className: "documents",
    children: [headerTitleText && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "box",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: headerTitleText
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: headerSubtitleText
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
      label: "",
      type: "text",
      onChange: onSearch,
      error: errors.search ? errors.search : '',
      placeholder: searchPlaceholder,
      defaultValue: searchValue,
      field: "search"
    }), renderDocuments(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: {
            span: 6,
            offset: 3
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactJsPagination["default"], {
              prevPageText: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "prev-page"
              }),
              nextPageText: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "next-page"
              }),
              activePage: activePage,
              itemsCountPerPage: Number(per_page),
              totalItemsCount: Number(total),
              pageRangeDisplayed: 5,
              onChange: handlePageChange
            })
          })
        })
      })
    }), openModalDelete && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
      show: showDeleteModal,
      onHide: closeModal,
      className: "md-delete-employee",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Title, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "documents.list.delete.modal.title",
            defaultMessage: "Delete document"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-12",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "documents.department.delete.text",
                defaultMessage: "Are you sure do you want to delete this document?"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-12 text-center mt-3",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
              extraClass: "success-full",
              onClick: deleteDocument,
              text: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "yes",
                defaultMessage: "Yes"
              })
            })
          })]
        })
      })]
    })]
  });
};

Documents.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoadingSearch: _propTypes["default"].bool.isRequired,
  documents: _propTypes["default"].array.isRequired,
  downloadText: _propTypes["default"].string.isRequired,
  noResultsText: _propTypes["default"].string.isRequired,
  headerTitleText: _propTypes["default"].string,
  headerSubtitleText: _propTypes["default"].string,
  handlePageChange: _propTypes["default"].func.isRequired,
  onSearch: _propTypes["default"].func.isRequired,
  errors: _propTypes["default"].object,
  searchPlaceholder: _propTypes["default"].string,
  searchValue: _propTypes["default"].string,
  activePage: _propTypes["default"].number,
  per_page: _propTypes["default"].number,
  total: _propTypes["default"].number,
  deleteDocument: _propTypes["default"].func,
  openModalDelete: _propTypes["default"].func,
  showDeleteModal: _propTypes["default"].bool,
  closeModal: _propTypes["default"].func,
  colSm: _propTypes["default"].number
} : {};
var _default = Documents;
exports["default"] = _default;
module.exports = exports.default;