"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _pt = _interopRequireDefault(require("date-fns/locale/pt"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/label-has-associated-control */
(0, _reactDatepicker.registerLocale)('pt', _pt["default"]);
(0, _reactDatepicker.registerLocale)('en', _enUS["default"]);
(0, _reactDatepicker.registerLocale)('br', _ptBR["default"]);

var DatePicker = function DatePicker(_ref) {
  var label = _ref.label,
      locale = _ref.locale,
      selected = _ref.selected,
      selectsStart = _ref.selectsStart,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      showTimeSelect = _ref.showTimeSelect,
      onChange = _ref.onChange,
      className = _ref.className,
      placeholderText = _ref.placeholderText,
      timeCaption = _ref.timeCaption,
      dateFormat = _ref.dateFormat,
      errors = _ref.errors;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('form-group', {
      'has-error': !!errors
    }),
    children: [!!label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: "control-label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDatepicker["default"], {
      locale: locale,
      selected: selected,
      selectsStart: selectsStart,
      startDate: startDate,
      endDate: endDate,
      showTimeSelect: showTimeSelect,
      onChange: onChange,
      className: className,
      placeholderText: placeholderText,
      timeCaption: timeCaption,
      dateFormat: dateFormat
    }), !!errors && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "error-block",
      children: errors
    })]
  });
};

DatePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes["default"].string,
  locale: _propTypes["default"].oneOf(['pt', 'en', 'br']).isRequired,
  selected: _propTypes["default"].instanceOf(Date),
  selectsStart: _propTypes["default"].bool,
  startDate: _propTypes["default"].instanceOf(Date),
  endDate: _propTypes["default"].instanceOf(Date),
  showTimeSelect: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  placeholderText: _propTypes["default"].string,
  timeCaption: _propTypes["default"].string,
  dateFormat: _propTypes["default"].string,
  errors: _propTypes["default"].string
} : {};
DatePicker.defaultProps = {
  selectsStart: true,
  showTimeSelect: true,
  placeholderText: 'DD-MM-YYYY',
  timeCaption: 'hour',
  dateFormat: 'd-MM-yyyy h:mm aa'
};
var _default = DatePicker;
exports["default"] = _default;
module.exports = exports.default;