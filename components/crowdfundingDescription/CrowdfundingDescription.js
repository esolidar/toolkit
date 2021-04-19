"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable prefer-destructuring */
var CrowdfundingDescription = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(CrowdfundingDescription, _Component);

  function CrowdfundingDescription(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showMoreDescAction", function () {
      _this.setState({
        showmoreDesc: true,
        showMoreDescButton: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showMoreRewardAction", function () {
      _this.setState({
        showmoreReward: true,
        showMoreRewardButton: false
      });
    });
    _this.state = {
      showmoreDesc: false,
      showMoreDescButton: true,
      showMoreRewardButton: true,
      showmoreReward: false
    };
    _this.showMoreDescAction = _this.showMoreDescAction.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showMoreRewardAction = _this.showMoreRewardAction.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = CrowdfundingDescription.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        showmoreDesc = _this$state.showmoreDesc,
        showmoreReward = _this$state.showmoreReward,
        showMoreDescButton = _this$state.showMoreDescButton,
        showMoreRewardButton = _this$state.showMoreRewardButton;
    var _this$props = this.props,
        campaign = _this$props.campaign,
        env = _this$props.env,
        lang = _this$props.lang,
        color = _this$props.color,
        auction = _this$props.auction;
    var locale = typeof window !== 'undefined' ? localStorage.getItem('lang') : 'en';
    var objCampaignOrAuction = Object.keys(campaign).length > 0 ? campaign : auction;

    var campaignDescription = function campaignDescription() {
      var description;

      if (locale === 'pt' || locale === 'br') {
        description = objCampaignOrAuction.description;
      } else if (!objCampaignOrAuction.description_en) {
        description = objCampaignOrAuction.description;
      } else {
        description = objCampaignOrAuction.description_en;
      }

      return description;
    };

    var auctionDescriptionLang = function auctionDescriptionLang(type) {
      var description;

      if (locale === 'pt' || locale === 'br') {
        description = auction[type];
      } else {
        description = auction[type + "_en"];
      }

      return description;
    };

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [!!campaign && campaign.projects && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: campaign.projects.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          md: 12,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "description-header",
            style: {
              marginTop: '50px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.description.ods",
              defaultMessage: "Sustainable Development Goals"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: campaign.projects[0].ods.map(function (item) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: env.cdn_static_url + "/frontend/assets/ods/" + lang + "/ods-" + item.id + ".png",
                style: {
                  width: '70px',
                  height: '70px',
                  backgroundSize: 'cover',
                  "float": 'left',
                  marginRight: '15px',
                  objectFit: 'cover'
                },
                alt: "ods-" + item.id
              }, item.id);
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        md: 12,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "description-header",
          style: {
            color: color,
            borderColor: color,
            'margin-top': '50px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "crowdfunding.description",
            defaultMessage: "Description"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "description-text " + (showmoreDesc ? 'description-show-all' : ''),
          children: campaignDescription().split('\n').map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
            }, index);
          })
        }), showMoreDescButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "d-block d-sm-none text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: this.showMoreDescAction,
            className: "readmore-button",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "readmore",
              defaultMessage: "Read more"
            })
          })
        }), auction && auctionDescriptionLang('shipping_description').length && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "shipping-header",
            style: {
              color: color,
              borderColor: color,
              'margin-top': '50px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auction.shipping",
              defaultMessage: "Shipping"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "description-text " + (showmoreDesc ? 'description-show-all' : ''),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: auctionDescriptionLang('shipping_description')
            })
          })]
        }), auction && auctionDescriptionLang('payment_description').length && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "payment-header",
            style: {
              color: color,
              borderColor: color,
              'margin-top': '50px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "auction.payment",
              defaultMessage: "Payment"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "description-text " + (showmoreDesc ? 'description-show-all' : ''),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: auctionDescriptionLang('payment_description')
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          md: 12,
          children: !!campaign && campaign.reward === 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "description-header",
              style: {
                color: color,
                borderColor: color,
                'margin-top': '50px'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "crowdfunding.reward.text",
                defaultMessage: "Reward"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "description-text " + (showmoreReward ? 'description-show-all' : ''),
              children: campaign.reward_description.split('\n').map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
                }, index);
              })
            }), showMoreRewardButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "d-block d-sm-none text-center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                type: "button",
                onClick: this.showMoreRewardAction,
                className: "readmore-button",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "readmore",
                  defaultMessage: "Read more"
                })
              })
            })]
          })
        })
      })]
    });
  };

  return CrowdfundingDescription;
}(_react.Component);

var _default = CrowdfundingDescription;
exports["default"] = _default;
CrowdfundingDescription.propTypes = process.env.NODE_ENV !== "production" ? {
  campaign: _propTypes["default"].object,
  auction: _propTypes["default"].object,
  env: _propTypes["default"].object.isRequired,
  lang: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string
} : {};
module.exports = exports.default;