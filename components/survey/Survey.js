"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _formQuestionsGenerator = _interopRequireDefault(require("../formQuestionsGenerator"));

var _jsxRuntime = require("react/jsx-runtime");

var Survey = function Survey(_ref) {
  var status = _ref.status,
      formTitleText = _ref.formTitleText,
      formSummaryText = _ref.formSummaryText,
      onSubmit = _ref.onSubmit,
      locale = _ref.locale,
      QuestionsGeneratorState = _ref.QuestionsGeneratorState,
      QuestionsGeneratorQuestions = _ref.QuestionsGeneratorQuestions,
      QuestionsGeneratorOnChange = _ref.QuestionsGeneratorOnChange,
      QuestionsGeneratorErrors = _ref.QuestionsGeneratorErrors,
      SubmitSurveyText = _ref.SubmitSurveyText,
      errorFieldRequiredMessage = _ref.errorFieldRequiredMessage,
      NotAtAllText = _ref.NotAtAllText,
      AbsolutelyText = _ref.AbsolutelyText,
      isLoading = _ref.isLoading,
      disabledText = _ref.disabledText;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
    sm: 9,
    className: "survey",
    children: [status === 'A' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
      sm: 12,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box survey-form-title",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: formTitleText
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: formSummaryText
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content-form",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          id: "form-survey",
          onSubmit: onSubmit,
          method: "post",
          encType: "application/x-www-form-urlencoded",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formQuestionsGenerator["default"], {
            locale: locale,
            state: QuestionsGeneratorState,
            questions: QuestionsGeneratorQuestions,
            onChange: QuestionsGeneratorOnChange,
            errors: QuestionsGeneratorErrors,
            errorFieldRequiredMessage: errorFieldRequiredMessage,
            NotAtAllText: NotAtAllText,
            AbsolutelyText: AbsolutelyText
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-right",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "submit",
              className: "btn btn-submit-servey",
              disabled: isLoading,
              children: SubmitSurveyText
            })
          })]
        })
      })]
    }), status === 'D' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "survey-disabled",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "box",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-center",
          children: disabledText
        })
      })
    })]
  });
};

Survey.propTypes = process.env.NODE_ENV !== "production" ? {
  status: _propTypes["default"].string.isRequired,
  formTitleText: _propTypes["default"].string,
  formSummaryText: _propTypes["default"].string,
  onSubmit: _propTypes["default"].func.isRequired,
  locale: _propTypes["default"].string.isRequired,
  QuestionsGeneratorState: _propTypes["default"].object.isRequired,
  QuestionsGeneratorQuestions: _propTypes["default"].array.isRequired,
  QuestionsGeneratorOnChange: _propTypes["default"].func.isRequired,
  QuestionsGeneratorErrors: _propTypes["default"].object,
  SubmitSurveyText: _propTypes["default"].string.isRequired,
  errorFieldRequiredMessage: _propTypes["default"].string.isRequired,
  NotAtAllText: _propTypes["default"].string.isRequired,
  AbsolutelyText: _propTypes["default"].string.isRequired,
  isLoading: _propTypes["default"].bool.isRequired,
  disabledText: _propTypes["default"].string.isRequired
} : {};
var _default = Survey;
exports["default"] = _default;
module.exports = exports.default;