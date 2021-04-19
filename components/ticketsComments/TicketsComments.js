"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable camelcase */
var TicketsComments = function TicketsComments(_ref) {
  var ticketComments = _ref.ticketComments,
      activePage = _ref.activePage,
      total = _ref.total,
      handlePageChange = _ref.handlePageChange,
      supportTag = _ref.supportTag;

  var renderFiles = function renderFiles(files) {
    return files.map(function (document, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "document-row",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: document.file,
          className: "download-file",
          rel: "noopener noreferrer",
          target: "_blank",
          title: document.title,
          children: decodeURI(document.name)
        })
      }, index);
    });
  };

  var createHtmlMarkup = function createHtmlMarkup(text) {
    return {
      __html: text
    };
  };

  var urlRegex = /(https?:\/\/[^\s]+)/g;

  var renderComments = function renderComments() {
    return ticketComments.map(function (ticketComment, index) {
      var _comment$text;

      var comment = ticketComment.project_comment ? ticketComment.project_comment : ticketComment;
      var user = ticketComment.project_comment ? ticketComment.project_comment.user : ticketComment.user;
      var thumb = '';

      if (user) {
        thumb = user.institution ? user.institution.thumbs.thumb : user.thumbs.thumb;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Card, {
        className: "ticketCard mb-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Card.Body, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 3,
              className: "header",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "user-post",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  alt: "Thumb",
                  className: "thumb",
                  src: thumb || 'https://static.testesolidar.com/frontend/assets/no-image.png'
                }), user ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  children: [user.institution ? user.institution.sigla : user.name, supportTag && !user.institution && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "support",
                    children: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.supportTag',
                      defaultMessage: 'Support eSolidar'
                    })
                  })]
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: "--"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "ticket-date",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
                  utc: true,
                  tz: _momentTimezone["default"].tz.guess(),
                  format: "YYYY-MM-DD HH:mm:ss",
                  children: comment.created_at
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 9,
              className: "border-left",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-right mb-0 comment-date",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
                  utc: true,
                  fromNow: true,
                  ago: true,
                  children: comment.created_at
                })
              }), (_comment$text = comment.text) === null || _comment$text === void 0 ? void 0 : _comment$text.split('\n').map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                    dangerouslySetInnerHTML: createHtmlMarkup(item.replace(urlRegex, function (url) {
                      return "<a href=\"" + url + "\" target=\"_blank\">" + url + "</a>";
                    }))
                  })
                }, index);
              }), comment.attachment_files.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "text-right w-100 mt-3 files-box",
                children: renderFiles(comment.attachment_files)
              })]
            })]
          })
        })
      }, index);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
    sm: 12,
    children: [renderComments(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: {
        span: 6,
        offset: 3
      },
      children: ticketComments.length < total && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "dark",
          onClick: function onClick() {
            return handlePageChange(activePage);
          },
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'readmore',
            defaultMessage: 'Read more'
          })
        })
      })
    })]
  });
};

TicketsComments.propTypes = process.env.NODE_ENV !== "production" ? {
  ticketComments: _propTypes["default"].array,
  activePage: _propTypes["default"].number,
  total: _propTypes["default"].number,
  handlePageChange: _propTypes["default"].func.isRequired,
  supportTag: _propTypes["default"].bool
} : {};
var _default = TicketsComments;
exports["default"] = _default;
module.exports = exports.default;