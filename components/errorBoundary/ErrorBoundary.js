"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var Sentry = _interopRequireWildcard(require("@sentry/browser"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable react/no-unused-state */
var LOAD_LIMIT = 0;

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ErrorBoundary, _Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      hasError: _this.props.showError,
      countReload: typeof window !== 'undefined' ? +localStorage.getItem('countReload') || 0 : '',
      reload: true,
      forceReload: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleReloadPage", function () {
      localStorage.setItem('countReload', 2);

      _this.updateState({
        reload: false,
        forceReload: true,
        hasError: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateState", function (state) {
      _this.setState(state);
    });
    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidCatch = function componentDidCatch(error, info) {
    var _this2 = this;

    if (this.state.countReload < LOAD_LIMIT && this.state.reload) {
      localStorage.setItem('countReload', this.state.countReload + 1);
      window.location.reload();
    }

    if (this.state.countReload > LOAD_LIMIT) {
      localStorage.removeItem('countReload');
      this.updateState({
        reload: false,
        countReload: 0
      });
    }

    Sentry.withScope(function (scope) {
      scope.setExtras(info);
      var eventId = Sentry.captureException(error);

      _this2.setState({
        eventId: eventId
      });
    });
    this.setState({
      hasError: true,
      forceReload: false
    });
  };

  _proto.render = function render() {
    var hasError = this.state.hasError;
    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color;

    if (hasError) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "boundary " + className,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "icon",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            "data-testid": "errorBoundary-emoji",
            children: "\u26A0\uFE0F"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          "data-testid": "errorBoundary-title",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "error.boundary",
            defaultMessage: "There was an error during loading"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "link",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            className: "retry-link",
            onClick: this.handleReloadPage,
            style: {
              color: color.primaryColor
            },
            "data-testid": "errorBoundary-link",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "error.boundary.retry",
              defaultMessage: "Retry"
            })
          })
        })]
      });
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(_react.Component);

ErrorBoundary.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  className: _propTypes["default"].string,
  color: _propTypes["default"].object,
  showError: _propTypes["default"].bool
} : {};
ErrorBoundary.defaultProps = {
  className: '',
  showError: false,
  color: {
    primaryColor: '#5AC3E1'
  }
};
var _default = ErrorBoundary;
exports["default"] = _default;
module.exports = exports.default;