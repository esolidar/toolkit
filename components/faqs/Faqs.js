"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _loading = _interopRequireDefault(require("../loading"));

var _FaqsTabs = _interopRequireDefault(require("./FaqsTabs"));

var _FaqsItem = _interopRequireDefault(require("./FaqsItem"));

var _jsxRuntime = require("react/jsx-runtime");

var Faqs = function Faqs(_ref) {
  var lang = _ref.lang,
      tabs = _ref.tabs,
      faqs = _ref.faqs,
      type = _ref.type,
      changeType = _ref.changeType,
      changeId = _ref.changeId,
      id = _ref.id,
      isLoading = _ref.isLoading,
      env = _ref.env;
  var faqsFilterLang = [];
  var title = "title_" + lang;
  faqsFilterLang = (faqs || []).filter(function (faq) {
    return faq[title] !== null;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "faqs mb-5",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Container, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FaqsTabs["default"], {
        tabs: tabs,
        changeType: changeType,
        type: type
      }), isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        children: [faqsFilterLang.length > 0 && !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "wrapper",
          children: faqsFilterLang.map(function (faq, index) {
            var title = '';
            if (lang === 'pt') title = faq.title_pt;else if (lang === 'en') title = faq.title_en;else if (lang === 'br') title = faq.title_br;
            var cardBody = '';
            if (lang === 'pt') cardBody = faq.description_pt;else if (lang === 'en') cardBody = faq.description_en;else if (lang === 'br') cardBody = faq.description_br;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FaqsItem["default"], {
              env: env,
              changeId: changeId,
              id: id,
              faqId: faq.id,
              type: type // eslint-disable-next-line no-nested-ternary
              ,
              title: title // eslint-disable-next-line no-nested-ternary
              ,
              cardBody: cardBody
            }, index);
          })
        }), !faqsFilterLang.length && !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "wrapper",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "faqs.items.empty",
              defaultMessage: "No FAQs found"
            })
          })
        })]
      })]
    })
  });
};

Faqs.propTypes = process.env.NODE_ENV !== "production" ? {
  lang: _propTypes["default"].string.isRequired,
  tabs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string,
    text: _propTypes["default"].string
  })).isRequired,
  faqs: _propTypes["default"].array,
  type: _propTypes["default"].string,
  changeType: _propTypes["default"].func.isRequired,
  changeId: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].number,
  isLoading: _propTypes["default"].bool,
  env: _propTypes["default"].shape({
    cdn_static_url: _propTypes["default"].string
  })
} : {};
Faqs.defaultProps = {
  isLoading: true
};
var _default = Faqs;
exports["default"] = _default;
module.exports = exports.default;