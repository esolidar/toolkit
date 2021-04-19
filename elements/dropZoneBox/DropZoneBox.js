"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = require("react-dropzone");

var _reactIntl = require("react-intl");

var _reactCropper = _interopRequireDefault(require("react-cropper"));

var _loading = _interopRequireDefault(require("../../components/loading"));

var _customModal = _interopRequireDefault(require("../customModal"));

var _button = _interopRequireDefault(require("../button"));

var _index = require("../../utils/index");

var _jsxRuntime = require("react/jsx-runtime");

var cropper = /*#__PURE__*/(0, _react.createRef)(null);

var DropZoneBox = function DropZoneBox(_ref) {
  var accept = _ref.accept,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      showDropArea = _ref.showDropArea,
      maxSize = _ref.maxSize,
      minSize = _ref.minSize,
      maxFiles = _ref.maxFiles,
      multiple = _ref.multiple,
      noClick = _ref.noClick,
      noDrag = _ref.noDrag,
      noKeyboard = _ref.noKeyboard,
      onSelect = _ref.onSelect,
      showImagesPreviews = _ref.showImagesPreviews,
      imagesList = _ref.imagesList,
      env = _ref.env,
      imagesPreviewPosition = _ref.imagesPreviewPosition,
      deleteImageGallery = _ref.deleteImageGallery,
      hasCropper = _ref.hasCropper,
      cropModalStatus = _ref.cropModalStatus,
      titleCropModal = _ref.titleCropModal,
      textSaveCropModal = _ref.textSaveCropModal,
      modalClassName = _ref.modalClassName,
      isLoading = _ref.isLoading,
      label = _ref.label;

  var _useState = (0, _react.useState)([]),
      errorList = _useState[0],
      setErrorList = _useState[1];

  var _useState2 = (0, _react.useState)(cropModalStatus || false),
      cropperModal = _useState2[0],
      setCropperModal = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      croppedFile = _useState3[0],
      setCroppedFile = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      disableCroppedImage = _useState4[0],
      setDisableCroppedImage = _useState4[1];

  var minWidth = !hasCropper || !hasCropper.minWidth ? 500 : hasCropper.minWidth;
  var minHeight = !hasCropper || !hasCropper.minHeight ? 470 : hasCropper.minHeight;
  (0, _react.useEffect)(function () {
    if (!cropModalStatus) {
      setCropperModal(cropModalStatus);
      setDisableCroppedImage(false);
    }
  }, [cropModalStatus]);

  var wait = function wait(delay) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return new Promise(function (resolve) {
      return setTimeout.apply(void 0, [resolve, delay].concat(args));
    });
  };

  var convertToMb = function convertToMb(size) {
    return (size / (1024 * 1024)).toFixed(0) + " MB";
  };

  var ImagesPreview = function ImagesPreview() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-flex",
      children: imagesList.map(function (file, idx) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "gallery-thumb mr-3",
          children: [file.image.includes('http') ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: file.image + "?width=64&height=64",
            alt: "thumb"
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: env.serverlessResizeImage + "/" + file.image + "?width=64&height=64",
            alt: "thumb"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "btn-delete-image",
            "data-image-id": file.id,
            onClick: function onClick(e) {
              return deleteImageGallery(e, idx);
            },
            children: "x"
          })]
        }, file.id);
      })
    });
  };

  var errorMessages = [{
    id: 'extensionError',
    message: (0, _reactIntl.useIntl)().formatMessage({
      id: 'document.files.modal.error.extension',
      defaultMessage: 'extension not allowed '
    })
  }, {
    id: 'maxSizeError',
    message: (0, _reactIntl.useIntl)().formatMessage({
      id: 'document.files.modal.error.filesSizeMax',
      defaultMessage: 'size larger than '
    })
  }, {
    id: 'minSizeError',
    message: (0, _reactIntl.useIntl)().formatMessage({
      id: 'document.files.modal.error.filesSizeMin',
      defaultMessage: 'size less than '
    })
  }, {
    id: 'dimensions',
    message: (0, _reactIntl.useIntl)().formatMessage({
      id: 'document.files.modal.error.dimensions',
      defaultMessage: 'The image should be at least {width}px by {height}px.'
    }, {
      width: minWidth,
      height: minHeight
    })
  }];

  var toggleModalCropper = function toggleModalCropper() {
    setDisableCroppedImage(false);
    setCropperModal(false);
  };

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    accept: accept,
    disabled: disabled,
    maxSize: maxSize,
    minSize: minSize,
    maxFiles: maxFiles,
    multiple: multiple,
    noClick: noClick,
    noDrag: noDrag,
    noKeyboard: noKeyboard,
    getFilesFromEvent: function () {
      var _getFilesFromEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
        var files, fileList, i, file;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setErrorList([]);
                files = [];
                fileList = e.dataTransfer ? e.dataTransfer.files : e.target.files;

                for (i = 0; i < fileList.length; i++) {
                  file = fileList.item(i);
                  files.push(file);
                }

                _context.next = 6;
                return wait(1000);

              case 6:
                return _context.abrupt("return", files);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getFilesFromEvent(_x) {
        return _getFilesFromEvent.apply(this, arguments);
      }

      return getFilesFromEvent;
    }(),
    onDrop: function onDrop() {},
    onDropAccepted: function () {
      var _onDropAccepted = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(acceptedFiles) {
        var reader, file;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (hasCropper && hasCropper.showCropper) {
                  reader = new FileReader();
                  file = acceptedFiles[0];

                  reader.onloadend = function () {
                    setCroppedFile(reader.result);
                  };

                  reader.readAsDataURL(file);
                  setCropperModal(true);
                } else {
                  onSelect(acceptedFiles.map(function (file) {
                    return Object.assign(file, {
                      preview: URL.createObjectURL(file)
                    });
                  }));
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onDropAccepted(_x2) {
        return _onDropAccepted.apply(this, arguments);
      }

      return onDropAccepted;
    }(),
    onDropRejected: function () {
      var _onDropRejected = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(rejectedFiles) {
        var fileExtensionOf, onDropErrorFileList;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fileExtensionOf = function fileExtensionOf(extension) {
                  return (0, _index.lastElemOf)(extension.split('.')).toLowerCase();
                };

                onDropErrorFileList = [];
                rejectedFiles.forEach(function (rejectedFile) {
                  var extension = fileExtensionOf(rejectedFile.name);
                  var errors = [];
                  var acceptExtensionArray = accept.split(',').map(function (item) {
                    return item.trim().toLocaleLowerCase();
                  });
                  var extensionExist = acceptExtensionArray.includes("." + extension);
                  if (!extensionExist) errors.push(errorMessages.find(function (messageObj) {
                    return messageObj.id === 'extensionError';
                  }).message);
                  if (rejectedFile.size > maxSize) errors.push(errorMessages.find(function (messageObj) {
                    return messageObj.id === 'maxSizeError';
                  }).message + " " + convertToMb(maxSize));
                  if (rejectedFile.size < minSize) errors.push(errorMessages.find(function (messageObj) {
                    return messageObj.id === 'minSizeError';
                  }).message + " " + convertToMb(minSize));
                  var fileErrorObject = {
                    name: rejectedFile.name,
                    errors: errors
                  };
                  if (errors.length) onDropErrorFileList.push(fileErrorObject);
                });
                setErrorList(onDropErrorFileList);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function onDropRejected(_x3) {
        return _onDropRejected.apply(this, arguments);
      }

      return onDropRejected;
    }()
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      open = _useDropzone.open;

  var handleSubmitCroppedImage = function handleSubmitCroppedImage(blob) {
    onSelect([blob]);
    toggleModalCropper();
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dropzone-box",
    children: [showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'top' && /*#__PURE__*/(0, _jsxRuntime.jsx)(ImagesPreview, {}), label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "control-label",
      children: label
    }), showDropArea && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({}, getRootProps({
      className: 'dropZone'
    }), {
      className: "upload-file " + className + " " + (disabled ? 'disabled' : ''),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({}, getInputProps())), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {}), !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "document.files.modal.drop",
              defaultMessage: "Drag and drop or click to select a file"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "document.files.modal.acceptedFiles",
              defaultMessage: "Accepted files: {accept}",
              values: {
                accept: accept
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "document.files.modal.maxSize",
              defaultMessage: "Maximum file size: " + convertToMb(maxSize)
            })
          })]
        })]
      }), errorList.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-left error-files",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "error",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "document.files.modal.error.files",
            defaultMessage: "The following file(s) contain error(s):"
          })
        }), errorList.map(function (file, idx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "error ml-2",
            children: "- " + file.name + ": " + file.errors.join(', ') + "."
          }, idx);
        })]
      })]
    })), !showDropArea && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      onClick: open,
      onKeyPress: function onKeyPress() {},
      className: className,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({}, getInputProps())), children, errorList.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-left error-files",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "error",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "document.files.modal.error.files",
            defaultMessage: "The following file(s) contain error(s):"
          })
        }), errorList.map(function (file, idx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "error ml-2",
            children: "- " + file.name + ": " + file.errors.join(', ') + "."
          }, idx);
        })]
      })]
    }), showImagesPreviews && imagesList.length > 0 && imagesPreviewPosition === 'bottom' && /*#__PURE__*/(0, _jsxRuntime.jsx)(ImagesPreview, {}), cropperModal && /*#__PURE__*/(0, _jsxRuntime.jsx)(_customModal["default"], {
      actionsChildren: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        extraClass: "success-full",
        onClick: function onClick() {
          cropper.current.getCroppedCanvas().toBlob(function (blob) {
            var imageWidth = cropper.current.getCroppedCanvas().width;
            var imageHeight = cropper.current.getCroppedCanvas().height;

            if (imageWidth > minWidth && imageHeight > minHeight) {
              setDisableCroppedImage(true);
              handleSubmitCroppedImage(blob);
            } else {
              var errors = [];
              errors.push({
                name: '',
                errors: ["" + errorMessages.find(function (messageObj) {
                  return messageObj.id === 'dimensions';
                }).message]
              });
              setErrorList(errors);
            }
          }, 'image/jpeg', 1);
        },
        text: textSaveCropModal,
        disabled: disableCroppedImage
      }),
      bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [disableCroppedImage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {
          loadingClass: "loading-cropper"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCropper["default"], {
          ref: cropper,
          src: croppedFile,
          style: {
            height: 400,
            width: '100%'
          },
          guides: true,
          zoomable: false,
          viewMode: 1,
          aspectRatio: hasCropper.aspectRatioW / hasCropper.aspectRatioH
        }), errorList.map(function (file, idx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "error ml-2",
            children: "- " + file.name + " " + file.errors.join(', ') + "."
          }, idx);
        })]
      }),
      dividerBottom: true,
      dividerTop: true,
      onHide: toggleModalCropper,
      show: cropperModal,
      size: "md",
      title: titleCropModal,
      dialogClassName: modalClassName
    })]
  });
};

DropZoneBox.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes["default"].string,
  accept: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  showDropArea: _propTypes["default"].bool,
  maxSize: _propTypes["default"].number,
  minSize: _propTypes["default"].number,
  maxFiles: _propTypes["default"].number,
  multiple: _propTypes["default"].bool,
  noClick: _propTypes["default"].bool,
  noKeyboard: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  errorMessages: _propTypes["default"].array,
  hasCropper: _propTypes["default"].shape({
    showCropper: _propTypes["default"].bool,
    aspectRatioW: _propTypes["default"].number,
    aspectRatioH: _propTypes["default"].number,
    minWidth: _propTypes["default"].number,
    minHeight: _propTypes["default"].number
  }),
  noDrag: _propTypes["default"].bool,
  showImagesPreviews: _propTypes["default"].bool,
  imagesList: _propTypes["default"].array,
  env: _propTypes["default"].object,
  imagesPreviewPosition: _propTypes["default"].oneOf(['top', 'bottom']),
  deleteImageGallery: _propTypes["default"].func,
  cropModalStatus: _propTypes["default"].bool,
  titleCropModal: _propTypes["default"].string,
  textSaveCropModal: _propTypes["default"].string,
  modalClassName: _propTypes["default"].string,
  isLoading: _propTypes["default"].bool
} : {};
DropZoneBox.defaultProps = {
  accept: 'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .ppt, .pptx, .txt,.xlsx, .zip',
  className: '',
  disabled: false,
  showDropArea: true,
  maxSize: 5000000,
  minSize: 0,
  maxFiles: 5,
  multiple: true,
  noClick: false,
  noKeyboard: true,
  noDrag: false,
  imagesPreviewPosition: 'bottom',
  imagesList: [],
  titleCropModal: 'Add Files',
  textSaveCropModal: 'Add',
  isLoading: false
};
var _default = DropZoneBox;
exports["default"] = _default;
module.exports = exports.default;