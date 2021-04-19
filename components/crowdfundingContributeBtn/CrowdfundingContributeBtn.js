"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _reactGa = _interopRequireDefault(require("react-ga"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../../elements/button"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _jsxRuntime = require("react/jsx-runtime");

var CrowdfundingContributeBtn = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(CrowdfundingContributeBtn, _Component);

  // eslint-disable-next-line react/static-property-placement
  function CrowdfundingContributeBtn(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
      var campaign = _this.props.campaign;
      localStorage.setItem('order_currency', campaign.currency.small); // Check if campaign is soon, running, ended

      var inputStartDate = new Date(_momentTimezone["default"].utc(campaign.start_date).tz(_momentTimezone["default"].tz.guess()).format('YYYY/MM/DD HH:mm:ss'));
      var inputEndDate = new Date(_momentTimezone["default"].utc(campaign.end_date).tz(_momentTimezone["default"].tz.guess()).format('YYYY/MM/DD HH:mm:ss')); // Get today's date

      var todaysDate = _this.state.todaysDate; // call setHours to take the time out of the comparison

      if (inputStartDate > todaysDate) {
        _this.setState({
          countDownStatus: 'soon'
        });
      } else if (todaysDate <= inputEndDate) {
        _this.setState({
          countDownStatus: 'running'
        });
      } else {
        _this.setState({
          countDownStatus: 'ended'
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentWillUnmount", function () {
      localStorage.removeItem('order_currency');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _this$setState[e.target.name] = e.target.value, _this$setState));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangCheckBox", function (e) {
      if (e.target.checked === true) {
        var _this$setState2;

        _this.setState((_this$setState2 = {}, _this$setState2[e.target.name] = '1', _this$setState2));
      } else {
        var _this$setState3;

        _this.setState((_this$setState3 = {}, _this$setState3[e.target.name] = '0', _this$setState3));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkoutContribution", function () {
      var value = _this.state.value;
      var _this$props = _this.props,
          campaign = _this$props.campaign,
          errorMsgRequired = _this$props.errorMsgRequired,
          errorMsgAmount = _this$props.errorMsgAmount;

      if (!value) {
        _this.setState({
          errors: {
            value: errorMsgRequired
          }
        });

        _reactGa["default"].event({
          category: 'button',
          action: 'click',
          label: 'btn-contribute-empty'
        });
      } else if (Number(value) < campaign.minimum_contribution) {
        _this.setState({
          errors: {
            value: errorMsgAmount + campaign.currency.symbol + campaign.minimum_contribution
          }
        });

        _reactGa["default"].event({
          category: 'button',
          action: 'click',
          label: 'btn-contribute-minimum'
        });
      } else {
        var cart = localStorage.order ? JSON.parse(localStorage.order) : null;
        var order = {
          products: [{
            currency: campaign.currency,
            id: campaign.product_id,
            campaign: campaign,
            type: 'crowdfunding',
            amount: Number(value),
            quantity: 1,
            extra: {
              hidden: 0,
              message: '',
              checked: 1
            }
          }]
        };

        if (cart) {
          if (cart.products.length === 0) {
            cart.products.push({
              currency: campaign.currency,
              id: campaign.product_id,
              campaign: campaign,
              type: 'crowdfunding',
              amount: Number(value),
              quantity: 1,
              extra: {
                hidden: 0,
                message: '',
                checked: 1
              }
            });
            localStorage.setItem('order', JSON.stringify(cart));
          } else {
            cart.products = [{
              currency: campaign.currency,
              id: campaign.product_id,
              campaign: campaign,
              type: 'crowdfunding',
              amount: Number(value),
              quantity: 1,
              extra: {
                hidden: 0,
                message: '',
                checked: 1
              }
            }];
            localStorage.setItem('order', JSON.stringify(cart));
          }
        } else {
          localStorage.setItem('order', JSON.stringify(order));
        }

        _this.updateState({
          isLoadingButton: true
        });

        _reactGa["default"].event({
          category: 'button',
          action: 'click',
          label: 'btn-contribute-checkout'
        });

        window.location.href = '/checkout';
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateState", function (state) {
      _this.setState(state);
    });
    _this.state = {
      value: '',
      errors: {},
      countDownStatus: null,
      todaysDate: new Date(),
      isLoadingButton: false
    };
    _this.checkoutContribution = _this.checkoutContribution.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChangCheckBox = _this.onChangCheckBox.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = CrowdfundingContributeBtn.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        campaign = _this$props2.campaign,
        textBtnDonate = _this$props2.textBtnDonate;
    var _this$state = this.state,
        isLoadingButton = _this$state.isLoadingButton,
        errors = _this$state.errors,
        value = _this$state.value,
        countDownStatus = _this$state.countDownStatus;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        className: "mt-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "control-label",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.new.donation",
              defaultMessage: "NEW DONATION (Min. {value})",
              values: {
                value: "" + campaign.currency.symbol + campaign.minimum_contribution
              }
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "control-label-note",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "crowdfunding.new.donation.note",
              defaultMessage: "Use only integer numbers"
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        className: "mt-1",
        children: [(campaign.status === 'approved' || campaign.status === 'completed') && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          sm: 7,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
            type: "number",
            id: "inputDonation",
            onChange: function onChange(e) {
              _this2.setState({
                value: e.target.value,
                errors: {}
              });

              _reactGa["default"].event({
                category: 'button',
                action: 'click',
                label: 'change-contribute-value'
              });
            },
            onBlur: function onBlur(e) {
              _this2.setState({
                value: Math.trunc(e.target.value) + ".00",
                errors: {}
              });
            },
            value: value,
            disabled: countDownStatus !== 'running',
            placeholder: campaign.currency.symbol + " 0,00"
          }), value === '' || value < campaign.minimum_contribution ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "has-error",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "help-block",
              children: errors.value
            })
          }) : '']
        }), (campaign.status === 'approved' || campaign.status === 'completed') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            className: "w-100",
            extraClass: "success-full btn btn-submit",
            onClick: this.checkoutContribution,
            disabled: countDownStatus !== 'running' || isLoadingButton,
            text: textBtnDonate
          })
        })]
      })]
    });
  };

  return CrowdfundingContributeBtn;
}(_react.Component);

(0, _defineProperty2["default"])(CrowdfundingContributeBtn, "contextTypes", {
  router: _propTypes["default"].object
});
CrowdfundingContributeBtn.propTypes = process.env.NODE_ENV !== "production" ? {
  campaign: _propTypes["default"].shape({
    status: _propTypes["default"].string,
    start_date: _propTypes["default"].string,
    end_date: _propTypes["default"].string,
    product_id: _propTypes["default"].number,
    minimum_contribution: _propTypes["default"].number,
    product: _propTypes["default"].shape({
      payment_method: _propTypes["default"].shape({
        id: _propTypes["default"].number,
        paypal: _propTypes["default"].number,
        sibs_cc: _propTypes["default"].number,
        sibs_directdebit_sepa: _propTypes["default"].number,
        sibs_mbway: _propTypes["default"].number,
        sibs_multibanco: _propTypes["default"].number,
        stripe: _propTypes["default"].number
      })
    }),
    currency: _propTypes["default"].shape({
      id: _propTypes["default"].number,
      name: _propTypes["default"].string,
      small: _propTypes["default"].string,
      status: _propTypes["default"].bool,
      symbol: _propTypes["default"].string,
      value: _propTypes["default"].string
    })
  }),
  errorMsgRequired: _propTypes["default"].string,
  errorMsgAmount: _propTypes["default"].string,
  textBtnDonate: _propTypes["default"].string.isRequired
} : {};
var _default = CrowdfundingContributeBtn;
exports["default"] = _default;
module.exports = exports.default;