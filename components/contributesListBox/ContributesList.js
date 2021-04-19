"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _ContributeRow = _interopRequireDefault(require("./ContributeRow"));

var _jsxRuntime = require("react/jsx-runtime");

var ContributesList = function ContributesList(_ref) {
  var contributesListTotal = _ref.contributesListTotal,
      contributes = _ref.contributes,
      loadingContributes = _ref.loadingContributes,
      showMoreContributes = _ref.showMoreContributes,
      currency = _ref.currency,
      env = _ref.env,
      isAuction = _ref.isAuction;

  var renderContributes = function renderContributes() {
    if (contributes && contributes.length) {
      return contributes.map(function (contribute) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContributeRow["default"], {
            contribute: contribute,
            currency: currency,
            env: env
          })
        }, contribute.id);
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "no-contributions",
      children: [!isAuction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "crowdfunding.no-contributions",
        defaultMessage: "No contributions"
      }), isAuction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "auctions.no-bids",
        defaultMessage: "No bids"
      })]
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [renderContributes(), contributes && contributesListTotal > contributes.length && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: "see-more-contributors",
        type: "button",
        onClick: showMoreContributes,
        children: [!loadingContributes && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "crowdfunding.more",
          defaultMessage: "See more"
        }), loadingContributes && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "crowdfunding.loading-text",
          defaultMessage: "Loading ..."
        })]
      })
    })]
  });
};

var _default = ContributesList;
exports["default"] = _default;
ContributesList.propTypes = process.env.NODE_ENV !== "production" ? {
  contributesListTotal: _propTypes["default"].number,
  contributes: _propTypes["default"].array,
  loadingContributes: _propTypes["default"].bool,
  showMoreContributes: _propTypes["default"].func,
  currency: _propTypes["default"].string,
  env: _propTypes["default"].shape({
    cdn_static_url: _propTypes["default"].string
  }),
  isAuction: _propTypes["default"].bool
} : {};
module.exports = exports.default;