"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

var ContributeRow = function ContributeRow(_ref) {
  var contribute = _ref.contribute,
      env = _ref.env,
      currency = _ref.currency;
  var contributorThumb = contribute.contributor ? contribute.contributor.thumbs.thumb : null;
  var userThumb = contribute.user && contribute.hidden === 0 ? contribute.user.thumbs.thumb : null;
  var contributorName = contribute.contributor ? contribute.contributor.name : null;
  var userName = contribute.user ? contribute.user.name : null;
  var row = {
    hidden: contribute.hidden,
    thumb: contribute.contributor ? contributorThumb : userThumb,
    name: contribute.contributor ? contributorName : userName,
    date: contribute.created_at,
    value: contribute.payment_product ? contribute.payment_product.amount : contribute.value,
    currency: contribute.payment_product ? contribute.payment_product.currency.small : currency,
    message: contribute.message
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: contribute.blink ? 'contribute-row-box blink' : 'contribute-row-box',
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "contribute-thumb",
      children: [contribute.hidden === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: env.cdn_static_url + "/frontend/assets/anonymous-user.svg",
        alt: "anonymous"
      }), contribute.hidden === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: row.thumb,
        alt: row.name
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "contribute-row-date",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
          fromNow: true,
          utc: true,
          ago: true,
          children: contribute.created_at || contribute.dateAdded
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "contribute-row-text",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [contribute.hidden === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "user",
            children: row.name
          }), contribute.hidden === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "user",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.anonymous",
              defaultMessage: "Anonymous user"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
            value: row.value,
            style: "currency",
            currency: row.currency
          }), row.message && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "message",
            children: row.message
          })]
        })
      })]
    })]
  });
};

var _default = ContributeRow;
exports["default"] = _default;
ContributeRow.propTypes = process.env.NODE_ENV !== "production" ? {
  contribute: _propTypes["default"].object,
  currency: _propTypes["default"].string,
  env: _propTypes["default"].shape({
    cdn_static_url: _propTypes["default"].string
  })
} : {};
module.exports = exports.default;