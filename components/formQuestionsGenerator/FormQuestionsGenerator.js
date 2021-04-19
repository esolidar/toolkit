"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _FormQuestionValueRow = _interopRequireDefault(require("./FormQuestionValueRow"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable no-prototype-builtins */
var FormQuestionsGenerator = function FormQuestionsGenerator(_ref) {
  var locale = _ref.locale,
      state = _ref.state,
      questions = _ref.questions,
      onChange = _ref.onChange,
      errors = _ref.errors,
      errorFieldRequiredMessage = _ref.errorFieldRequiredMessage,
      NotAtAllText = _ref.NotAtAllText,
      AbsolutelyText = _ref.AbsolutelyText;
  var questionsList = questions.map(function (question) {
    var inputValue = state["form_question_" + question.form_question_id] ? state["form_question_" + question.form_question_id] : '';
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group box",
      children: [question.type === 'value' && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "radio-wrap text-left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          children: locale !== 'en' ? question.title : question.title_en
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormQuestionValueRow["default"], {
          question: question,
          onChange: onChange,
          value: state[inputValue],
          NotAtAllText: NotAtAllText,
          AbsolutelyText: AbsolutelyText
        })]
      }), question.type === 'input' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
        label: locale !== 'en' ? question.title : question.title_en,
        onChange: onChange,
        error: errors.input,
        field: "form_question_" + question.form_question_id,
        fieldTranslate: "",
        value: inputValue
      }), question.type === 'textarea' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
        label: locale !== 'en' ? question.title : question.title_en,
        onChange: onChange,
        error: errors.textarea,
        field: "form_question_" + question.form_question_id,
        fieldTranslate: "",
        value: inputValue
      }), errors.hasOwnProperty("form_question_" + question.form_question_id) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "error",
        children: errorFieldRequiredMessage
      })]
    }, question.id);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: questionsList
  });
};

FormQuestionsGenerator.propTypes = process.env.NODE_ENV !== "production" ? {
  locale: _propTypes["default"].string.isRequired,
  state: _propTypes["default"].object.isRequired,
  questions: _propTypes["default"].array.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  errorFieldRequiredMessage: _propTypes["default"].string.isRequired,
  NotAtAllText: _propTypes["default"].string.isRequired,
  AbsolutelyText: _propTypes["default"].string.isRequired,
  errors: _propTypes["default"].object
} : {};
var _default = FormQuestionsGenerator;
exports["default"] = _default;
module.exports = exports.default;