"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _reactDeviceDetect = require("react-device-detect");

var _textareaField = _interopRequireDefault(require("../../../elements/textareaField"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable prefer-destructuring */
var CrowdfundingItem = function CrowdfundingItem(props) {
  var env = props.env,
      item = props.item;

  var campaignTitle = function campaignTitle() {
    var title;

    if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
      title = item.campaign.title;
    } else if (!item.campaign.title_en) {
      title = item.campaign.title;
    } else {
      title = item.campaign.title_en;
    }

    return title;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "cart-item box",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 8,
        xs: 12,
        className: "cart-item-row",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "checkbox-inline",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
              htmlFor: "addCart",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDeviceDetect.BrowserView, {
                device: _reactDeviceDetect.isBrowser,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  children: item.campaign.images.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    src: env.serverlessResizeImage + "/" + item.campaign.images[0].image + "?width=95&height=95",
                    alt: campaignTitle()
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDeviceDetect.MobileView, {
                device: _reactDeviceDetect.isMobile,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  children: item.campaign.images.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    src: env.serverlessResizeImage + "/" + item.campaign.images[0].image + "?width=400",
                    alt: campaignTitle(),
                    style: {
                      width: '90%'
                    }
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: item.campaign.images.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: env.cdn_static_url + "/frontend/assets/no-image.jpg",
                  style: {
                    width: 95
                  },
                  alt: campaignTitle()
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                children: campaignTitle()
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDeviceDetect.BrowserView, {
                device: _reactDeviceDetect.isBrowser,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  className: "paragraph",
                  title: item.campaign.description,
                  children: item.campaign.description
                })
              }), item.campaign.institution && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "checkout-supports",
                children: [(0, _reactIntl.useIntl)().formatMessage({
                  id: 'checkout.suports',
                  defaultMessage: 'Supports'
                }), "\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                  children: item.campaign.institution.name
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "checkbox",
                name: "hidden",
                id: "addCart",
                value: item.checked,
                onChange: function onChange(e) {
                  return props.onAddToCheckout(e, props.indx);
                },
                checked: item.extra.checked === 1
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "checkbox"
              })]
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 2,
        xs: 8,
        className: "price",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
          style: "currency",
          currency: item.currency.small,
          value: item.amount
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 2,
        xs: 4,
        className: "price text-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "btn-remove-item",
          onClick: function onClick() {
            return props.removeCartItem(item.id);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "checkout.remove.item",
            defaultMessage: "Remove"
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "checkbox-inline",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
              htmlFor: "hidden",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "crowdfunding.donation.checkout.anonymous",
                defaultMessage: "Make an anonymous donation."
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "checkbox",
                name: "hidden",
                id: "hidden",
                value: item.hidden,
                onChange: function onChange(e) {
                  return props.onChangCheckBox(e, props.indx);
                },
                checked: item.extra.hidden === '1'
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "checkbox"
              })]
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
          label: (0, _reactIntl.useIntl)().formatMessage({
            id: 'crowdfunding.message',
            defaultMessage: 'Leave a message'
          }),
          onChange: function onChange(e) {
            return props.onChangeMessage(e, props.indx);
          },
          value: item.extra.message,
          field: "message"
        })
      })]
    })]
  });
};

CrowdfundingItem.propTypes = process.env.NODE_ENV !== "production" ? {
  onChangeMessage: _propTypes["default"].func,
  onAddToCheckout: _propTypes["default"].func,
  indx: _propTypes["default"].number,
  item: _propTypes["default"].object,
  removeCartItem: _propTypes["default"].func,
  onChangCheckBox: _propTypes["default"].func,
  env: _propTypes["default"].object.isRequired
} : {};
var _default = CrowdfundingItem;
exports["default"] = _default;
module.exports = exports.default;