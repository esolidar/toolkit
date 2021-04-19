"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _dateFns = require("date-fns");

var _dateFnsTz = require("date-fns-tz");

var _jsxRuntime = require("react/jsx-runtime");

var _statusMap, _counterMap;

var statusOptions = {
  SOON: 'soon',
  RUNNING: 'running',
  HEIGH_HOURS_LEFT: 'heightHoursLeft',
  ENDED: 'ended'
};
var statusMap = (_statusMap = {}, _statusMap[statusOptions.SOON] = {
  translation: 'countdown.startsin',
  defaultMessage: 'Starts in'
}, _statusMap[statusOptions.RUNNING] = {
  translation: 'countdown.running',
  defaultMessage: 'Running'
}, _statusMap[statusOptions.HEIGH_HOURS_LEFT] = {
  translation: 'thumb.countdown.eightHoursLeft',
  defaultMessage: 'Ending soon'
}, _statusMap[statusOptions.ENDED] = {
  translation: 'countdown.ended',
  defaultMessage: 'Ended'
}, _statusMap);
var counterOptions = {
  DAYS: 'days',
  HOURS: 'hours',
  MIN: 'min',
  SEC: 'sec'
};
var counterMap = (_counterMap = {}, _counterMap[counterOptions.DAYS] = {
  testid: counterOptions.DAYS,
  translation: 'countdown.day',
  defaultMessage: 'DAY'
}, _counterMap[counterOptions.HOURS] = {
  testid: counterOptions.HOURS,
  translation: 'countdown.hours',
  defaultMessage: 'HOUR'
}, _counterMap[counterOptions.MIN] = {
  testid: counterOptions.MIN,
  translation: 'countdown.min',
  defaultMessage: 'MIN'
}, _counterMap[counterOptions.SEC] = {
  testid: counterOptions.SEC,
  translation: 'countdown.sec',
  defaultMessage: 'SEC'
}, _counterMap);

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
      isSoon: false,
      isRunning: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatDate", function (date) {
      return (0, _dateFns.format)((0, _dateFns.addMinutes)(date, date.getTimezoneOffset()), 'yyyy/MM/dd HH:mm:ss');
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

      var _Intl$DateTimeFormat$ = Intl.DateTimeFormat().resolvedOptions(),
          timeZone = _Intl$DateTimeFormat$.timeZone;

      var todaysDate = new Date(_this.formatDate((0, _dateFnsTz.zonedTimeToUtc)(new Date(), timeZone)));
      var countDate; // Create date from input value

      var inputStartDate = new Date(startDate.replace(/-/g, '/'));
      var inputEndDate = new Date(endDate.replace(/-/g, '/')); // call setHours to take the time out of the comparison

      if (inputStartDate > todaysDate) {
        _this.setState({
          status: statusOptions.SOON,
          isSoon: true
        });

        countDate = startDate.replace(/-/g, '/');
      } else if (todaysDate <= inputEndDate) {
        if (isSoon) onStart();

        _this.setState({
          status: statusOptions.RUNNING,
          isSoon: false,
          isRunning: true
        });

        countDate = endDate.replace(/-/g, '/');
      } else {
        if (isRunning) onExpiry();

        _this.setState({
          status: statusOptions.ENDED,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          isRunning: false
        });

        countDate = endDate.replace(/-/g, '/');
      }

      var endDateTimeTimeStamp = Date.parse(countDate);
      var nowTimeStamp = Date.parse(_this.formatDate((0, _dateFnsTz.zonedTimeToUtc)(new Date(), timeZone)));
      var diff = (endDateTimeTimeStamp - nowTimeStamp) / 1000; // clear countdown when date is reached

      if (diff < 0) return false;
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
    if (date) this.setState(date);
    this.interval = setInterval(function () {
      var date = _this2.calculateCountdown();

      if (date) _this2.setState(date);else _this2.stop();
    }, 1000);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  _proto.stop = function stop() {
    clearInterval(this.interval);
  };

  _proto.renderCounter = function renderCounter(option) {
    var dataTestId = this.props.dataTestId + "-countdown-" + option;
    var value = this.addLeadingZeros(this.state[option]);
    var _counterMap$option = counterMap[option],
        translation = _counterMap$option.translation,
        defaultMessage = _counterMap$option.defaultMessage;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "Countdown-col",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "Countdown-col-element",
        "data-testid": dataTestId,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
          children: value
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: translation,
          defaultMessage: defaultMessage
        })]
      })
    });
  };

  _proto.render = function render() {
    var thumb = this.props.thumb;
    var _this$state2 = this.state,
        days = _this$state2.days,
        hours = _this$state2.hours;
    var status = this.state.status;
    if (!status) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "Countdown"
    });
    var lessThan8HoursLeft = status === statusOptions.RUNNING && days === 0 && hours < 8;
    if (lessThan8HoursLeft) status = statusOptions.HEIGH_HOURS_LEFT;
    var showCounters = status !== statusOptions.ENDED;
    var showDays = !thumb || thumb && days > 0;
    var showSecs = !thumb || thumb && days === 0;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "CountdownBox",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "Countdown-label " + status,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: statusMap[status].translation,
          defaultMessage: statusMap[status].defaultMessage
        })
      }), showCounters && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "Countdown-box " + status,
        children: [showDays && this.renderCounter(counterOptions.DAYS), this.renderCounter(counterOptions.HOURS), this.renderCounter(counterOptions.MIN), showSecs && this.renderCounter(counterOptions.SEC)]
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