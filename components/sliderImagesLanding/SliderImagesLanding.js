"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable react/jsx-props-no-spreading */
var SliderImagesLanding = function SliderImagesLanding(_ref) {
  var autoPlay = _ref.autoPlay,
      className = _ref.className,
      imgList = _ref.imgList,
      imgWidth = _ref.imgWidth,
      title = _ref.title;
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "slider-images-landing " + className,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Container, {
      fluid: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: "title",
            children: title
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        className: "slider",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: {
            span: 12
          },
          sm: {
            span: 12
          },
          md: {
            span: 8,
            offset: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick["default"], (0, _extends2["default"])({}, settings, {
            children: imgList.map(function (img) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                  href: img.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                    className: "image",
                    src: img.src,
                    alt: img.alt,
                    style: {
                      width: imgWidth
                    }
                  })
                })
              }, img.id);
            })
          }))
        })
      })]
    })
  });
};

SliderImagesLanding.propTypes = process.env.NODE_ENV !== "production" ? {
  autoPlay: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  imgList: _propTypes["default"].array.isRequired,
  imgWidth: _propTypes["default"].string,
  title: _propTypes["default"].string
} : {};
SliderImagesLanding.defaultProps = {
  autoPlay: false,
  className: '',
  imgWidth: '100px',
  title: ''
};
var _default = SliderImagesLanding;
exports["default"] = _default;
module.exports = exports.default;