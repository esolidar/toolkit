"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _reactBootstrap = require("react-bootstrap");

var _loading = _interopRequireDefault(require("../loading"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var CrowdfundingPrivateThumb = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(CrowdfundingPrivateThumb, _Component);

  function CrowdfundingPrivateThumb(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      status: '',
      labelStatus: '',
      date: '',
      thumb: {},
      isLoading: true,
      boxSize: {}
    };
    _this.thumbBox = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  var _proto = CrowdfundingPrivateThumb.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      boxSize: {
        width: this.thumbBox.current ? this.thumbBox.current.offsetWidth : 300,
        height: this.thumbBox.current ? this.thumbBox.current.offsetWidth : 300
      }
    });
    var thumb = this.props.thumb;

    if (thumb) {
      this.setState({
        thumb: thumb,
        isLoading: false
      }); // Check if campaign is soon, running, ended

      var inputStartDate = new Date(_momentTimezone["default"].utc(thumb.start_date).tz(_momentTimezone["default"].tz.guess()).format('YYYY/MM/DD HH:mm:ss'));
      var inputEndDate = new Date(_momentTimezone["default"].utc(thumb.end_date).tz(_momentTimezone["default"].tz.guess()).format('YYYY/MM/DD HH:mm:ss'));
      var translations = this.props.translations; // call setHours to take the time out of the comparison

      if (thumb.status === 'pending') {
        this.setState({
          status: 'pending-campaign',
          date: '',
          labelStatus: translations.pending
        });
      } else if (Date.parse(inputStartDate) >= Math.floor(Date.now())) {
        this.setState({
          status: 'soon',
          date: inputStartDate.getDate() + "-" + Number(inputStartDate.getMonth() + 1) + "-" + inputStartDate.getFullYear(),
          labelStatus: translations.startsIn
        });
      } else if (Math.floor(Date.now()) < Date.parse(inputEndDate)) {
        this.setState({
          status: 'running',
          date: inputEndDate.getDate() + "-" + Number(inputEndDate.getMonth() + 1) + "-" + inputEndDate.getFullYear(),
          labelStatus: translations.endsIn
        });
      } else {
        this.setState({
          status: 'ended',
          date: inputEndDate.getDate() + "-" + Number(inputEndDate.getMonth() + 1) + "-" + inputEndDate.getFullYear(),
          labelStatus: translations.endedIn
        });
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        translations = _this$props.translations,
        convertedValue = _this$props.convertedValue;
    var _this$state = this.state,
        isLoading = _this$state.isLoading,
        thumb = _this$state.thumb,
        status = _this$state.status,
        date = _this$state.date,
        labelStatus = _this$state.labelStatus,
        boxSize = _this$state.boxSize;

    if (isLoading) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {});
    }

    var campaignTitle = function campaignTitle() {
      var title;

      if (localStorage.lang === 'pt' || localStorage.lang === 'br') {
        title = thumb.title;
      } else if (!thumb.title_en) {
        title = thumb.title;
      } else {
        title = thumb.title_en;
      }

      return title;
    };

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "crowdfunding-thumb",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bg-image",
        style: {
          // eslint-disable-next-line max-len
          backgroundImage: thumb.images.length > 0 ? "url('" + thumb.images[0].image + "?width=" + boxSize.width + "&height=" + boxSize.height + "')" : "url({'" + _env.cdnStaticUrl + "/frontend/assets/no-image.jpg')"
        },
        ref: this.thumbBox,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "date",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "_date " + status,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "label-text",
              children: labelStatus
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "date-text",
              children: date
            })]
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "col-sm-12",
          children: [thumb.institution && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: thumb.institution.thumbs.thumb,
            alt: campaignTitle()
          }), campaignTitle()]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "raised-percent",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            xs: 10,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "raised-goal",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "percent",
                style: {
                  width: thumb.contribution_raised / thumb.goal * 100 + "%"
                }
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            xs: 2,
            className: "percent-text",
            children: Math.ceil(thumb.contribution_raised / thumb.goal * 100) + "%"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "raised",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            xs: 6,
            className: "raised-label",
            children: translations.raised
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
            xs: 6,
            className: "raised-value text-right",
            children: convertedValue
          })]
        })
      })]
    });
  };

  return CrowdfundingPrivateThumb;
}(_react.Component);

var _default = CrowdfundingPrivateThumb;
exports["default"] = _default;
CrowdfundingPrivateThumb.propTypes = process.env.NODE_ENV !== "production" ? {
  thumb: _propTypes["default"].object,
  translations: _propTypes["default"].object,
  convertedValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
} : {};
module.exports = exports.default;