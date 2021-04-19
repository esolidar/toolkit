"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _reactImages = _interopRequireWildcard(require("react-images"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/jsx-props-no-spreading */
var SliderNextArrow = function SliderNextArrow(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: "next-arrow",
    onClick: onClick
  });
};

var SliderPrevArrow = function SliderPrevArrow(props) {
  var onClick = props.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: "prev-arrow",
    onClick: onClick
  });
};

var SliderImagesLightbox = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(SliderImagesLightbox, _Component);

  function SliderImagesLightbox(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleModal", function () {
      _this.setState(function (state) {
        return {
          lightboxIsOpen: !state.lightboxIsOpen
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderImages", function () {
      var images = _this.state.images;
      var env = _this.props.env;
      return images.map(function (image, indx) {
        if (image.video) {
          var vimeo = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
          var youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;

          if (vimeo.test(image.video)) {
            var url = image.video;
            var result = url.split('com/');
            var videoUrl = result[1].split('&');
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
              title: "video",
              className: "slick-slide",
              src: "https://player.vimeo.com/video/" + videoUrl + "?color=ffffff&title=0&byline=0&portrait=0&badge=0",
              frameBorder: "0"
            }, image.id);
          }

          if (youtube.test(image.video)) {
            var _videoUrl;

            var _result = image.video.split('v=');

            if (_result.length > 1) {
              _videoUrl = _result.reverse();
            } else {
              _videoUrl = image.video.split('/').reverse();
            }

            return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
              className: "slick-slide",
              title: "video",
              src: "https://www.youtube.com/embed/" + _videoUrl[0]
            }, image.id);
          }

          return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
            title: "video",
            className: "slick-slide",
            src: "https://www.youtube.com/embed/" + image.video
          }, image.id);
        }

        return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: function onClick() {
            return _this.openLightbox(indx);
          },
          className: "open-lightbox",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: "" + (image.thumbs ? image.thumbs.detail : env.serverlessResizeImage + "/" + image.image + "?width=550&height=470"),
            style: {
              width: '100%'
            },
            alt: image.image
          })
        }, image.id);
      });
    });
    _this.state = {
      lightboxIsOpen: false,
      images: []
    };
    _this.toggleModal = _this.toggleModal.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openLightbox = _this.openLightbox.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = SliderImagesLightbox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        images = _this$props.images,
        video = _this$props.video,
        env = _this$props.env;
    var imagesData = [];

    if (video) {
      var _video = [{
        id: 0,
        image: env.cdn_static_url + "/frontend/assets/video.png",
        video: this.props.video,
        thumbs: {
          standard: env.cdn_static_url + "/frontend/assets/video.png",
          detail: env.cdn_static_url + "/frontend/assets/video.png",
          pin: env.cdn_static_url + "/frontend/assets/video.png",
          thumb: env.cdn_static_url + "/frontend/assets/video.png"
        }
      }];
      imagesData = _video.concat(images);
      this.updateState({
        images: imagesData
      });
    } else {
      this.updateState({
        images: images
      });
    }
  };

  _proto.openLightbox = function openLightbox() {
    this.setState({
      lightboxIsOpen: true
    });
  };

  _proto.updateState = function updateState(state) {
    this.setState(state);
  };

  _proto.render = function render() {
    var _this$state = this.state,
        images = _this$state.images,
        lightboxIsOpen = _this$state.lightboxIsOpen;
    var env = this.props.env;
    var imagesOnly = this.props.images;
    var settings = {
      customPaging: function customPaging(i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "thumb",
            src: "" + (images[i].thumbs ? images[i].thumbs.thumb : env.serverlessResizeImage + "/" + images[i].image + "?width=50&height=50")
          })
        });
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: /*#__PURE__*/(0, _jsxRuntime.jsx)(SliderNextArrow, {}),
      prevArrow: /*#__PURE__*/(0, _jsxRuntime.jsx)(SliderPrevArrow, {})
    };
    var arrayImages = [];
    var len = imagesOnly.length;

    for (var i = 0; i < len; i += 1) {
      arrayImages.push({
        src: imagesOnly[i].thumbs ? imagesOnly[i].thumbs.standard : env.serverlessResizeImage + "/" + imagesOnly[i].image
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick["default"], (0, _extends2["default"])({}, settings, {
        children: this.renderImages()
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactImages.ModalGateway, {
        children: lightboxIsOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactImages.Modal, {
          onClose: this.toggleModal,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactImages["default"], {
            views: arrayImages
          })
        }) : null
      })]
    });
  };

  return SliderImagesLightbox;
}(_react.Component);

var _default = SliderImagesLightbox;
exports["default"] = _default;
SliderImagesLightbox.propTypes = process.env.NODE_ENV !== "production" ? {
  request: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  images: _propTypes["default"].array,
  video: _propTypes["default"].string,
  env: _propTypes["default"].object
} : {};
SliderNextArrow.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: _propTypes["default"].func
} : {};
SliderPrevArrow.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: _propTypes["default"].func
} : {};
module.exports = exports.default;