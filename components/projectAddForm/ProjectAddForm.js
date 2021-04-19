"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _selectField = _interopRequireDefault(require("../../elements/selectField"));

var _checkboxImage = _interopRequireDefault(require("../../elements/checkboxImage"));

var _checkboxField = _interopRequireDefault(require("../../elements/checkboxField"));

var _radioField = _interopRequireDefault(require("../../elements/radioField"));

var _index = require("../../utils/index");

var _loading = _interopRequireDefault(require("../loading"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable react/jsx-props-no-spreading */
var ProjectAddForm = function ProjectAddForm(_ref) {
  var color = _ref.color,
      form = _ref.form,
      errors = _ref.errors,
      ods = _ref.ods,
      newImages = _ref.newImages,
      onSelectOds = _ref.onSelectOds,
      lang = _ref.lang,
      uploadImagesLabel = _ref.uploadImagesLabel,
      onDrop = _ref.onDrop,
      deleteImageGallery = _ref.deleteImageGallery,
      deleteErrorImageGallery = _ref.deleteErrorImageGallery,
      hideDropZone = _ref.hideDropZone,
      categories = _ref.categories,
      dragAndDropMessage = _ref.dragAndDropMessage,
      onChange = _ref.onChange,
      onChangeCheckbox = _ref.onChangeCheckbox,
      onChangeRadiobox = _ref.onChangeRadiobox;

  var renderFiles = function renderFiles() {
    return newImages.map(function (image, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "thumb",
        children: [image.loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {}), image.error && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "btn-delete-error-image",
          onClick: function onClick(e) {
            return deleteErrorImageGallery(e, image);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "image-error",
            src: _env.cdnStaticUrl + "/frontend/icons/ic-error.svg",
            alt: "Error"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: image.thumbs.thumb,
          alt: "Thumb",
          className: image.loading || image.error ? 'image-thumb-loading' : 'image-thumb'
        }), !image.loading && !image.error && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "btn-delete-image",
          onClick: function onClick(e) {
            return deleteImageGallery(e, image);
          },
          children: "x"
        })]
      }, i);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "add-project",
    children: form.map(function (field) {
      switch (field.type) {
        case 'title':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            style: {
              color: color.primaryColor
            },
            children: field.name
          }, field.id);

        case 'paragraph':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: field.name
          }, field.id);

        case 'input':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
            label: field.name,
            onChange: onChange,
            error: errors[field.id],
            defaultValue: field.reply,
            field: field.id,
            help: field.help
          }, field.id);

        case 'textarea':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
            label: field.name,
            error: errors[field.id],
            onChange: onChange,
            field: field.id,
            defaultValue: field.reply,
            help: field.help,
            resize: true
          }, field.id);

        case 'dropdown':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
            options: categories,
            defaultValue: +field.reply,
            label: field.name,
            field: field.id,
            onChange: onChange,
            error: errors[field.id]
          }, field.id);

        case 'ods':
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            className: "ods",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "control-label",
                children: "ODS"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              children: [ods.map(function (o) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxImage["default"], {
                  label: o.tag_name,
                  img: _env.cdnStaticUrl + "/frontend/assets/ods/" + lang + "/" + o.tag_name + ".png",
                  onChange: onSelectOds,
                  value: o.ods_id,
                  error: errors[field.id],
                  checked: o.checked
                }, o.ods_id);
              }), errors[field.id] && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "has-error",
                style: {
                  width: '100%',
                  display: 'inline-block',
                  marginBottom: '15px',
                  marginTop: '-15px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "help-block",
                  children: errors[field.id]
                })
              })]
            })]
          }, field.id);

        case 'upload-images':
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            className: "upload-image",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                htmlFor: "images",
                className: "control-label",
                children: uploadImagesLabel
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "box-images",
                children: !hideDropZone && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDropzone["default"], {
                  onDrop: onDrop,
                  disableClick: true,
                  accept: "image/jpeg, image/png",
                  children: function children(_ref2) {
                    var getRootProps = _ref2.getRootProps,
                        getInputProps = _ref2.getInputProps;
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({}, getRootProps(), {
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({}, getInputProps())), newImages.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                          children: dragAndDropMessage
                        }), renderFiles()]
                      }))
                    });
                  }
                })
              }), errors[field.id] && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "has-error",
                style: {
                  width: '100%',
                  display: 'inline-block',
                  marginBottom: '15px',
                  marginTop: '-15px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "help-block",
                  children: errors[field.id]
                })
              })]
            })]
          }, field.id);

        case 'checkbox':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                htmlFor: field.name,
                className: "control-label",
                children: field.name
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "help",
                children: field.help
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "checkbox",
                children: [field.options.map(function (option, i) {
                  var _field$checked;

                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxField["default"], {
                    label: option,
                    onChange: function onChange(e) {
                      return onChangeCheckbox(e, field.id);
                    },
                    name: (0, _index.slugify)(option) + "-" + i + "-" + field.id,
                    id: (0, _index.slugify)(option) + "-" + i + "-" + field.id,
                    value: option,
                    checked: (_field$checked = field.checked) === null || _field$checked === void 0 ? void 0 : _field$checked.includes(option)
                  }, i);
                }), errors[field.id] && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "has-error",
                  style: {
                    width: '100%',
                    display: 'inline-block',
                    marginBottom: '15px',
                    marginTop: '-15px'
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "help-block",
                    children: errors[field.id]
                  })
                })]
              })]
            })
          });

        case 'radiobox':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                htmlFor: field.name,
                className: "control-label",
                children: field.name
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "help",
                children: field.help
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "checkbox",
                children: [field.options.map(function (option, i) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_radioField["default"], {
                    label: option,
                    onChange: function onChange(e) {
                      return onChangeRadiobox(e, field.id);
                    },
                    name: (0, _index.slugify)(option, {
                      replacement: '-',
                      remove: /[?$*_+~.,()'"!\-:@]/g,
                      lower: true
                    }) + "-" + i + "-" + field.id,
                    id: (0, _index.slugify)(option, {
                      replacement: '-',
                      remove: /[?$*_+~.,()'"!\-:@]/g,
                      lower: true
                    }) + "-" + i + "-" + field.id,
                    value: option,
                    checked: field.reply === option
                  }, i);
                }), errors[field.id] && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "has-error",
                  style: {
                    width: '100%',
                    display: 'inline-block',
                    marginBottom: '15px',
                    marginTop: '-15px'
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "help-block",
                    children: errors[field.id]
                  })
                })]
              })]
            })
          });

        default:
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: field.type
          }, field.id);
      }
    })
  });
};

ProjectAddForm.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].object,
  form: _propTypes["default"].array.isRequired,
  errors: _propTypes["default"].object,
  ods: _propTypes["default"].array,
  newImages: _propTypes["default"].array,
  onSelectOds: _propTypes["default"].func,
  lang: _propTypes["default"].string.isRequired,
  uploadImagesLabel: _propTypes["default"].string,
  onDrop: _propTypes["default"].func,
  deleteImageGallery: _propTypes["default"].func,
  hideDropZone: _propTypes["default"].bool,
  categories: _propTypes["default"].array,
  dragAndDropMessage: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  deleteErrorImageGallery: _propTypes["default"].func,
  onChangeCheckbox: _propTypes["default"].func,
  onChangeRadiobox: _propTypes["default"].func
} : {};
ProjectAddForm.defaultProps = {
  ods: [],
  newImages: [],
  hideDropZone: true
};
var _default = ProjectAddForm;
exports["default"] = _default;
module.exports = exports.default;