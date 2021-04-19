"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _dropZoneBox = _interopRequireDefault(require("../../elements/dropZoneBox"));

var _jsxRuntime = require("react/jsx-runtime");

var ChangeProfileUserImage = function ChangeProfileUserImage(_ref) {
  var color = _ref.color,
      thumb = _ref.thumb,
      errors = _ref.errors,
      onDrop = _ref.onDrop,
      env = _ref.env;

  var handleOnSelect = function handleOnSelect(file) {
    var type = typeof file.name === 'string' ? 'file' : 'blob';
    var thumb = type === 'blob' ? URL.createObjectURL(file[0]) : file[0].preview;
    onDrop({
      image: file,
      thumb: thumb
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "change-profile-user-image",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      style: {
        color: color ? color.primaryColor : ''
      },
      "data-testid": "title-change-profile-user-image",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "user.settings.regional",
        defaultMessage: "About you"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "box",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])('form-group overflow-auto', {
          'has-error': errors.image
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "thumb-box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "thumb",
            "data-testid": "thumb-change-profile-user-image",
            style: {
              backgroundImage: "url(" + thumb + ")"
            }
          })
        }), errors.image && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "help-block",
          children: errors.image
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_dropZoneBox["default"], {
        accept: ".jpg, .jpeg, .png",
        onSelect: handleOnSelect,
        showImagesPreviews: false,
        env: env,
        showDropArea: false,
        multiple: false,
        hasCropper: {
          showCropper: true,
          aspectRatioW: 1,
          aspectRatioH: 1,
          minWidth: 200,
          minHeight: 200
        },
        modalClassName: "change-profile-user-image",
        titleCropModal: (0, _reactIntl.useIntl)().formatMessage({
          id: 'modal.crop.title'
        }),
        textSaveCropModal: (0, _reactIntl.useIntl)().formatMessage({
          id: 'modal.crop.button.save'
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: "dark",
          type: "file",
          text: (0, _reactIntl.useIntl)().formatMessage({
            id: 'user.settings.choose.file'
          }),
          dataTestId: "button-change-profile-user-image"
        })
      })]
    })]
  });
};

ChangeProfileUserImage.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].object,
  thumb: _propTypes["default"].string,
  errors: _propTypes["default"].object,
  onDrop: _propTypes["default"].func,
  env: _propTypes["default"].object
} : {};
ChangeProfileUserImage.defaultProps = {
  thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png'
};
var _default = ChangeProfileUserImage;
exports["default"] = _default;
module.exports = exports.default;