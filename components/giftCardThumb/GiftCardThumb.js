"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jsxRuntime = require("react/jsx-runtime");

var GiftCardThumb = function GiftCardThumb(_ref) {
  var giftCard = _ref.giftCard,
      giftCardClick = _ref.giftCardClick,
      expireText = _ref.expireText,
      usedAtText = _ref.usedAtText,
      usedText = _ref.usedText,
      noText = _ref.noText,
      yesText = _ref.yesText,
      amountText = _ref.amountText,
      giftCardExpireAt = _ref.giftCardExpireAt,
      giftCardAmountValue = _ref.giftCardAmountValue;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: "#",
    className: "giftCardButton",
    onClick: giftCardClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "gift-card-thumb",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "header unused"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 6,
        className: "date-label",
        children: [giftCard.giftcard_institution.length === 0 && expireText, giftCard.giftcard_institution.length > 0 && usedAtText]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 6,
        className: "date text-right",
        children: giftCardExpireAt
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "giftcard-title",
        children: giftCard.name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "giftcard-footer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 6,
            className: "used-label",
            children: usedText
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
            sm: 6,
            className: "text-right used",
            children: [giftCard.giftcard_institution.length === 0 && noText, giftCard.giftcard_institution.length > 0 && yesText]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 6,
            className: "used-label",
            children: amountText
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 6,
            className: "text-right amount-value",
            children: giftCardAmountValue
          })]
        })
      })]
    })
  });
};

var _default = GiftCardThumb;
exports["default"] = _default;
GiftCardThumb.propTypes = process.env.NODE_ENV !== "production" ? {
  giftCard: _propTypes["default"].object.isRequired,
  giftCardExpireAt: _propTypes["default"].string.isRequired,
  giftCardAmountValue: _propTypes["default"].string.isRequired,
  giftCardClick: _propTypes["default"].func,
  expireText: _propTypes["default"].string,
  usedAtText: _propTypes["default"].string,
  usedText: _propTypes["default"].string,
  noText: _propTypes["default"].string,
  yesText: _propTypes["default"].string,
  amountText: _propTypes["default"].string
} : {};
module.exports = exports.default;