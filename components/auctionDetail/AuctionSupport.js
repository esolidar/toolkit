"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../../elements/button"));

var _jsxRuntime = require("react/jsx-runtime");

var AuctionSupport = function AuctionSupport(_ref) {
  var auction = _ref.auction;
  var supported = auction.recipient ? auction.recipient : auction.user;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      className: "support-cause",
      "data-testid": "supported-section",
      children: supported.institution && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        className: "content-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 2,
          className: "text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "npo-thumb",
            src: supported.institution.thumbs.thumb,
            alt: "thumb"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          sm: 7,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            className: "npo-name",
            "data-testid": "supported-name",
            children: supported.institution.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "npo-summary",
            "data-testid": "supported-summary",
            children: supported.institution.description
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            dataTestId: "btn-support-charity",
            extraClass: "info",
            target: "_blank",
            href: "#",
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'auction.detail.supportCharity',
              defaultMessage: 'Support this charity'
            })
          })
        })]
      })
    })
  });
};

AuctionSupport.propTypes = process.env.NODE_ENV !== "production" ? {
  auction: _propTypes["default"].shape({
    recipient: _propTypes["default"].shape({
      institution: _propTypes["default"].shape({
        name: _propTypes["default"].string,
        thumbs: _propTypes["default"].shape({
          thumb: _propTypes["default"].string
        })
      })
    }),
    user: _propTypes["default"].shape({
      institution: _propTypes["default"].shape({
        name: _propTypes["default"].string,
        thumbs: _propTypes["default"].shape({
          thumb: _propTypes["default"].string
        })
      })
    })
  })
} : {};
var _default = AuctionSupport;
exports["default"] = _default;
module.exports = exports.default;