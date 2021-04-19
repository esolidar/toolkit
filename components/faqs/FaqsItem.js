"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var FaqItem = function FaqItem(_ref) {
  var env = _ref.env,
      id = _ref.id,
      faqId = _ref.faqId,
      changeId = _ref.changeId,
      type = _ref.type,
      title = _ref.title,
      cardBody = _ref.cardBody;

  var _useState = (0, _react.useState)(faqId.toString() === id),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var handleClick = function handleClick(id) {
    setIsOpen(!isOpen);
    changeId(type, id);
  };

  var renderHtmlFaqItem = function renderHtmlFaqItem() {
    return {
      __html: cardBody
    };
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "accordion-wrapper",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "panel",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "accordion-title " + (isOpen ? 'open' : ''),
        onClick: function onClick() {
          return handleClick(faqId);
        },
        "aria-hidden": "true",
        children: [title, /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: env.cdn_static_url + "/frontend/icons/ic-arrow-down-blue.svg",
          className: "arrow",
          alt: "Arrow"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dot-line"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "accordion-item " + (isOpen ? '' : 'collapsed'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "accordion-content",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            dangerouslySetInnerHTML: renderHtmlFaqItem()
          })
        })
      })]
    })
  });
};

FaqItem.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes["default"].string.isRequired,
  cardBody: _propTypes["default"].string,
  env: _propTypes["default"].shape({
    cdn_static_url: _propTypes["default"].string
  }),
  id: _propTypes["default"].number,
  faqId: _propTypes["default"].number,
  changeId: _propTypes["default"].func,
  type: _propTypes["default"].string
} : {};
var _default = FaqItem;
exports["default"] = _default;
module.exports = exports.default;