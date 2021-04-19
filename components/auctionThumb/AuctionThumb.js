"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _moment = _interopRequireDefault(require("moment"));

var _rcTooltip = _interopRequireDefault(require("rc-tooltip"));

var _countdown = _interopRequireDefault(require("../countdown"));

var _index = require("../../utils/index");

var _jsxRuntime = require("react/jsx-runtime");

var AuctionThumb = function AuctionThumb(_ref) {
  var auction = _ref.auction,
      primaryColor = _ref.primaryColor,
      env = _ref.env,
      onExpiry = _ref.onExpiry,
      lang = _ref.lang;
  var today = (0, _moment["default"])(new Date(), 'YYYY-MM-DD HH:mm').toDate();
  var auctionEndDate = (0, _moment["default"])(auction.dateLimit, 'YYYY-MM-DD HH:mm').toDate();
  var supported = {};

  if (auction.recipient && auction.recipient.institution) {
    supported.title = auction.recipient.institution.name;
    supported.image = auction.recipient.institution.thumbs.thumb;
  } else if (auction.project) {
    supported.title = auction.project.title;
    supported.image = auction.project.images ? env.cdn_uploads_url + "/" + auction.project.images[0].image : env.cdn_static_url + "/frontend/assets/no-image.jpg";
  } else {
    supported = null;
  }

  var auctionTitle = '';

  if (lang === 'pt' || lang === 'br') {
    auctionTitle = auction.title;
  } else if (auction.title_en) {
    auctionTitle = auction.title_en;
  } else {
    auctionTitle = auction.title;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "auction-pin-box",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "auction-photo-box",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "auction-photo",
        style: {
          backgroundImage: "url(" + (auction.images && auction.images.length > 0 ? auction.images[0].thumbs.detail : '') + ")"
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "countdown-auction-pin",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_countdown["default"], {
        onExpiry: onExpiry,
        startDate: auction.dateStart,
        endDate: auction.dateLimit,
        thumb: true
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "row description",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 8,
        className: "text",
        children: auctionTitle
      }), supported && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 4,
        className: "text-right npo-logo",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_rcTooltip["default"], {
          placement: "top",
          overlay: supported.title,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: supported.image,
            width: "60",
            height: "60",
            alt: supported.title
          })
        })
      })]
    }), auction["private"] === 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [+today < +auctionEndDate && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        className: "last-bid",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          xs: 5,
          className: "last-bid-label",
          id: "last-bid-label-" + auction.id,
          style: {
            color: primaryColor
          },
          children: [auction.last_bid && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "homepage.toolsbox.charityAuctions.lastBid",
            defaultMessage: "Last Bid"
          }), !auction.last_bid && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "homepage.toolsbox.charityAuctions.startBid",
            defaultMessage: "Starting Bid"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 7,
          className: "last-bid-value text-right",
          id: "last-bid-value-" + auction.id,
          style: {
            color: primaryColor
          },
          children: (0, _index.convertToMyCurrency)(auction.last_bid ? auction.last_bid.value : auction.bid_start, auction.currency)
        })]
      }), +today >= +auctionEndDate && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        className: "last-bid",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 5,
          className: "last-bid-label",
          style: {
            color: primaryColor
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "homepage.toolsbox.charityAuctions.raised",
            defaultMessage: "Raised"
          })
        }), auction.last_bid && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 7,
          className: "last-bid-value text-right",
          style: {
            color: primaryColor
          },
          children: (0, _index.convertToMyCurrency)(auction.last_bid ? auction.last_bid.value : auction.bid_start, auction.currency)
        }), !auction.last_bid && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 7,
          className: "last-bid-value text-right",
          style: {
            color: primaryColor
          },
          children: (0, _index.convertToMyCurrency)('0', auction.currency)
        })]
      })]
    }), auction["private"] === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      className: "last-bid",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 12,
        className: "text-center private",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "homepage.toolsbox.charityAuctions.private",
          defaultMessage: "PRIVATE AUCTION"
        })
      })
    })]
  });
};

AuctionThumb.propTypes = process.env.NODE_ENV !== "production" ? {
  auction: _propTypes["default"].shape({
    id: _propTypes["default"].number,
    "private": _propTypes["default"].number,
    bid_start: _propTypes["default"].number,
    currency: _propTypes["default"].object,
    dateLimit: _propTypes["default"].string,
    dateStart: _propTypes["default"].string,
    images: _propTypes["default"].array,
    blink: _propTypes["default"].bool,
    project: _propTypes["default"].object,
    last_bid: _propTypes["default"].shape({
      value: _propTypes["default"].number
    }),
    recipient: _propTypes["default"].shape({
      institution: _propTypes["default"].shape({
        name: _propTypes["default"].string,
        thumbs: _propTypes["default"].shape({
          thumb: _propTypes["default"].string
        })
      }),
      causes: _propTypes["default"].string
    }),
    user: _propTypes["default"].shape({
      institution: _propTypes["default"].shape({
        name: _propTypes["default"].string,
        thumbs: _propTypes["default"].shape({
          thumb: _propTypes["default"].string
        })
      })
    }),
    title: _propTypes["default"].string,
    title_en: _propTypes["default"].string
  }),
  primaryColor: _propTypes["default"].string,
  env: _propTypes["default"].object,
  onExpiry: _propTypes["default"].func,
  lang: _propTypes["default"].string
} : {};
AuctionThumb.defaultProps = {
  onExpiry: function onExpiry() {},
  lang: 'en'
};
var _default = AuctionThumb;
exports["default"] = _default;
module.exports = exports.default;