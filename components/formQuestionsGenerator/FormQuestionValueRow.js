"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var FormQuestionValueRow = function FormQuestionValueRow(_ref) {
  var question = _ref.question,
      onChange = _ref.onChange,
      NotAtAllText = _ref.NotAtAllText,
      AbsolutelyText = _ref.AbsolutelyText;
  var questionInputRadioValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var listInputRadioValueOptions = questionInputRadioValues.map(function (value) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: "button-label",
      htmlFor: question.id + "_" + question.form_question_id + "_" + value,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: question.id + "_" + question.form_question_id + "_" + value,
        className: "hidden",
        type: "radio",
        name: "form_question_" + question.form_question_id,
        value: value,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: value
      })]
    }, value);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "com-sm-12",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "survey-value-label-1",
      children: NotAtAllText
    }), listInputRadioValueOptions, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "survey-value-label-2",
      children: AbsolutelyText
    })]
  });
};

FormQuestionValueRow.propTypes = process.env.NODE_ENV !== "production" ? {
  question: _propTypes["default"].object.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  NotAtAllText: _propTypes["default"].string.isRequired,
  AbsolutelyText: _propTypes["default"].string.isRequired
} : {};
var _default = FormQuestionValueRow;
exports["default"] = _default;
module.exports = exports.default;