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

var _reactImages = _interopRequireWildcard(require("react-images"));

var _jsxRuntime = require("react/jsx-runtime");

var LightboxGallery = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(LightboxGallery, _Component);

  function LightboxGallery(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleModal", function (selectedIndex) {
      _this.setState(function (state) {
        return {
          modalIsOpen: !state.modalIsOpen,
          selectedIndex: selectedIndex
        };
      });
    });
    _this.state = {
      modalIsOpen: false,
      selectedIndex: 0
    };
    _this.toggleModal = _this.toggleModal.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = LightboxGallery.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        modalIsOpen = _this$state.modalIsOpen,
        selectedIndex = _this$state.selectedIndex;
    var _this$props = this.props,
        images = _this$props.images,
        serverlessResizeImage = _this$props.serverlessResizeImage,
        thumbs = _this$props.thumbs;

    if (images.length === 0) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "no-image"
      });
    }

    var fullpathImages = images.map(function (image) {
      return {
        src: serverlessResizeImage ? serverlessResizeImage + "/" + image.image : image.image
      };
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "image-lightbox",
      children: [!thumbs && /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.toggleModal(0);
        },
        className: "image-button",
        children: [serverlessResizeImage && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: serverlessResizeImage + "/" + images[0].image + "?width=300",
          alt: "thumbnail",
          style: {
            width: '100%'
          }
        }), !serverlessResizeImage && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: images[0].image,
          alt: "thumbnail",
          style: {
            width: '100%'
          }
        })]
      }), thumbs && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: images.map(function (image, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "button",
            onClick: function onClick() {
              return _this2.toggleModal(i);
            },
            className: "all-thumbs",
            children: [serverlessResizeImage && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: serverlessResizeImage + "/" + image.image + "?width=300",
              alt: "thumbnail"
            }), !serverlessResizeImage && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: image.image,
              alt: "thumbnail"
            })]
          });
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactImages.ModalGateway, {
        children: modalIsOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactImages.Modal, {
          onClose: this.toggleModal,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactImages["default"], {
            currentIndex: selectedIndex,
            views: fullpathImages
          })
        }) : null
      })]
    });
  };

  return LightboxGallery;
}(_react.Component);

var _default = LightboxGallery;
exports["default"] = _default;
LightboxGallery.propTypes = process.env.NODE_ENV !== "production" ? {
  images: _propTypes["default"].array.isRequired,
  serverlessResizeImage: _propTypes["default"].string,
  thumbs: _propTypes["default"].bool
} : {};
LightboxGallery.defaultProps = {
  thumbs: false
};
module.exports = exports.default;