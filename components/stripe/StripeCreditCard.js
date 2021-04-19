"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNotifications = require("react-notifications");

var _reactStripeElements = require("react-stripe-elements");

var _StripeCheckoutFormSca = _interopRequireDefault(require("./StripeCheckoutFormSca"));

var _jsxRuntime = require("react/jsx-runtime");

var StripeCreditCard = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(StripeCreditCard, _Component);

  function StripeCreditCard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      errors: {},
      disableButton: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (_ref) {
      var error = _ref.error;
      var errors = _this.state.errors;

      _this.setState({
        disableButton: false
      });

      if (error) {
        errors[error.code] = error.message;

        _this.setState({
          errors: errors
        });
      } else {
        _this.setState({
          errors: {}
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "submit", function (stripe, elements) {
      var cardElement = elements.getElement('cardNumber');
      var updateState = _this.props.updateState;

      _this.updateState({
        disableButton: true,
        errors: {},
        stripe: stripe,
        isLoadingPayment: true
      });

      if (stripe && cardElement) {
        (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var _yield$stripe$createP, paymentMethod, error;

          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return stripe.createPaymentMethod({
                    type: 'card',
                    card: cardElement,
                    billing_details: {
                      name: JSON.parse(localStorage.user).firstName + " " + JSON.parse(localStorage.user).lastName,
                      email: JSON.parse(localStorage.user).email
                    }
                  });

                case 2:
                  _yield$stripe$createP = _context.sent;
                  paymentMethod = _yield$stripe$createP.paymentMethod;
                  error = _yield$stripe$createP.error;

                  if (paymentMethod) {
                    _this.setState({
                      disableButton: true
                    });

                    updateState({
                      isLoadingPayment: true
                    });

                    _this.submitStripePayment(paymentMethod);
                  } else if (error) {
                    _reactNotifications.NotificationManager.error(error.message, '', 15000);

                    _this.setState({
                      disableButton: false
                    });

                    updateState({
                      isLoadingPayment: false
                    });
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      } else {
        _this.setState({
          disableButton: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "submitStripePayment", function (data) {
      var _this$props = _this.props,
          state = _this$props.state,
          postOrder = _this$props.postOrder,
          updateState = _this$props.updateState;
      var firstChecked = state.order.products.findIndex(function (o) {
        return o.extra.checked === 1;
      });
      var cartCurrency = firstChecked >= 0 ? state.order.products[firstChecked].currency.id : state.order.products[0].currency.id;

      if (data) {
        _this.updateState({
          isLoadingPayment: true
        });

        updateState({
          isLoadingPayment: true
        });

        if (data.action === 'confirm') {
          postOrder(data);
        } else {
          var stripeOrderPayment = {
            method: 'stripe',
            action: 'create',
            currency_id: cartCurrency,
            method_info: {
              id: data.id,
              card: data.card,
              livemode: data.livemode,
              object: data.object
            },
            products: [],
            receipt: state.receipt,
            invoice: {
              nif: state.nif,
              invoice_address: state.invoice_address
            }
          };
          state.order.products.map(function (campaign) {
            if (campaign.extra.checked) {
              stripeOrderPayment.products.push(campaign);
            }
          });
          postOrder(stripeOrderPayment);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "submitStripePayment", function (data) {
      var _this$props2 = _this.props,
          state = _this$props2.state,
          postOrder = _this$props2.postOrder,
          updateState = _this$props2.updateState;
      var firstChecked = state.order.products.findIndex(function (o) {
        return o.extra.checked === 1;
      });
      var cartCurrency = firstChecked >= 0 ? state.order.products[firstChecked].currency.id : state.order.products[0].currency.id;

      if (data) {
        _this.updateState({
          isLoadingPayment: true
        });

        updateState({
          isLoadingPayment: true
        });

        if (data.action === 'confirm') {
          postOrder(data);
        } else {
          var stripeOrderPayment = {
            method: 'stripe',
            action: 'create',
            currency_id: cartCurrency,
            method_info: {
              id: data.id,
              card: data.card,
              livemode: data.livemode,
              object: data.object
            },
            products: [],
            receipt: state.receipt,
            invoice: {
              nif: state.nif,
              invoice_address: state.invoice_address
            }
          };
          state.order.products.map(function (campaign) {
            if (campaign.extra.checked) {
              stripeOrderPayment.products.push(campaign);
            }
          });
          postOrder(stripeOrderPayment);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateState", function (state) {
      _this.setState(state);
    });
    return _this;
  }

  var _proto = StripeCreditCard.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var _this$props3 = this.props,
        updateState = _this$props3.updateState,
        order = _this$props3.order;
    var stripe = this.state.stripe;

    if (prevProps.order !== order) {
      if (order.code === 200) {
        if (order.data.method === 'stripe') {
          // eslint-disable-next-line camelcase
          var _order$data$response = order.data.response,
              client_secret = _order$data$response.client_secret,
              status = _order$data$response.status;

          if (status !== 'succeeded') {
            (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
              var _yield$stripe$handleC, paymentIntent, error, currencyId, data, url;

              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return stripe.handleCardAction(client_secret);

                    case 2:
                      _yield$stripe$handleC = _context2.sent;
                      paymentIntent = _yield$stripe$handleC.paymentIntent;
                      error = _yield$stripe$handleC.error;

                      if (error) {
                        _reactNotifications.NotificationManager.error(error.message, '', 15000);

                        _this2.setState({
                          disableButton: false
                        });

                        updateState({
                          isLoadingPayment: false
                        });
                      } else if (paymentIntent && paymentIntent.status !== 'succeeded') {
                        currencyId = _this2.props.currencyId;
                        data = {
                          method: 'stripe',
                          action: 'confirm',
                          currency_id: currencyId,
                          payment_id: order.data.response.merchantTransactionId,
                          method_info: {
                            payment_intent_id: paymentIntent.id,
                            payment_method_id: paymentIntent.payment_method
                          },
                          products: JSON.parse(localStorage.order).products
                        };

                        _this2.setState({
                          disableButton: true
                        });

                        updateState({
                          isLoadingPayment: true
                        });

                        _this2.submitStripePayment(data);
                      } else {
                        url = new URL(window.location.href);
                        url.searchParams.set('checkout_step', 4);
                        window.history.pushState({
                          path: url.href
                        }, '', url.href);

                        _this2.setState({
                          disableButton: false
                        });

                        updateState({
                          currentStep: 4,
                          isLoadingPayment: false,
                          checkoutId: JSON.parse(localStorage.order).products[0].id,
                          merchantTransactionId: order.data.response.merchantTransactionId
                        });
                      }

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))();
          } else {
            var orderCart = localStorage.order ? JSON.parse(localStorage.order) : {
              products: []
            };
            var ordersRemaining = [];
            var ordersPayed = [];
            orderCart.products.map(function (campaign) {
              if (!campaign.extra.checked) {
                ordersRemaining.push(campaign);
              } else {
                ordersPayed.push(campaign);
              }
            });
            localStorage.setItem('products', "{ \"products\": " + JSON.stringify(ordersPayed) + "}");
            localStorage.setItem('order', "{ \"products\": " + JSON.stringify(ordersRemaining) + "}");
            var merchantTransactionId = order.data.response.merchantTransactionId;
            var url = new URL(window.location.href);
            url.searchParams.set('checkout_step', 4);
            window.history.pushState({
              path: url.href
            }, '', url.href);
            updateState({
              currentStep: 4,
              isLoadingPayment: false,
              checkoutId: order.data.response.id,
              merchantTransactionId: merchantTransactionId
            });
          }
        }
      } else {
        this.updateState({
          disableButton: false
        });
      }
    }
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        currencyId = _this$props4.currencyId,
        env = _this$props4.env;
    var stripeKey = currencyId === 17 ? env.stripe.publishableKeyBr : env.stripe.publishableKey;
    var _this$state = this.state,
        errors = _this$state.errors,
        disableButton = _this$state.disableButton;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.StripeProvider, {
      apiKey: stripeKey,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "stripe-credit-card-checkout",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.Elements, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StripeCheckoutFormSca["default"], {
            handleChange: this.handleChange,
            submit: this.submit,
            errors: errors,
            disableButton: disableButton
          })
        })
      })
    });
  };

  return StripeCreditCard;
}(_react.Component);

var _default = StripeCreditCard;
exports["default"] = _default;
StripeCreditCard.propTypes = process.env.NODE_ENV !== "production" ? {
  currencyId: _propTypes["default"].number,
  env: _propTypes["default"].shape({
    stripe: _propTypes["default"].shape({
      publishableKey: _propTypes["default"].any,
      publishableKeyBr: _propTypes["default"].any
    })
  }),
  order: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].shape({
      method: _propTypes["default"].string,
      response: _propTypes["default"].shape({
        client_secret: _propTypes["default"].any,
        id: _propTypes["default"].any,
        merchantTransactionId: _propTypes["default"].any,
        status: _propTypes["default"].string
      })
    })
  }),
  postOrder: _propTypes["default"].func,
  state: _propTypes["default"].shape({
    invoice_address: _propTypes["default"].any,
    nif: _propTypes["default"].any,
    order: _propTypes["default"].shape({
      products: _propTypes["default"].array
    }),
    receipt: _propTypes["default"].any
  }),
  updateState: _propTypes["default"].func
} : {};
module.exports = exports.default;