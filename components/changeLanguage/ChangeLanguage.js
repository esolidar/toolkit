"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _jsxRuntime = require("react/jsx-runtime");

var ChangeLanguage = function ChangeLanguage(_ref) {
  var currentLang = _ref.currentLang,
      languages = _ref.languages,
      onChangeLang = _ref.onChangeLang;
  var renderLanguages = languages.map(function (language) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        onClick: function onClick() {
          return onChangeLang(language.name);
        },
        className: currentLang === language.name ? 'active' : '',
        children: language.name
      })
    }, language.id);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "changeLanguage",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icon["default"], {
      iconClass: "icon-globe"
    }), renderLanguages]
  });
};

var _default = ChangeLanguage;
exports["default"] = _default;
ChangeLanguage.propTypes = process.env.NODE_ENV !== "production" ? {
  currentLang: _propTypes["default"].string.isRequired,
  languages: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number,
    name: _propTypes["default"].string,
    translate: _propTypes["default"].string
  })).isRequired,
  onChangeLang: _propTypes["default"].func.isRequired
} : {};
module.exports = exports.default;