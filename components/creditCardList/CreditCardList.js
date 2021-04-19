"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStripeElements = require("react-stripe-elements");

var _reactIntl = require("react-intl");

var _reactNotifications = require("react-notifications");

var _StripeCheckoutFormSca = _interopRequireDefault(require("../stripe/StripeCheckoutFormSca"));

var _utils = require("../../utils");

var _loading = _interopRequireDefault(require("../loading"));

var _radioField = _interopRequireDefault(require("../../elements/radioField"));

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _jsxRuntime = require("react/jsx-runtime");

var CreditCardList = function CreditCardList(_ref) {
  var getStripeCreditCardlist = _ref.getStripeCreditCardlist,
      postStripeCreditCard = _ref.postStripeCreditCard,
      stripeCreditCardList = _ref.stripeCreditCardList,
      stripeCreditCard = _ref.stripeCreditCard,
      showAddBtnCreditCard = _ref.showAddBtnCreditCard,
      selectedCard = _ref.selectedCard,
      env = _ref.env,
      isErrorSelectCard = _ref.isErrorSelectCard;

  var _useState = (0, _react.useState)(null),
      isRadioCc = _useState[0],
      setIsRadioCc = _useState[1];

  var _useState2 = (0, _react.useState)([]),
      listStripeCreditCard = _useState2[0],
      setListStripeCreditCard = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      disableButton = _useState3[0],
      setDisableButton = _useState3[1];

  var _useState4 = (0, _react.useState)({}),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      isLoading = _useState5[0],
      setIsLoading = _useState5[1];

  var _useState6 = (0, _react.useState)(false),
      showCreditCardForm = _useState6[0],
      setShowCreditCardForm = _useState6[1];

  (0, _react.useEffect)(function () {
    getStripeCreditCardlist();
  }, []);
  (0, _react.useEffect)(function () {
    if (stripeCreditCardList.code === 200) {
      setListStripeCreditCard(stripeCreditCardList.data);
      setIsLoading(false);
    }
  }, [stripeCreditCardList]);
  (0, _react.useEffect)(function () {
    if ((0, _isEmpty["default"])(stripeCreditCard)) return;

    if (stripeCreditCard.code === 200) {
      setListStripeCreditCard([].concat(listStripeCreditCard, [stripeCreditCard.data]));
      setShowCreditCardForm(false);
      setDisableButton(false);
    } else {
      _reactNotifications.NotificationManager.error((0, _reactIntl.useIntl)().formatMessage({
        id: 'credit.card.error.message',
        defaultMessage: 'An error has occurred, please try again!'
      }), (0, _reactIntl.useIntl)().formatMessage({
        id: 'errror',
        defaultMessage: 'Error:'
      }), 15000);

      setDisableButton(false);
    }
  }, [stripeCreditCard]);

  var handleChange = function handleChange(_ref2) {
    var error = _ref2.error;
    setDisableButton(false);

    if (error) {
      errors[error.code] = error.message;
      setErrors(errors);
    } else {
      setErrors({});
    }
  };

  var submit = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(stripe, elements) {
      var cardElement, _yield$stripe$createT, token, error;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // eslint-disable-next-line no-unused-vars
              cardElement = elements.getElement('cardNumber');
              setDisableButton(true);
              _context.next = 4;
              return stripe.createToken();

            case 4:
              _yield$stripe$createT = _context.sent;
              token = _yield$stripe$createT.token;
              error = _yield$stripe$createT.error;

              if (token) {
                postStripeCreditCard({
                  source: token.id
                });
              } else if (error) {
                _reactNotifications.NotificationManager.error(error.message, '', 15000);

                setDisableButton(false);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handdleSelect = function handdleSelect(e) {
    setIsRadioCc(e.target.value);
    selectedCard(e.target.value);
  };

  var newArray = (0, _utils.filterUnique)(listStripeCreditCard, 'last4');

  var validDate = function validDate(year, month) {
    var today = new Date();
    var someday = new Date();
    someday.setFullYear(year, month, 1);

    if (someday < today) {
      return true;
    }

    return false;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "stripe-checkout cards-list",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "font-weight-bold",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "creditcard.info.title",
        defaultMessage: "Credit card details"
      })
    }), isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {}), !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      className: "list-group list-group-flush",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [newArray.length > 0 ? newArray.map(function (stripeCreditCard) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            className: "list-group-item",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_radioField["default"], {
              label: !validDate(stripeCreditCard.exp_year, stripeCreditCard.exp_month) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "creditcard.number",
                defaultMessage: "Credit card number: xxxx xxxx xxxx {value} - Expires: {date}",
                values: {
                  value: stripeCreditCard.last4,
                  date: stripeCreditCard.exp_month + "/" + stripeCreditCard.exp_year
                }
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "creditcard.number.expired",
                defaultMessage: "Credit card number: xxxx xxxx xxxx {value} - <span class='expired'>Expired: {date}</span>",
                values: {
                  value: stripeCreditCard.last4,
                  date: stripeCreditCard.exp_month + "/" + stripeCreditCard.exp_year
                }
              }),
              onChange: function onChange(e) {
                return handdleSelect(e);
              },
              value: stripeCreditCard.last4,
              checked: isRadioCc === stripeCreditCard.last4,
              disabled: validDate(stripeCreditCard.exp_year, stripeCreditCard.exp_month)
            })
          }, stripeCreditCard.last4);
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          className: "list-group-item",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "creditcard.no.cards",
            defaultMessage: "No credit card"
          })
        }), isErrorSelectCard && isRadioCc === null && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "hasError text-danger",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "creditcard.notSelected",
            defaultMessage: "You must select a credit card"
          })
        })]
      }), showAddBtnCreditCard && /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: "list-group-item",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-right",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "add-card",
            onClick: function onClick() {
              return setShowCreditCardForm(!showCreditCardForm);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "creditcard.add.card",
              defaultMessage: "Add new card"
            })
          })
        })
      })]
    }), showCreditCardForm && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.StripeProvider, {
      apiKey: env.publishableKey,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "stripe-credit-card-checkout",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactStripeElements.Elements, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "box mt-4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StripeCheckoutFormSca["default"], {
              handleChange: handleChange,
              submit: submit,
              errors: {},
              disableButton: disableButton,
              btnText: (0, _reactIntl.useIntl)().formatMessage({
                id: 'creditcard.save',
                defaultMessage: 'Save'
              })
            })
          })
        })
      })
    })]
  });
};

CreditCardList.propTypes = process.env.NODE_ENV !== "production" ? {
  env: _propTypes["default"].shape({
    publishableKey: _propTypes["default"].string.isRequired
  }),
  getStripeCreditCardlist: _propTypes["default"].func.isRequired,
  postStripeCreditCard: _propTypes["default"].func.isRequired,
  selectedCard: _propTypes["default"].func,
  showAddBtnCreditCard: _propTypes["default"].any,
  stripeCreditCard: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].object,
    exp_month: _propTypes["default"].string,
    exp_year: _propTypes["default"].string,
    last4: _propTypes["default"].string
  }),
  stripeCreditCardList: _propTypes["default"].shape({
    code: _propTypes["default"].number,
    data: _propTypes["default"].array
  }),
  isErrorSelectCard: _propTypes["default"].bool
} : {};
var _default = CreditCardList;
exports["default"] = _default;
module.exports = exports.default;