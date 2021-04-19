"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _reactShare = require("react-share");

var _jsxRuntime = require("react/jsx-runtime");

var ShareNetwork = function ShareNetwork(_ref) {
  var title = _ref.title,
      image = _ref.image,
      description = _ref.description;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        className: "share-label text-center mb-3 mt-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "share",
          defaultMessage: "SHARE"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 12,
        className: "content-wrapper text-center",
        "data-testid": "btn-share",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.FacebookShareButton, {
          url: window.location.href,
          quote: title,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.FacebookIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.TwitterShareButton, {
          url: window.location.href,
          title: title,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.TwitterIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.WhatsappShareButton, {
          url: window.location.href,
          title: title,
          separator: ": ",
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.WhatsappIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.TelegramShareButton, {
          url: window.location.href,
          title: title,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.TelegramIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.LinkedinShareButton, {
          url: window.location.href,
          title: title,
          windowWidth: 750,
          windowHeight: 600,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.LinkedinIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.PinterestShareButton, {
          url: String(window.location),
          media: image || 'https://www.esolidar.com/images/fb_esolidar.png',
          windowWidth: 1000,
          windowHeight: 730,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.PinterestIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.RedditShareButton, {
          url: window.location.href,
          title: title,
          windowWidth: 660,
          windowHeight: 460,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.RedditIcon, {
            size: 32,
            round: true
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.EmailShareButton, {
          url: window.location.href,
          subject: title,
          body: description + "\n\n" + window.location.href,
          className: "share-icon mb-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactShare.EmailIcon, {
            size: 32,
            round: true
          })
        })]
      })
    })]
  });
};

ShareNetwork.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes["default"].string,
  image: _propTypes["default"].string,
  description: _propTypes["default"].string
} : {};
var _default = ShareNetwork;
exports["default"] = _default;
module.exports = exports.default;