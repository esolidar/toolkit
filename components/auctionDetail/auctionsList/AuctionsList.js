"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../../../elements/button"));

var _index = require("../../../utils/index");

var _AuctionThumb = _interopRequireDefault(require("../../auctionThumb/AuctionThumb"));

var _jsxRuntime = require("react/jsx-runtime");

var AuctionsList = function AuctionsList(_ref) {
  var title = _ref.title,
      listAuctions = _ref.listAuctions,
      buttonTitle = _ref.buttonTitle,
      primaryColor = _ref.primaryColor,
      env = _ref.env;
  return listAuctions && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      className: "other-auctions",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "text-center mt-5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          className: "title",
          "data-testid": "title-other-auctions",
          style: {
            color: primaryColor
          },
          children: title
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        lg: 10,
        className: "offset-lg-1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: listAuctions.map(function (auction) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 6,
              md: 6,
              lg: 4,
              "data-testid": "listAuction-" + auction.id,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "/" + localStorage.lang + "/auction/detail/" + auction.id + "-" + (0, _index.slugify)(auction.title),
                title: auction.title,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AuctionThumb["default"], {
                  auction: auction,
                  thumb: true,
                  primaryColor: primaryColor,
                  env: env
                })
              })
            }, auction.id);
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 3,
        md: 4,
        className: "mx-auto",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          dataTestId: "see-all-auctions",
          className: "see-all-auctions",
          extraClass: "info",
          href: "/auction/list",
          text: buttonTitle
        })
      })
    })]
  });
};

AuctionsList.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes["default"].string,
  listAuctions: _propTypes["default"].array,
  auction: _propTypes["default"].shape({
    id: _propTypes["default"].number
  }),
  buttonTitle: _propTypes["default"].string,
  primaryColor: _propTypes["default"].string,
  env: _propTypes["default"].object
} : {};
var _default = AuctionsList;
exports["default"] = _default;
module.exports = exports.default;