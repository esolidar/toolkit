"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _jsxRuntime = require("react/jsx-runtime");

var ConvertToMyTimezone = function ConvertToMyTimezone(_ref) {
  var format = _ref.format,
      date = _ref.date,
      locale = _ref.locale,
      timezone = _ref.timezone;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
    utc: true,
    tz: timezone,
    format: format,
    locale: locale,
    children: date
  });
};

ConvertToMyTimezone.propTypes = process.env.NODE_ENV !== "production" ? {
  format: _propTypes["default"].string,
  date: _propTypes["default"].string.isRequired,
  locale: _propTypes["default"].string,
  timezone: _propTypes["default"].string
} : {};
ConvertToMyTimezone.defaultProps = {
  format: 'llll',
  locale: typeof window !== 'undefined' ? navigator.language : 'en',
  timezone: _momentTimezone["default"].tz.guess()
};
var _default = ConvertToMyTimezone;
exports["default"] = _default;
module.exports = exports.default;