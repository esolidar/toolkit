"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _loading = _interopRequireDefault(require("../../loading"));

var _button = _interopRequireDefault(require("../../../elements/button"));

var _InvoicingData = _interopRequireDefault(require("../invoicing/InvoicingData"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable react/destructuring-assignment */
var Step2 = function Step2(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [props.state.isLoadingPayment && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loading-payment",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {
        message: (0, _reactIntl.useIntl)().formatMessage({
          id: 'payment.loader.wait',
          defaultMessage: 'Please wait.'
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
      sm: 12,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "checkout.invoicing.title",
          defaultMessage: "Invoicing information"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        className: "box",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InvoicingData["default"], {
          onChangCheckBoxInvoicing: props.onChangCheckBoxInvoicing,
          onChangCheckBox: props.onChangCheckBox,
          onChange: props.onChange,
          state: props.state
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        className: "box box-mobile-padding",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 6,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "dark btn-prev-step",
                onClick: function onClick() {
                  return props.nextStep(0);
                },
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'crowdfunding.donation.checkout.prev',
                  defaultMessage: 'Prev'
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 6,
              className: "text-right",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "success-full btn-next-step",
                onClick: function onClick() {
                  return props.nextStep(2);
                },
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'crowdfunding.donation.checkout.next',
                  defaultMessage: 'Next'
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

Step2.propTypes = process.env.NODE_ENV !== "production" ? {
  onChangCheckBoxInvoicing: _propTypes["default"].func,
  onChangCheckBox: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  nextStep: _propTypes["default"].func,
  state: _propTypes["default"].shape({
    isLoadingPayment: _propTypes["default"].bool
  })
} : {};
var _default = Step2;
exports["default"] = _default;
module.exports = exports.default;