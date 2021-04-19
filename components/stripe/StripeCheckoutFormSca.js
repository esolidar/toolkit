"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _reactStripeElements = require("react-stripe-elements");

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/label-has-associated-control */
var createOptions = function createOptions() {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#455c75',
        letterSpacing: '0.025em',
        padding: '0 10px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#FF494C'
      }
    }
  };
};

var StripeCheckoutFormSca = function StripeCheckoutFormSca(_ref) {
  var errors = _ref.errors,
      handleChange = _ref.handleChange,
      submit = _ref.submit,
      stripe = _ref.stripe,
      elements = _ref.elements,
      disableButton = _ref.disableButton,
      btnText = _ref.btnText;

  var text = function text() {
    return btnText || /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
      id: "checkout.payment.pay",
      defaultMessage: "Pay"
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
    className: "checkout",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        className: !(0, _isEmpty["default"])(errors) ? 'error' : '',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "checkout.payment.cardnumber",
          defaultMessage: "Card number"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.CardNumberElement, (0, _extends2["default"])({}, createOptions(), {
          onChange: handleChange
        }))]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 6,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        className: !(0, _isEmpty["default"])(errors) ? 'error' : '',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "checkout.payment.expiration",
          defaultMessage: "Expiration date"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.CardExpiryElement, (0, _extends2["default"])({}, createOptions(), {
          onChange: handleChange
        }))]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 6,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        className: !(0, _isEmpty["default"])(errors) ? 'error' : '',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "checkout.payment.cvc",
          defaultMessage: "CVC"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.CardCVCElement, (0, _extends2["default"])({}, createOptions(), {
          onChange: handleChange
        }))]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      className: "text-right",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        disabled: disableButton,
        extraClass: "success-full",
        onClick: function onClick() {
          return submit(stripe, elements);
        },
        text: text()
      })
    })]
  });
};

StripeCheckoutFormSca.propTypes = process.env.NODE_ENV !== "production" ? {
  elements: _propTypes["default"].any,
  errors: _propTypes["default"].any,
  handleChange: _propTypes["default"].any,
  stripe: _propTypes["default"].any,
  submit: _propTypes["default"].func,
  disableButton: _propTypes["default"].bool,
  btnText: _propTypes["default"].string
} : {};

var _default = (0, _reactStripeElements.injectStripe)(StripeCheckoutFormSca);

exports["default"] = _default;
module.exports = exports.default;