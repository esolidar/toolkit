"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _index = require("../../utils/index");

var _button = _interopRequireDefault(require("../../elements/button"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _jsxRuntime = require("react/jsx-runtime");

var AuctionDetailRigth = function AuctionDetailRigth(_ref) {
  var auctionTitle = _ref.auctionTitle,
      auction = _ref.auction,
      isEnded = _ref.isEnded,
      isCommingSoon = _ref.isCommingSoon,
      handleClickBid = _ref.handleClickBid,
      error = _ref.error,
      minValue = _ref.minValue,
      showModalSubscribe = _ref.showModalSubscribe,
      user = _ref.user,
      inputBidValue = _ref.inputBidValue,
      valueBidTextField = _ref.valueBidTextField,
      primaryColor = _ref.primaryColor,
      inputRef = _ref.inputRef,
      env = _ref.env,
      domainUrl = _ref.domainUrl,
      locale = _ref.locale;
  var valueBid = auction.last_bid ? auction.last_bid.value : auction.bid_start;
  var isSameCurrency = user ? auction.currency.small === user.currency.small : true;
  var supported = {};

  if (auction.recipient && auction.recipient.institution) {
    supported.title = auction.recipient.institution.name;
    supported.image = auction.recipient.institution.thumbs.thumb;
    supported.id = auction.recipient.institution.id;
    supported.link = "" + domainUrl + locale + "/npo/detail/" + supported.id + "-" + (0, _index.slugify)(auction.recipient.institution.name);
  } else if (auction.brand) {
    supported.title = auction.brand.name;
    supported.image = auction.brand.logo_thumbs.thumb;
    supported.id = auction.brand.id;
    supported.link = "" + domainUrl + locale + "/" + (0, _index.slugify)(auction.brand.name);
  } else if (auction.project) {
    supported.title = auction.project.title;
    supported.image = auction.project.images ? env.cdn_uploads_url + "/" + auction.project.images[0].image : env.cdn_static_url + "/frontend/assets/no-image.jpg";
    supported.id = auction.project.id;
    supported.link = "/" + locale + "/projects/detail/" + supported.id + "-" + (0, _index.slugify)(auction.project.title);
  } else {
    supported = null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 5,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 12,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              className: "auction-title d-none d-sm-block",
              "data-testid": "auction-title",
              children: auctionTitle
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          className: "mt-5",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "control-label title-last-bid mb-2",
              id: "last-bid-label-" + auction.id,
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
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 12,
            className: "txt-price-t",
            id: "last-bid-value-" + auction.id,
            "data-testid": "value-last-bid",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
              value: valueBid,
              style: "currency",
              currency: auction.currency.small
            })
          })
        }), !isSameCurrency && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
            sm: 12,
            className: "txt-bid-aprox",
            children: [(0, _index.convertToMyCurrency)(valueBid, auction.currency), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auction.detail.bidApprox",
              defaultMessage: " approx."
            })]
          })
        }), !isEnded && !isCommingSoon && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 12,
            className: "auction-content-label",
            style: {
              color: primaryColor
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auction.detail.newBid",
              defaultMessage: "New Bid"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 6,
            className: error && 'has-error',
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
              dataTestId: "inputBid",
              field: "id",
              id: "input-bid-detail",
              className: "bid-input",
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
              inputRef: inputRef
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 6,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
              dataTestId: "btn-bid",
              extraClass: "success-full",
              text: (0, _reactIntl.useIntl)().formatMessage({
                id: 'auction.button.bid',
                defaultMessage: 'Bid'
              }),
              onClick: function onClick() {
                return handleClickBid(inputBidValue);
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            sm: 12,
            className: "subscribe-auction mt-5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "btn btn-link ",
              onClick: showModalSubscribe,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.subscribeAuction",
                defaultMessage: "Subscribe the auction."
              })
            })
          })]
        }), isEnded && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              className: "auction-content-label",
              "data-testid": "label-ended",
              style: {
                color: primaryColor
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.ended",
                defaultMessage: "Ended"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              className: "end-auction",
              "data-testid": "label-ended-message",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.endedAuction",
                defaultMessage: "This auction has ended."
              })
            })
          })]
        }), isCommingSoon && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              className: "auction-content-label",
              "data-testid": "label-ended",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.commingSoon",
                defaultMessage: "Comming Soon"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              className: "end-auction",
              "data-testid": "label-ended-message",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.commingSoonAuction",
                defaultMessage: "You can make bids when this auction starts."
              })
            })
          })]
        }), supported && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "auction-box",
          "data-testid": "supported-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "auction-box-link",
              href: supported.link,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                className: "npo-thumb",
                src: supported.image,
                alt: "thumb"
              }), auction.brand && auction.recipient && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.brandSupport",
                defaultMessage: "{brandName} will benefit {instituionName} with this auction.",
                values: {
                  brandName: auction.brand.name,
                  instituionName: auction.recipient.institution.name
                }
              }), auction.brand && !auction.recipient && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.proceedsSupport",
                defaultMessage: "Proceeds support {brandName}",
                values: {
                  brandName: auction.brand.name
                }
              }), !auction.brand && auction.recipient && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "auction.detail.institutionSupport",
                defaultMessage: "Proceeds support {instituionName}",
                values: {
                  instituionName: auction.recipient.institution.name
                }
              })]
            })
          })
        })]
      })
    })
  });
};

AuctionDetailRigth.propTypes = process.env.NODE_ENV !== "production" ? {
  auctionTitle: _propTypes["default"].string,
  auction: _propTypes["default"].object,
  isEnded: _propTypes["default"].bool,
  isCommingSoon: _propTypes["default"].bool,
  handleClickBid: _propTypes["default"].func,
  error: _propTypes["default"].string,
  minValue: _propTypes["default"].number,
  showModalSubscribe: _propTypes["default"].func,
  user: _propTypes["default"].shape({
    currency: _propTypes["default"].shape({
      small: _propTypes["default"].string
    })
  }),
  inputBidValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  valueBidTextField: _propTypes["default"].func,
  primaryColor: _propTypes["default"].string,
  env: _propTypes["default"].object,
  inputRef: _propTypes["default"].object,
  domainUrl: _propTypes["default"].string,
  locale: _propTypes["default"].string
} : {};
var _default = AuctionDetailRigth;
exports["default"] = _default;
module.exports = exports.default;