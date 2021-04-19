"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _FormQuestionsGenerator = _interopRequireDefault(require("./FormQuestionsGenerator"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/FormQuestionsGenerator',
  component: _FormQuestionsGenerator["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "survey",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormQuestionsGenerator["default"], (0, _extends2["default"])({}, args))
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  locale: 'pt',
  state: {},
  questions: [{
    id: 1,
    title: 'Eu percebo como a minha função contribui para o sucesso da empresa.',
    title_en: 'I understand how my job contibutes to the success of the company.',
    form_question_id: 1,
    kpi: 'none',
    required: 1,
    status: 'A',
    type: 'value',
    updated_at: '2019-12-04 10:40:31',
    created_at: '2017-07-04 15:28:35'
  }],
  onChange: function onChange() {},
  errorFieldRequiredMessage: 'This field is required',
  NotAtAllText: 'Not at all',
  AbsolutelyText: 'Absolutely',
  errors: {}
};