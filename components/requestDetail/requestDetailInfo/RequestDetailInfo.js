"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _env = require("../../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var RequestDetailInfo = function RequestDetailInfo(_ref) {
  var request = _ref.request,
      volunteeringType = _ref.volunteeringType;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "request-detail",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "box col-sm-12",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.about",
          defaultMessage: "About the request"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.description",
          defaultMessage: "Overall description"
        })
      }), request.about && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: request.about.split('\n').map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
          }, index);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.detailed.description",
          defaultMessage: "Detailed description"
        })
      }), request.detail && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: request.detail.split('\n').map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
          }, index);
        })
      }), request.goals && /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.goals",
          defaultMessage: "Goals"
        })
      }), request.goals && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: request.goals.split('\n').map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
          }, index);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.requirements",
          defaultMessage: "Requirements"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: request.requirements
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: "separator-blue"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.needs",
          defaultMessage: "This request needs"
        })
      }), request.volunteering === 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "Volunteering",
            src: _env.cdnStaticUrl + "/frontend/icons/ic-request-volunteering-blue.svg"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "request.detail.project.volunteering",
            defaultMessage: "Volunteering"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          className: "arrow-list",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "request.detail.project.volunteering.duration",
              defaultMessage: "{value, number} {value, plural, one {hour} other {hours}}",
              values: {
                value: request.volunteering_duration
              }
            }), "\xA0", volunteeringType !== null && volunteeringType]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "request.detail.project.volunteering.volunteers",
              defaultMessage: "{value_min}-{value_max} volunteers",
              values: {
                value_min: request.volunteering_min_volunteers,
                value_max: request.volunteering_max_volunteers
              }
            })
          }), request.volunteering_detail && /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: request.volunteering_detail.split('\n').map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
              }, index);
            })
          })]
        })]
      }), request.donation === 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "Donation",
            src: _env.cdnStaticUrl + "/frontend/icons/ic-request-donation-blue.png"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "request.detail.project.donations",
            defaultMessage: "Donations"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          className: "arrow-list",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
              value: request.donation_value,
              style: "currency",
              currency: request.institution.currency.small
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: request.donation_about && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: request.donation_about.split('\n').map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
                }, index);
              })
            })
          })]
        })]
      }), request.goods === 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "Goods",
            src: _env.cdnStaticUrl + "/frontend/icons/ic-request-goods-blue.png"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "request.detail.project.goods",
            defaultMessage: "Goods"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "arrow-list",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: request.goods_charity_needs && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: request.goods_charity_needs.split('\n').map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  children: [item, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
                }, index);
              })
            })
          })
        })]
      }), request.partners && /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: "separator-blue"
      }), request.partners && /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.partners",
          defaultMessage: "Partners and sponsors"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: request.partners
      }), request.other_platforms && /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: "separator-blue"
      }), request.other_platforms && /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.media.promotion",
          defaultMessage: "Media and promotion"
        })
      }), request.other_platforms && /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.project.other.promotion",
          defaultMessage: "Other means of promotion"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: request.other_platforms
      })]
    })
  });
};

RequestDetailInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  request: _propTypes["default"].shape({
    about: _propTypes["default"].string,
    detail: _propTypes["default"].string,
    donation: _propTypes["default"].number,
    donation_about: _propTypes["default"].string,
    donation_value: _propTypes["default"].number,
    goals: _propTypes["default"].string,
    goods: _propTypes["default"].number,
    goods_charity_needs: _propTypes["default"].string,
    institution: _propTypes["default"].shape({
      currency: _propTypes["default"].shape({
        small: _propTypes["default"].string
      })
    }),
    other_platforms: _propTypes["default"].string,
    partners: _propTypes["default"].string,
    requirements: _propTypes["default"].string,
    volunteering: _propTypes["default"].number,
    volunteering_detail: _propTypes["default"].string,
    volunteering_duration: _propTypes["default"].number,
    volunteering_max_volunteers: _propTypes["default"].number,
    volunteering_min_volunteers: _propTypes["default"].number
  }),
  volunteeringType: _propTypes["default"].string
} : {};
var _default = RequestDetailInfo;
exports["default"] = _default;
module.exports = exports.default;