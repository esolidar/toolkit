"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactIntl = require("react-intl");

var _draftJs = require("draft-js");

var _reactDraftWysiwyg = require("@pedroguia/react-draft-wysiwyg");

var _htmlToDraftjs = _interopRequireDefault(require("html-to-draftjs"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

require("@pedroguia/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
var getInitialRawContent = function getInitialRawContent(initialContent) {
  var isContentHtmlString = typeof initialContent === 'string';

  if (isContentHtmlString) {
    var fixedHtml = initialContent.replaceAll('<figure>', '<p>').replaceAll('</figure>', '</p>');
    var numberOfElements = (0, _draftJs.convertFromHTML)(fixedHtml).contentBlocks.length;
    var blocksFromHTML = (0, _htmlToDraftjs["default"])(fixedHtml);

    var content = _draftJs.ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);

    var rawContent = (0, _draftJs.convertToRaw)(content);
    if (rawContent.blocks.length > numberOfElements && rawContent.blocks[0].text === '') rawContent.blocks.shift();
    return rawContent;
  }

  return initialContent;
};

var errorClass = 'rdw-editor-wrapper-error';
var muiStyleClass = 'rdw-editor-wrapper-mui';
var focusClass = 'rdw-editor-wrapper-focus';
var translations = {
  pt: {
    'components.controls.link.linkTitle': 'Texto',
    'components.controls.link.linkTarget': 'Endereço URL',
    'components.controls.link.linkTargetOption': 'Abrir novo separador',
    'components.controls.link.link': 'Adicionar ligação',
    'components.controls.link.unlink': 'Remover ligação'
  }
};

var HtmlEditor = function HtmlEditor(_ref) {
  var dataTestId = _ref.dataTestId,
      onFileUpload = _ref.onFileUpload,
      initialContent = _ref.initialContent,
      onChange = _ref.onChange,
      columns = _ref.columns,
      changeColumns = _ref.changeColumns,
      error = _ref.error,
      muiStyle = _ref.muiStyle,
      helperText = _ref.helperText,
      showColumnsBtn = _ref.showColumnsBtn,
      showAddImageBtn = _ref.showAddImageBtn,
      showAddUrlBtn = _ref.showAddUrlBtn;

  var _useState = (0, _react.useState)([]),
      wrapperClassName = _useState[0],
      setWrapperClassName = _useState[1];

  var _useState2 = (0, _react.useState)(initialContent ? _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(getInitialRawContent(initialContent))) : _draftJs.EditorState.createEmpty()),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  (0, _react.useEffect)(function () {
    var newClassArray = [].concat(wrapperClassName);

    if (muiStyle) {
      if (!newClassArray.includes(muiStyleClass)) newClassArray.push(muiStyleClass);
    } else newClassArray = newClassArray.filter(function (item) {
      return item !== muiStyleClass;
    });

    if (error) {
      if (!newClassArray.includes(errorClass)) newClassArray.push(errorClass);
    } else newClassArray = newClassArray.filter(function (item) {
      return item !== errorClass;
    });

    setWrapperClassName(newClassArray);
  }, [muiStyle, error]);

  var handleFileUpload = function handleFileUpload(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var imageUrl, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return onFileUpload(reader.result);

              case 2:
                imageUrl = _context.sent;
                result = {
                  data: {
                    link: imageUrl
                  }
                };
                resolve(result);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      reader.onerror = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var imageUrl, err;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return onFileUpload(reader.result);

              case 2:
                imageUrl = _context2.sent;
                err = {
                  data: {
                    link: imageUrl
                  }
                };
                reject(err);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    });
  };

  var handleEditorStateChange = function handleEditorStateChange(editorState) {
    if (onChange) onChange((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  var handleOnFocus = function handleOnFocus() {
    if (!wrapperClassName.includes(focusClass)) setWrapperClassName([].concat(wrapperClassName, [focusClass]));
  };

  var handleOnBlur = function handleOnBlur() {
    setWrapperClassName(wrapperClassName.filter(function (item) {
      return item !== focusClass;
    }));
  };

  var options = ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'remove', 'history'];
  if (showAddImageBtn) options.push('image');
  if (showAddUrlBtn) options.push('link');
  var toolbarCustomButtons = [];

  if (showColumnsBtn) {
    toolbarCustomButtons.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
      title: (0, _reactIntl.useIntl)().formatMessage({
        id: 'columns',
        defaultMessage: 'Columns'
      }),
      options: [1, 2, 3],
      value: columns,
      handleChange: changeColumns,
      testId: "dropdown-btn"
    }));
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDraftWysiwyg.Editor, {
      wrapperClassName: wrapperClassName.join(' '),
      editorState: editorState,
      onEditorStateChange: handleEditorStateChange,
      localization: {
        locale: 'pt',
        translations: translations.pt
      },
      toolbar: {
        options: options,
        inline: {
          options: ['bold', 'italic', 'underline', 'strikethrough']
        },
        blockType: {
          options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']
        },
        link: {
          defaultTargetOption: '_blank'
        },
        image: {
          uploadCallback: handleFileUpload,
          alt: {
            present: true,
            mandatory: false
          },
          previewImage: true
        }
      },
      toolbarCustomButtons: toolbarCustomButtons,
      stripPastedStyles: true,
      spellCheck: true,
      onFocus: handleOnFocus,
      onBlur: handleOnBlur,
      "data-testid": dataTestId
    }), !!helperText && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      "aria-label": "html-helper-text",
      className: "helper-text__error",
      children: helperText
    })]
  });
};

HtmlEditor.propTypes = process.env.NODE_ENV !== "production" ? {
  dataTestId: _propTypes["default"].string,
  onFileUpload: _propTypes["default"].func,
  initialContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onChange: _propTypes["default"].func,
  columns: _propTypes["default"].number,
  changeColumns: _propTypes["default"].func,
  error: _propTypes["default"].bool,
  muiStyle: _propTypes["default"].bool,
  helperText: _propTypes["default"].string,
  showColumnsBtn: _propTypes["default"].bool,
  showAddImageBtn: _propTypes["default"].bool,
  showAddUrlBtn: _propTypes["default"].bool
} : {};
HtmlEditor.defaultProps = {
  initialContent: '',
  columns: 1,
  error: false,
  muiStyle: false,
  showColumnsBtn: true,
  showAddImageBtn: true,
  showAddUrlBtn: true
};
var _default = HtmlEditor;
exports["default"] = _default;
module.exports = exports.default;