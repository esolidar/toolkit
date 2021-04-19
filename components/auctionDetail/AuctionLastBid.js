"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _button = _interopRequireDefault(require("../../elements/button"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _jsxRuntime = require("react/jsx-runtime");

var AuctionLastBid = function AuctionLastBid(_ref) {
  var auction = _ref.auction,
      isEnded = _ref.isEnded,
      isCommingSoon = _ref.isCommingSoon,
      handleClickBid = _ref.handleClickBid,
      error = _ref.error,
      minValue = _ref.minValue,
      inputBidValue = _ref.inputBidValue,
      valueBidTextField = _ref.valueBidTextField,
      primaryColor = _ref.primaryColor;
  var lastBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
    sm: 12,
    lg: 10,
    className: "header-bids mx-lg-auto",
    children: !isEnded && !isCommingSoon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        className: "box box-top sticky-top mb-5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "d-none d-sm-block",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "control-label title-last-bid mb-3",
                id: "auction-last-bid-label-" + auction.id,
                "data-testid": "title-last-bid",
                style: {
                  color: primaryColor
                },
                children: auction.last_bid ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "auction.detail.lastbid",
                  defaultMessage: "Last Bid"
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "auction.detail.startbid",
                  defaultMessage: "Start Bid"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              className: "txt-price-t",
              id: "auction-last-bid-value-" + auction.id,
              "data-testid": "value-last-bid",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
                value: lastBid,
                style: "currency",
                currency: auction.currency.small
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                className: "auction-content-label text-top d-none d-sm-block",
                "data-testid": "new-bid",
                style: {
                  color: primaryColor
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "auction.detail.newBid",
                  defaultMessage: "New Bid"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                className: error && 'has-error',
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                  dataTestId: "bid-input",
                  className: "bid-input mb-0",
                  type: "text",
                  onChange: valueBidTextField,
                  error: error,
                  value: inputBidValue,
                  placeholder: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'auction.textfield.minValue',
                    defaultMessage: 'Min. Value: {value}'
                  }, {
                    value: minValue
                  }),
                  field: "forCompanies"
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              className: "mr-sm-3",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                dataTestId: "button-bid",
                extraClass: "success-full mt-sm-4",
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'auction.button.bid',
                  defaultMessage: 'Bid'
                }),
                onClick: function onClick() {
                  return handleClickBid(inputBidValue);
                }
              })
            })]
          })]
        })
      })
    })
  });
};

AuctionLastBid.propTypes = process.env.NODE_ENV !== "production" ? {
  auction: _propTypes["default"].shape({
    id: _propTypes["default"].number,
    bid_start: _propTypes["default"].number,
    last_bid: _propTypes["default"].shape({
      value: _propTypes["default"].number
    }),
    currency: _propTypes["default"].object,
    blink: _propTypes["default"].bool
  }),
  isEnded: _propTypes["default"].bool,
  isCommingSoon: _propTypes["default"].bool,
  handleClickBid: _propTypes["default"].func,
  error: _propTypes["default"].string,
  minValue: _propTypes["default"].number,
  inputBidValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  valueBidTextField: _propTypes["default"].func,
  primaryColor: _propTypes["default"].string
} : {};
var _default = AuctionLastBid;
exports["default"] = _default;
module.exports = exports.default;