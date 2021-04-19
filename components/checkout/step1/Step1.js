"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../../../elements/button"));

var _CrowdfundingItem = _interopRequireDefault(require("../products/CrowdfundingItem"));

var _jsxRuntime = require("react/jsx-runtime");

var Step1 = function Step1(props) {
  var env = props.env,
      state = props.state,
      nextStep = props.nextStep,
      onChangeMessage = props.onChangeMessage,
      onChangCheckBox = props.onChangCheckBox,
      removeCartItem = props.removeCartItem,
      onAddToCheckout = props.onAddToCheckout;
  var cartItems = state.order.products;
  if (typeof window === 'undefined' && cartItems.length === 0) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});

  var renderCartItems = function renderCartItems() {
    if (cartItems.length > 0) {
      return cartItems.map(function (item, indx) {
        if (item.type === 'crowdfunding') {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [indx === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              children: "Crowdfunding"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CrowdfundingItem["default"], {
                item: item,
                indx: indx,
                onChangeMessage: onChangeMessage,
                onChangCheckBox: onChangCheckBox,
                removeCartItem: removeCartItem,
                onAddToCheckout: onAddToCheckout,
                env: env
              })
            })]
          }, item.id + "_" + indx);
        }
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "no-items",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        children: (0, _reactIntl.useIntl)().formatMessage({
          id: 'checkout.noitems',
          defaultMessage: 'There are no items to checkout'
        })
      })
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "checkout",
    children: [renderCartItems(), cartItems.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "text-right",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "success-full next-step",
            onClick: function onClick() {
              return nextStep(1);
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'crowdfunding.donation.checkout.next',
              defaultMessage: 'Next'
            })
          })
        })
      })
    }), cartItems.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "text-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            className: "btn-next-step",
            href: "/",
            children: (0, _reactIntl.useIntl)().formatMessage({
              id: 'crowdfunding.donation.checkout.goHome',
              defaultMessage: 'Go home'
            })
          })
        })
      })
    })]
  });
};

Step1.propTypes = process.env.NODE_ENV !== "production" ? {
  state: _propTypes["default"].shape({
    order: _propTypes["default"].shape({
      currency: _propTypes["default"].object,
      products: _propTypes["default"].array
    }),
    errors: _propTypes["default"].object
  }),
  env: _propTypes["default"].object.isRequired,
  onChangeMessage: _propTypes["default"].func.isRequired,
  onChangCheckBox: _propTypes["default"].func.isRequired,
  removeCartItem: _propTypes["default"].func.isRequired,
  onAddToCheckout: _propTypes["default"].func.isRequired,
  nextStep: _propTypes["default"].func.isRequired
} : {};
var _default = Step1;
exports["default"] = _default;
module.exports = exports.default;