"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _CommentHeader = _interopRequireDefault(require("./CommentHeader"));

var _CommentContent = _interopRequireDefault(require("./CommentContent"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */
var Comments = function Comments(_ref) {
  var comments = _ref.comments,
      _deleteComment = _ref.deleteComment,
      deleteReply = _ref.deleteReply,
      env = _ref.env,
      user = _ref.user,
      requireLogin = _ref.requireLogin,
      onSubmitResponse = _ref.onSubmitResponse,
      onChange = _ref.onChange,
      reply = _ref.reply,
      laodingPostReply = _ref.laodingPostReply,
      loadMore = _ref.loadMore,
      totalComments = _ref.totalComments,
      loadingMoreComments = _ref.loadingMoreComments,
      loadMoreComments = _ref.loadMoreComments,
      thumb = _ref.thumb;

  var _useState = (0, _react.useState)(null),
      showTextArea = _useState[0],
      setShowTextArea = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isShowResponsive = _useState2[0],
      setIsShowResponsive = _useState2[1];

  var _useState3 = (0, _react.useState)("url(" + env + "/frontend/assets/send-comment.png)"),
      backgroundImageStyle = _useState3[0],
      setBackgroundImageStyle = _useState3[1];

  (0, _react.useEffect)(function () {
    if (window.innerWidth < 1025) {
      setIsShowResponsive(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (laodingPostReply && !isShowResponsive) {
      setBackgroundImageStyle("url(" + env + "/frontend/assets/loader.svg)");
    } else if (localStorage.lang === 'pt' && !isShowResponsive) {
      setBackgroundImageStyle("url(" + env + "/frontend/assets/enviar-comment.png)");
    } else if (isShowResponsive || !laodingPostReply) {
      setBackgroundImageStyle('');
    }
  }, [laodingPostReply, isShowResponsive]);

  var showTextAreaClick = function showTextAreaClick(comment) {
    var isLoggedIn = (0, _utils.isDefined)(user) ? !!Object.keys(user).length : false;

    if (!isLoggedIn) {
      requireLogin();
    }

    if (isLoggedIn) {
      setShowTextArea(comment.id);
      setTimeout(function () {
        document.getElementById("textarea-" + comment.id).focus();
      }, 100);
    }
  };

  var addMessage = function addMessage(e, id, isResponsive) {
    if (e.keyCode === 13 && e.shiftKey === false && !isResponsive) {
      onSubmitResponse(e, id);
    } else if (isResponsive) {
      onSubmitResponse(e, id);
    }
  };

  var renderCommentReplyes = function renderCommentReplyes(replies) {
    if (replies) {
      return replies.map(function (reply) {
        var newThumb;
        var newName;

        if (reply.company && !reply.user) {
          if (reply.company) {
            newThumb = reply.company.thumbs.thumb;
            newName = reply.company.name;
          } else {
            newThumb = reply.as_company_response.thumbs.thumb;
            newName = reply.as_company_response.name;
          }
        } else if (reply.user.institution) {
          newThumb = reply.user.institution.thumbs.thumb;
          newName = reply.user.institution.sigla;
        } else {
          newThumb = reply.user.thumbs.thumb;
          newName = reply.company ? (0, _utils.getEmployeeName)(reply.company.id, reply.user) : reply.user.name;
        }

        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "request-comment",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CommentHeader["default"], {
            comment: reply,
            user: user,
            deleteComment: function deleteComment() {
              return deleteReply ? deleteReply(reply.id, reply.comment_id) : _deleteComment(reply.id);
            },
            newThumb: newThumb,
            newName: newName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CommentContent["default"], {
            comment: reply
          })]
        }, reply.id);
      });
    }
  };

  var renderComments = function renderComments() {
    if (comments.length > 0) {
      return comments.map(function (comment) {
        var newThumb;
        var newName;

        if (comment.company && !comment.user) {
          if (comment.company) {
            newThumb = comment.company.thumbs.thumb;
            newName = comment.company.name;
          } else {
            newThumb = comment.as_company_response.thumbs.thumb;
            newName = comment.as_company_response.name;
          }
        } else if (comment.user.institution) {
          newThumb = comment.user.institution.thumbs.thumb;
          newName = comment.user.institution.sigla;
        } else {
          newThumb = comment.user.thumbs.thumb;
          newName = comment.company ? (0, _utils.getEmployeeName)(comment.company.id, comment.user) : comment.user.name;
        }

        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "request-comment",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CommentHeader["default"], {
            comment: comment,
            user: user,
            deleteComment: function deleteComment() {
              return _deleteComment(comment.id);
            },
            newThumb: newThumb,
            newName: newName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CommentContent["default"], {
            comment: comment
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "content-reply",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              type: "button",
              className: "btn-add-comment-reply",
              onClick: function onClick() {
                return showTextAreaClick(comment);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                alt: "comment",
                src: env + "/frontend/icons/ic-comment.svg"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "crowdfunding.comments.reply",
                defaultMessage: "Reply"
              })]
            }), showTextArea === comment.id && /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
              onSubmit: onSubmitResponse,
              method: "post",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "add-reply",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: thumb,
                  alt: "thumb"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
                  className: "input",
                  style: {
                    backgroundImage: backgroundImageStyle,
                    backgroundSize: laodingPostReply ? '16px' : '48px'
                  },
                  name: "reply",
                  id: "textarea-" + comment.id,
                  onChange: onChange,
                  onKeyDown: function onKeyDown(e) {
                    return addMessage(e, comment.id, false);
                  },
                  value: reply,
                  disabled: laodingPostReply,
                  placeholder: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'commentHere',
                    defaultMessage: 'Comment here…'
                  }),
                  maxLength: "500"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  icon: _freeSolidSvgIcons.faPaperPlane,
                  className: "mr-1 d-lg-none comment-reply",
                  onClick: function onClick(e) {
                    return addMessage(e, comment.id, true);
                  }
                })]
              })
            }), comment.totalReplies > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "comment-replies",
              children: [renderCommentReplyes(comment.replies), comment.totalReplies - comment.replies.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "readmore-box text-center",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                  type: "button",
                  className: "btn btn-read-more-comments",
                  onClick: function onClick() {
                    return loadMore(comment.id, comment.page);
                  },
                  children: [laodingPostReply && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "loading",
                    defaultMessage: "Loading ..."
                  }), !laodingPostReply && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "readmore",
                    defaultMessage: "Read more"
                  })]
                })
              })]
            })]
          })]
        }, comment.id);
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-center no-results",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "crowdfunding.no-comments",
        defaultMessage: "No comments"
      })
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [renderComments(), comments.length < totalComments && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col-sm-12 text-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        type: "button",
        className: "btn btn-read-more-comments",
        disabled: loadingMoreComments,
        onClick: loadMoreComments,
        children: [loadingMoreComments && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "charityneeds.request.comments.loading",
          defaultMessage: "Loading ..."
        }), !loadingMoreComments && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "charityneeds.request.comments.readmore",
          defaultMessage: "Read more"
        })]
      })
    })]
  });
};

Comments.propTypes = process.env.NODE_ENV !== "production" ? {
  comments: _propTypes["default"].array.isRequired,
  env: _propTypes["default"].string.isRequired,
  user: _propTypes["default"].object.isRequired,
  deleteComment: _propTypes["default"].func.isRequired,
  deleteReply: _propTypes["default"].func,
  reply: _propTypes["default"].string.isRequired,
  requireLogin: _propTypes["default"].func.isRequired,
  onSubmitResponse: _propTypes["default"].func.isRequired,
  laodingPostReply: _propTypes["default"].bool.isRequired,
  loadMore: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  totalComments: _propTypes["default"].number,
  loadingMoreComments: _propTypes["default"].bool,
  loadMoreComments: _propTypes["default"].func.isRequired,
  thumb: _propTypes["default"].string.isRequired
} : {};
var _default = Comments;
exports["default"] = _default;
module.exports = exports.default;