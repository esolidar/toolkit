"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactBootstrap = require("react-bootstrap");

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _checkboxField = _interopRequireDefault(require("../../elements/checkboxField"));

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _jsxRuntime = require("react/jsx-runtime");

var ProjectDetailInfo = function ProjectDetailInfo(_ref) {
  var project = _ref.project,
      color = _ref.color,
      showRequestInfoView = _ref.showRequestInfoView,
      handleToggleFieldSelected = _ref.handleToggleFieldSelected,
      handleChangeFieldObs = _ref.handleChangeFieldObs,
      handleCancelRequestInfo = _ref.handleCancelRequestInfo,
      handleSubmitRequestInfo = _ref.handleSubmitRequestInfo,
      lang = _ref.lang,
      staticUrl = _ref.staticUrl;
  if ((0, _isEmpty["default"])(project) || !project) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
  var form = project.form,
      _project$requestInfoE = project.requestInfoErrors,
      requestInfoErrors = _project$requestInfoE === void 0 ? [] : _project$requestInfoE;
  var totalQuestions = form.length;
  var selectedQuestions = form.filter(function (item) {
    return item.selected === true;
  }).length;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "project-detail-info",
    children: [showRequestInfoView && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "in-review-info top",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "project.requestInfo.title",
        defaultMessage: "Select the fields you want more information about and then submit the request"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "box",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: form && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: form.map(function (question, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Question, {
              question: question,
              index: index,
              color: color,
              showRequestInfoView: showRequestInfoView,
              handleToggleFieldSelected: handleToggleFieldSelected,
              handleChangeFieldObs: handleChangeFieldObs,
              ods: question.type === 'ods' ? {
                images: project.ods,
                lang: lang
              } : null,
              staticUrl: staticUrl,
              error: requestInfoErrors.includes(index)
            }, question.position);
          })
        })
      })
    }), showRequestInfoView && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "in-review-info bottom",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mr-auto",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "project.requestInfo.count",
          defaultMessage: "Selected fields: {selectedQuestions} of {totalQuestions}",
          values: {
            selectedQuestions: selectedQuestions,
            totalQuestions: totalQuestions
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        type: "button",
        extraClass: "dark mr-2",
        onClick: handleCancelRequestInfo,
        text: (0, _reactIntl.useIntl)().formatMessage({
          id: 'cancel',
          defaultMessage: 'Cancel'
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        type: "button",
        extraClass: "dark-full",
        onClick: handleSubmitRequestInfo,
        text: (0, _reactIntl.useIntl)().formatMessage({
          id: 'submit',
          defaultMessage: 'Submit'
        }),
        disabled: selectedQuestions === 0 || requestInfoErrors.length > 0
      })]
    })]
  });
};

ProjectDetailInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  project: _propTypes["default"].object.isRequired,
  color: _propTypes["default"].string,
  showRequestInfoView: _propTypes["default"].bool,
  handleToggleFieldSelected: _propTypes["default"].func,
  handleChangeFieldObs: _propTypes["default"].func,
  handleCancelRequestInfo: _propTypes["default"].func,
  handleSubmitRequestInfo: _propTypes["default"].func,
  lang: _propTypes["default"].string.isRequired,
  staticUrl: _propTypes["default"].string
} : {};

var Question = function Question(_ref2) {
  var question = _ref2.question,
      index = _ref2.index,
      color = _ref2.color,
      showRequestInfoView = _ref2.showRequestInfoView,
      handleToggleFieldSelected = _ref2.handleToggleFieldSelected,
      handleChangeFieldObs = _ref2.handleChangeFieldObs,
      ods = _ref2.ods,
      staticUrl = _ref2.staticUrl,
      error = _ref2.error;
  var type = question.type,
      name = question.name,
      selected = question.selected,
      isPrivate = question.isPrivate,
      checked = question.checked,
      obs = question.obs,
      reply = question.reply;
  if (type === 'dropdown' || type === 'upload-images') return null;

  var PrivateIcon = function PrivateIcon() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faLock,
      className: "ml-2 text-secondary",
      style: {
        width: '12px'
      }
    });
  };

  var questionGroupClassName = ['question-group'];
  if (showRequestInfoView && !['title', 'paragraph'].includes(type)) questionGroupClassName.push('in-review');
  if (selected) questionGroupClassName.push('selected');
  if (selected && error) questionGroupClassName.push('error');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: questionGroupClassName.join(' '),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "answer",
      children: [type === 'title' && /*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
        style: {
          color: color
        },
        children: [name, isPrivate && /*#__PURE__*/(0, _jsxRuntime.jsx)(PrivateIcon, {})]
      }), type === 'paragraph' && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [name, isPrivate && /*#__PURE__*/(0, _jsxRuntime.jsx)(PrivateIcon, {})]
      }), type === 'checkbox' && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
          style: {
            color: color
          },
          children: [name, isPrivate && /*#__PURE__*/(0, _jsxRuntime.jsx)(PrivateIcon, {})]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          children: checked.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              children: item
            }, index);
          })
        })]
      }), type === 'ods' && showRequestInfoView && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          style: {
            color: color
          },
          children: name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: ods.images.map(function (o) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: staticUrl + "/frontend/assets/ods/" + ods.lang + "/" + o.tag_name + ".png",
              alt: o.tag_name,
              style: {
                width: '80px'
              }
            }, o.id);
          })
        })]
      }), type !== 'title' && type !== 'paragraph' && type !== 'ods' && type !== 'dropdown' && type !== 'upload-images' && reply && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
          style: {
            color: color
          },
          children: [name, isPrivate && /*#__PURE__*/(0, _jsxRuntime.jsx)(PrivateIcon, {})]
        }), reply.split('\n').map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: item
          }, index);
        })]
      }), showRequestInfoView && !['title', 'paragraph'].includes(type) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
        onChange: function onChange(e) {
          return handleToggleFieldSelected(e, index);
        },
        name: name + "-selected",
        checked: selected
      })]
    }), selected && /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
      label: (0, _reactIntl.useIntl)().formatMessage({
        id: 'project.comments',
        defaultMessage: 'Comments'
      }),
      className: "description",
      placeholder: (0, _reactIntl.useIntl)().formatMessage({
        id: 'project.tickets.requestInfo.comments',
        defaultMessage: 'Write something...'
      }),
      onChange: function onChange(e) {
        return handleChangeFieldObs(e, index);
      },
      field: name + "-description",
      resize: true,
      value: obs
    }), selected && error && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mt-1 text-danger",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "form.required",
        defaultMessage: "This field is required."
      })
    })]
  }, name);
};

Question.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].string,
  index: _propTypes["default"].number,
  handleToggleFieldSelected: _propTypes["default"].func,
  handleChangeFieldObs: _propTypes["default"].func,
  question: _propTypes["default"].shape({
    obs: _propTypes["default"].string,
    checked: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
    isPrivate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
    name: _propTypes["default"].string,
    reply: _propTypes["default"].string,
    selected: _propTypes["default"].bool,
    type: _propTypes["default"].string
  }),
  showRequestInfoView: _propTypes["default"].bool,
  ods: _propTypes["default"].shape({
    images: _propTypes["default"].array,
    lang: _propTypes["default"].string
  }),
  staticUrl: _propTypes["default"].string,
  error: _propTypes["default"].bool
} : {};
var _default = ProjectDetailInfo;
exports["default"] = _default;
module.exports = exports.default;