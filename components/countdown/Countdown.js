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

var _reactIntl = require("react-intl");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable no-unused-expressions */
var Countdown = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(Countdown, _Component);

  function Countdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      status: '',
      days: '',
      hours: '',
      min: '',
      sec: '',
      loading: false,
      isSoon: false,
      isRunning: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addLeadingZeros", function (value) {
      var newValue = String(value);

      while (newValue.length < 2) {
        newValue = "0" + newValue;
      }

      return newValue;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calculateCountdown", function () {
      var _this$props = _this.props,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          onStart = _this$props.onStart,
          onExpiry = _this$props.onExpiry;
      var _this$state = _this.state,
          isSoon = _this$state.isSoon,
          isRunning = _this$state.isRunning;
      var todaysDate = new Date(_momentTimezone["default"].tz(new Date(), _momentTimezone["default"].tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss'));
      var countDate; // Create date from input value

      var inputStartDate = new Date(startDate.replace(/-/g, '/'));
      var inputEndDate = new Date(endDate.replace(/-/g, '/')); // call setHours to take the time out of the comparison

      if (inputStartDate > todaysDate) {
        _this.setState({
          status: 'soon',
          isSoon: true
        });

        countDate = startDate.replace(/-/g, '/');
      } else if (todaysDate <= inputEndDate) {
        if (isSoon) onStart();

        _this.setState({
          status: 'running',
          isSoon: false,
          isRunning: true
        });

        countDate = endDate.replace(/-/g, '/');
      } else {
        if (isRunning) onExpiry();

        _this.setState({
          status: 'ended',
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          isRunning: false
        });

        countDate = endDate.replace(/-/g, '/');
      }

      var nowTimeStamp = Date.parse(_momentTimezone["default"].tz(new Date(), _momentTimezone["default"].tz.guess()).utc().format('YYYY/MM/DD HH:mm:ss')); // const endDateTimeTimeStamp = Date.parse(new Date(countDate.replace(/-/g, "/")));

      var endDateTimeTimeStamp = Date.parse((0, _momentTimezone["default"])(countDate));
      var diff = (endDateTimeTimeStamp - nowTimeStamp) / 1000; // clear countdown when date is reached

      if (diff < 0) {
        return false;
      }

      var timeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        millisec: 0
      }; // calculate time difference between now and expected date

      if (diff >= 365.25 * 86400) {
        // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }

      if (diff >= 86400) {
        // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }

      if (diff >= 3600) {
        // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }

      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }

      timeLeft.sec = diff;
      return timeLeft;
    });
    return _this;
  }

  var _proto = Countdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // update every second
    var date = this.calculateCountdown();
    date ? this.setState(date) : null;
    this.interval = setInterval(function () {
      var date = _this2.calculateCountdown();

      date ? _this2.setState(date) : _this2.stop();
    }, 1000);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  _proto.stop = function stop() {
    clearInterval(this.interval);
  };

  _proto.render = function render() {
    var countDown = this.state;
    var loading = this.state.loading;
    var _this$props2 = this.props,
        thumb = _this$props2.thumb,
        dataTestId = _this$props2.dataTestId;
    var status = this.state.status;

    if (loading) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "Countdown"
      });
    }

    if (status === 'running' && countDown.days === 0 && countDown.hours < 8) {
      status = 'heightHoursLeft';
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "CountdownBox",
      children: [status === 'heightHoursLeft' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "Countdown-label " + status,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "thumb.countdown.eightHoursLeft",
          defaultMessage: "Ending soon"
        })
      }), status === 'running' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "Countdown-label " + status,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "countdown.running",
          defaultMessage: "Running"
        })
      }), status === 'soon' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "Countdown-label " + status,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "countdown.startsin",
          defaultMessage: "Starts in"
        })
      }), status === 'ended' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "Countdown-label " + status,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "countdown.ended",
          defaultMessage: "Ended"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "Countdown-box " + status,
        children: [(countDown.days > 0 && thumb || !thumb) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "Countdown-col",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "Countdown-col-element",
            "datat-testid": dataTestId + "-countdown-days",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: this.addLeadingZeros(countDown.days)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "countdown.day",
              defaultMessage: "Day"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "Countdown-col",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "Countdown-col-element",
            "data-testid": dataTestId + "-countdown-hour",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: this.addLeadingZeros(countDown.hours)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "countdown.hours",
              defaultMessage: "HOUR"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "Countdown-col",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "Countdown-col-element",
            "data-testid": dataTestId + "-countdown-min",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: this.addLeadingZeros(countDown.min)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "countdown.min",
              defaultMessage: "MIN"
            })]
          })
        }), (countDown.days === 0 && thumb || !thumb) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "Countdown-col",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "Countdown-col-element",
            "data-testid": dataTestId + "-countdown-seconds",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: this.addLeadingZeros(countDown.sec)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "countdown.sec",
              defaultMessage: "SEC"
            })]
          })
        })]
      })]
    });
  };

  return Countdown;
}(_react.Component);

Countdown.propTypes = process.env.NODE_ENV !== "production" ? {
  startDate: _propTypes["default"].string.isRequired,
  endDate: _propTypes["default"].string.isRequired,
  thumb: _propTypes["default"].bool,
  dataTestId: _propTypes["default"].string,
  onExpiry: _propTypes["default"].func,
  onStart: _propTypes["default"].func
} : {};
Countdown.defaultProps = {
  thumb: false,
  dataTestId: 'count',
  onExpiry: function onExpiry() {}
};
var _default = Countdown;
exports["default"] = _default;
module.exports = exports.default;