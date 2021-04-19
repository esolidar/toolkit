"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var CreateComment = function CreateComment(props) {
  var comment = props.comment,
      env = props.env,
      onSubmitComment = props.onSubmitComment,
      loadingNewComment = props.loadingNewComment,
      onChange = props.onChange,
      thumb = props.thumb;

  var addMessage = function addMessage(e, isMobile) {
    if (e.keyCode === 13 && e.shiftKey === false && !isMobile) {
      onSubmitComment(e);
    } else if (e.keyCode !== 13 && e.shiftKey === false && isMobile) {
      onSubmitComment(e);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "comments",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "create-comment",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "crowdfunding.create.comment",
          defaultMessage: "Write a comment"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "textarea",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "thumb",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: thumb,
            alt: "user-thumb"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
          "data-testid": "create-comment",
          className: "input",
          style: {
            backgroundImage: loadingNewComment ? "url(" + env + "/frontend/assets/loader.svg)" : (0, _reactIntl.useIntl)().formatMessage({
              id: 'commentHere.image',
              defaultMessage: "url(" + env + "/frontend/assets/send-comment.png)"
            }),
            backgroundSize: loadingNewComment ? '16px' : '48px',
            backgroundColor: 'transparent'
          },
          name: "comment",
          onChange: onChange,
          onKeyDown: function onKeyDown(e) {
            return addMessage(e, false);
          },
          disabled: loadingNewComment,
          value: comment,
          placeholder: (0, _reactIntl.useIntl)().formatMessage({
            id: 'commentHere',
            defaultMessage: 'Leave a comment'
          }),
          maxLength: "500"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faPaperPlane,
          className: "mr-1 d-lg-none mt-3",
          onClick: function onClick(e) {
            return addMessage(e, true);
          }
        })]
      })]
    })
  });
};

var _default = CreateComment;
exports["default"] = _default;
CreateComment.propTypes = process.env.NODE_ENV !== "production" ? {
  comment: _propTypes["default"].array,
  env: _propTypes["default"].object.isRequired,
  onSubmitComment: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  loadingNewComment: _propTypes["default"].bool.isRequired,
  thumb: _propTypes["default"].string.isRequired
} : {};
module.exports = exports.default;