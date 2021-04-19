"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

var CrowdfundingPaymentMethod = function CrowdfundingPaymentMethod(_ref) {
  var utrust = _ref.utrust,
      paypal = _ref.paypal,
      stripe = _ref.stripe,
      sibsMbway = _ref.sibsMbway,
      sibsCc = _ref.sibsCc,
      cdnStaticUrl = _ref.cdnStaticUrl;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      className: "mt-1",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "share-label",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "control-label",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "payment.methods",
            defaultMessage: "Payment methods"
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 12,
        children: [utrust === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: cdnStaticUrl + "/frontend/icons/ic-pm-utrust.png",
          style: {
            height: '20px',
            marginRight: '15px'
          },
          alt: "utrust"
        }), paypal === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: cdnStaticUrl + "/frontend/icons/ic-pm-paypal.png",
          style: {
            height: '20px',
            marginRight: '15px'
          },
          alt: "Paypal"
        }), stripe === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: cdnStaticUrl + "/frontend/icons/ic-pm-creditcard.png",
          style: {
            height: '20px',
            marginRight: '15px'
          },
          alt: "Credit Card"
        }), sibsMbway === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: cdnStaticUrl + "/frontend/icons/ic-pm-mbway.png",
          style: {
            height: '20px',
            marginRight: '15px'
          },
          alt: "MBway"
        }), sibsCc === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: cdnStaticUrl + "/frontend/icons/ic-pm-creditcard.png",
          style: {
            height: '20px',
            marginRight: '15px'
          },
          alt: "Credit Card"
        })]
      })
    })]
  });
};

CrowdfundingPaymentMethod.propTypes = process.env.NODE_ENV !== "production" ? {
  utrust: _propTypes["default"].number,
  paypal: _propTypes["default"].number,
  stripe: _propTypes["default"].number,
  sibsMbway: _propTypes["default"].number,
  sibsCc: _propTypes["default"].number,
  cdnStaticUrl: _propTypes["default"].string
} : {};
var _default = CrowdfundingPaymentMethod;
exports["default"] = _default;
module.exports = exports.default;