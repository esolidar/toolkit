"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _textareaField = _interopRequireDefault(require("../../../elements/textareaField"));

var _textField = _interopRequireDefault(require("../../../elements/textField"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable react/destructuring-assignment */

/* eslint-disable camelcase */
var InvoicingData = function InvoicingData(props) {
  var _props$state = props.state,
      errors = _props$state.errors,
      receipt = _props$state.receipt,
      nif = _props$state.nif,
      invoice_address = _props$state.invoice_address,
      agree = _props$state.agree;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
    className: "cart-item-invoice",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "checkbox-inline",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form-group",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            htmlFor: "receipt",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "checkout.receipt",
              defaultMessage: "Do you want a donation receipt?"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "checkbox",
              name: "receipt",
              id: "receipt",
              value: receipt,
              onChange: props.onChangCheckBoxInvoicing,
              checked: receipt === 1
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "checkbox"
            })]
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
        label: (0, _reactIntl.useIntl)().formatMessage({
          id: 'user.nif',
          defaultMessage: 'VAT'
        }),
        onChange: props.onChange,
        error: errors.nif,
        value: nif,
        field: "nif",
        disabled: receipt !== 1
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
        label: (0, _reactIntl.useIntl)().formatMessage({
          id: 'checkout.invoice_address',
          defaultMessage: 'Invoicing address'
        }),
        onChange: props.onChange,
        error: errors.invoice_address,
        value: invoice_address,
        field: "invoice_address",
        disabled: receipt !== 1
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 12,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "checkbox-inline",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            htmlFor: "agree",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.donation.modal.agree.text",
              defaultMessage: "I have read and agree with the"
            }), "\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "/terms",
              target: "_blank",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "crowdfunding.donation.modal.agree.href",
                defaultMessage: "terms and conditions"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "checkbox",
              name: "agree",
              id: "agree",
              value: agree,
              onChange: props.onChangCheckBoxInvoicing,
              checked: agree === 1
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "checkbox"
            })]
          }), errors.agree && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "has-error",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "help-block",
              children: errors.agree
            })
          })]
        })
      })
    })]
  });
};

InvoicingData.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes["default"].func,
  onChangCheckBoxInvoicing: _propTypes["default"].func,
  state: _propTypes["default"].object
} : {};
var _default = InvoicingData;
exports["default"] = _default;
module.exports = exports.default;