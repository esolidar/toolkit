"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _crowdfundingProgressBar = _interopRequireDefault(require("../crowdfundingProgressBar"));

var _crowdfundingPaymentMethod = _interopRequireDefault(require("../crowdfundingPaymentMethod"));

var _crowdfundingContributeBtn = _interopRequireDefault(require("../crowdfundingContributeBtn"));

var _jsxRuntime = require("react/jsx-runtime");

var CrowdfundingHeaderRigth = function CrowdfundingHeaderRigth(_ref) {
  var campaignTitle = _ref.campaignTitle,
      campaign = _ref.campaign,
      env = _ref.env,
      errorMsgRequired = _ref.errorMsgRequired,
      errorMsgAmount = _ref.errorMsgAmount,
      showDonate = _ref.showDonate,
      textBtnDonate = _ref.textBtnDonate;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: campaign && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: "title-campaign",
            children: campaignTitle()
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_crowdfundingProgressBar["default"], {
        contributesSum: campaign.contributes_sum,
        goal: campaign.goal
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 5,
          className: "raised-text",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
            value: campaign.contributes_sum,
            style: "currency",
            currency: campaign.currency.small
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          xs: 7,
          className: "goal-text text-right",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "goal-span",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.goal",
              defaultMessage: "Goal"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "goal-span",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
              value: campaign.goal,
              style: "currency",
              currency: campaign.currency.small
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        className: "mt-1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "total-donations-text mt-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "crowdfunding.total.number.donations",
            defaultMessage: "Number of donations"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "total-donations-value",
          children: campaign.contributes_count
        })
      }), showDonate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_crowdfundingContributeBtn["default"], {
        campaign: campaign,
        errorMsgRequired: errorMsgRequired,
        errorMsgAmount: errorMsgAmount,
        textBtnDonate: textBtnDonate
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_crowdfundingPaymentMethod["default"], {
        utrust: campaign.product.payment_method.utrust,
        paypal: campaign.product.payment_method.paypal,
        stripe: campaign.product.payment_method.stripe,
        sibsMbway: campaign.product.payment_method.sibs_mbway,
        sibsCc: campaign.product.payment_method.sibs_cc,
        cdnStaticUrl: env.cdn_static_url
      })]
    })
  });
};

CrowdfundingHeaderRigth.propTypes = process.env.NODE_ENV !== "production" ? {
  campaignTitle: _propTypes["default"].func,
  campaign: _propTypes["default"].shape({
    contributes_sum: _propTypes["default"].number,
    goal: _propTypes["default"].number,
    currency: _propTypes["default"].shape({
      small: _propTypes["default"].string
    }),
    product: _propTypes["default"].shape({
      payment_method: _propTypes["default"].shape({
        utrust: _propTypes["default"].number,
        paypal: _propTypes["default"].number,
        stripe: _propTypes["default"].number,
        sibs_mbway: _propTypes["default"].number,
        sibs_cc: _propTypes["default"].number
      })
    }),
    contributes_count: _propTypes["default"].number
  }),
  env: _propTypes["default"].shape({
    cdn_static_url: _propTypes["default"].string
  }),
  errorMsgRequired: _propTypes["default"].string,
  errorMsgAmount: _propTypes["default"].string,
  textBtnDonate: _propTypes["default"].string.isRequired,
  showDonate: _propTypes["default"].bool
} : {};
CrowdfundingHeaderRigth.defaultProps = {
  showDonate: true
};
var _default = CrowdfundingHeaderRigth;
exports["default"] = _default;
module.exports = exports.default;