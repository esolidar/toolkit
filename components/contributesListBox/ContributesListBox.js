"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _loading = _interopRequireDefault(require("../loading"));

var _ContributesList = _interopRequireDefault(require("./ContributesList"));

var _jsxRuntime = require("react/jsx-runtime");

var ContributesListBox = function ContributesListBox(_ref) {
  var isAuction = _ref.isAuction,
      contributesList = _ref.contributesList,
      loadingContributesList = _ref.loadingContributesList,
      loadingContributes = _ref.loadingContributes,
      total = _ref.total,
      showMoreContributes = _ref.showMoreContributes,
      env = _ref.env,
      currency = _ref.currency,
      primaryColor = _ref.primaryColor;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "col-sm-12",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "row",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "control-label mb-4",
          style: {
            color: primaryColor
          },
          children: [!isAuction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "crowdfunding.last.donations.list",
            defaultMessage: "Latest donations"
          }), isAuction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "auction.last.bid",
            defaultMessage: "Last Bid"
          })]
        }), loadingContributesList && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "loading-contributes-list",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
        }), !loadingContributesList && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContributesList["default"], {
          contributesListTotal: total,
          contributes: contributesList,
          loadingContributes: loadingContributes,
          showMoreContributes: showMoreContributes,
          currency: currency,
          env: env,
          isAuction: isAuction
        })]
      })
    })
  });
};

ContributesListBox.propTypes = process.env.NODE_ENV !== "production" ? {
  isAuction: _propTypes["default"].bool,
  contributesList: _propTypes["default"].array,
  loadingContributesList: _propTypes["default"].bool,
  loadingContributes: _propTypes["default"].bool,
  total: _propTypes["default"].number,
  showMoreContributes: _propTypes["default"].func,
  currency: _propTypes["default"].string,
  env: _propTypes["default"].shape({
    cdn_static_url: _propTypes["default"].string
  }),
  primaryColor: _propTypes["default"].string
} : {};
ContributesListBox.defaultProps = {
  isAuction: false
};
var _default = ContributesListBox;
exports["default"] = _default;
module.exports = exports.default;