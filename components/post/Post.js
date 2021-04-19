"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _reactIntl = require("react-intl");

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var _commentPost = _interopRequireDefault(require("../commentPost"));

var _utils = require("../../utils");

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/control-has-associated-label */
var Post = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(Post, _Component);

  function Post(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      deleteCommenId: '',
      showDeleteModal: false,
      readMoreComment: false,
      showEditModal: false,
      commentEditId: '',
      commentEditText: '',
      currentUser: localStorage.user ? JSON.parse(localStorage.user) : []
    };
    _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleModal = _this.toggleModal.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleModalEdit = _this.toggleModalEdit.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderReplies = _this.renderReplies.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleLines = _this.toggleLines.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = Post.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        commentUpdated = _this$props.commentUpdated,
        post = _this$props.post;

    if (prevProps.commentUpdated !== commentUpdated) {
      if (Object.keys(commentUpdated).length > 0) {
        this.updateState({
          showEditModal: false
        });

        if (commentUpdated.parent_id) {
          var index = post.replies.findIndex(function (o) {
            return o.id === commentUpdated.id;
          });

          if (index >= 0 && post.id === commentUpdated.parent_id) {
            var newReplies = post.replies;
            newReplies[index].text = commentUpdated.text;
            this.renderReplies(newReplies);
          }
        }
      }
    }
  };

  _proto.updateState = function updateState(state) {
    this.setState(state);
  };

  _proto.toggleModal = function toggleModal(id) {
    var showDeleteModal = this.state.showDeleteModal;
    this.updateState({
      showDeleteModal: !showDeleteModal,
      deleteCommenId: id || ''
    });
  };

  _proto.toggleModalEdit = function toggleModalEdit(id, text) {
    var showEditModal = this.state.showEditModal;
    this.updateState({
      showEditModal: !showEditModal,
      commentEditId: id || '',
      commentEditText: text || ''
    });
  };

  _proto.toggleLines = function toggleLines(event) {
    event.preventDefault();
    var readMoreComment = this.state.readMoreComment;
    this.setState({
      readMoreComment: !readMoreComment
    });
  };

  _proto.renderReplies = function renderReplies(comments) {
    var _this2 = this;

    var _this$state = this.state,
        readMoreComment = _this$state.readMoreComment,
        currentUser = _this$state.currentUser;
    var disabled = this.props.disabled;

    if (comments.length > 0) {
      return comments.map(function (comment) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "no-padding",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "comment d-block",
            id: "comment-" + comment.id,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              className: "header pt-3",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                alt: "thumb",
                className: "thumb",
                src: comment.user.thumbs.thumb
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "user-post",
                children: (0, _utils.getEmployeeName)(comment.company_id, comment.user)
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "status",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
                  utc: true,
                  fromNow: true,
                  ago: true,
                  children: comment.created_at
                }), comment.user_id === currentUser.id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "post-options-div",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown, {
                    id: "post-options",
                    className: "post-options post-options-dropdown",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.DropdownButton, {
                      alignRight: true,
                      className: "post-options-dropdown",
                      id: "btn-toggle-edit",
                      title: "",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown.Header, {
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                          type: "button",
                          onClick: function onClick() {
                            return _this2.toggleModalEdit(comment.id, comment.text);
                          },
                          disabled: disabled,
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                            id: "feed.options.edit-comment",
                            defaultMessage: "Edit comment"
                          })
                        })
                      })
                    })
                  })
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "comments-box",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                className: "comment-text",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "comment-text-truncate",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "before-update before-update-" + comment.id,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTruncate["default"], {
                      lines: readMoreComment ? 0 : 3,
                      ellipsis: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                          href: "#",
                          className: "readmore-link",
                          onClick: _this2.toggleLines,
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                            id: "feed.post.readmore",
                            defaultMessage: "Read more"
                          })
                        })
                      }),
                      children: comment.text.split('\n').map(function (item, index) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                          children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
                        }, index);
                      })
                    })
                  })
                })
              })
            })]
          })
        }, comment.id);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        post = _this$props2.post,
        user = _this$props2.user,
        editComment = _this$props2.editComment,
        deleteComment = _this$props2.deleteComment,
        onSubmitReply = _this$props2.onSubmitReply,
        replyValue = _this$props2.replyValue,
        commentHereText = _this$props2.commentHereText,
        textareaOnChange = _this$props2.textareaOnChange,
        disabled = _this$props2.disabled,
        errors = _this$props2.errors,
        renderMoreReplies = _this$props2.renderMoreReplies,
        renderMoreRepliesLoading = _this$props2.renderMoreRepliesLoading;
    var _this$state2 = this.state,
        currentUser = _this$state2.currentUser,
        showDeleteModal = _this$state2.showDeleteModal,
        deleteCommenId = _this$state2.deleteCommenId,
        showEditModal = _this$state2.showEditModal,
        commentEditId = _this$state2.commentEditId,
        commentEditText = _this$state2.commentEditText;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "box",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "post",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "col-sm-12 header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "Thumb",
            className: "thumb",
            src: user.thumbs.thumb
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "user-post",
            children: (0, _utils.getEmployeeName)(post.company_id, post.user)
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "status",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
              utc: true,
              fromNow: true,
              ago: true,
              children: post.created_at
            }), post.user_id === currentUser.id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "post-options-div",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown, {
                id: "post-options",
                className: "post-options post-options-dropdown",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.DropdownButton, {
                  alignRight: true,
                  className: "post-options-dropdown",
                  id: "btn-toggle-edit-post",
                  title: "",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Dropdown.Header, {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      onClick: function onClick() {
                        return _this3.toggleModalEdit(post.id, post.text);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                        id: "projects.comments.edit",
                        defaultMessage: "Edit Comment"
                      })
                    })
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "post-item",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "before-update before-update-" + post.id,
            children: post.text.split('\n').map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
              }, index);
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "loves-comments",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "comments-count hidden-xs",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: "https://static.esolidar.com/frontend/icons/ic-comment.svg",
              alt: "Comments"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text",
              children: post.replies && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                children: [post.total, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "feed.post.commentPlural",
                  defaultMessage: " Comments"
                })]
              })
            })]
          })
        }), post.replies.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [post.current_page !== post.last_page && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: !renderMoreRepliesLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              onClick: function onClick() {
                return renderMoreReplies(post);
              },
              className: "renderMoreBtn",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "projects.comments.renderMore",
                defaultMessage: "Load more comments"
              })
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "loadingReplies",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "lds-ellipsis",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})]
              })
            })
          }), this.renderReplies(post.replies)]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_commentPost["default"], {
          postId: post.id,
          onSubmit: onSubmitReply,
          textareaValue: replyValue,
          commentHereText: commentHereText,
          textareaOnChange: textareaOnChange,
          errors: errors,
          disabled: disabled
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
        show: showEditModal,
        onHide: function onHide() {
          return _this3.toggleModalEdit('', '');
        },
        className: "md-delete",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
          closeButton: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Title, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "projects.comments.edit",
              defaultMessage: "Edit Comment"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "col-sm-12",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
                onSubmit: function onSubmit(e) {
                  e.preventDefault();

                  _this3.toggleModalEdit('', '');

                  editComment(commentEditId);
                },
                method: "post",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
                  sm: 12,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                    id: "text-" + commentEditId,
                    field: "post",
                    defaultValue: commentEditText,
                    className: "new-post background-post-comment w-100 b",
                    onChange: textareaOnChange,
                    error: errors.post,
                    required: true
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "submit",
                    className: "btn-esolidar btn-success-full float-right",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                      id: "projects.comments.save",
                      defaultMessage: "Save"
                    })
                  })]
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
        show: showDeleteModal,
        onHide: this.toggleModal,
        className: "md-delete",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
          closeButton: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Title, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "projects.comment.delete",
              defaultMessage: "Delete Comment"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "col-sm-12",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "projects.comment.delete.text",
                  defaultMessage: "Are you sure do you want to delete this comment?"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "col-sm-12 text-right",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                className: "btn btn-submit",
                type: "button",
                onClick: deleteComment(deleteCommenId),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "company.department.yes",
                  defaultMessage: "Yes"
                })
              })
            })]
          })
        })]
      })]
    });
  };

  return Post;
}(_react.Component);

var _default = Post;
exports["default"] = _default;
Post.propTypes = process.env.NODE_ENV !== "production" ? {
  post: _propTypes["default"].object.isRequired,
  user: _propTypes["default"].object.isRequired,
  editComment: _propTypes["default"].func,
  deleteComment: _propTypes["default"].func,
  onSubmitReply: _propTypes["default"].func,
  replyValue: _propTypes["default"].string,
  commentHereText: _propTypes["default"].string,
  textareaOnChange: _propTypes["default"].func,
  commentUpdated: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  errors: _propTypes["default"].array,
  renderMoreReplies: _propTypes["default"].func,
  renderMoreRepliesLoading: _propTypes["default"].bool
} : {};
module.exports = exports.default;