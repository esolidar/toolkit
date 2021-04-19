"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var ReadMoreText = function ReadMoreText(props) {
  var text = props.text,
      charLimit = props.charLimit,
      color = props.color,
      readMoreTextTranslation = props.readMoreTextTranslation,
      readLessTextTranslation = props.readLessTextTranslation;
  var regex = /(<([^>]+)>)/gi;
  var result = text.replace(regex, '');
  var readMore = result.length > charLimit;

  var _useState = (0, _react.useState)(true),
      showReadMoreButton = _useState[0],
      setShowReadMoreButton = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      showReadLessButton = _useState2[0],
      setShowReadLessButton = _useState2[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [readMore && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [showReadMoreButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [result.substr(0, charLimit), "... \xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          style: {
            border: 'none',
            background: 'transparent',
            fontSize: '14px',
            textDecoration: 'underline',
            padding: '0',
            color: color
          },
          type: "button",
          onClick: function onClick() {
            setShowReadMoreButton(false);
            setShowReadLessButton(true);
          },
          children: readMoreTextTranslation
        })]
      }), showReadLessButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: text
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          style: {
            border: 'none',
            background: 'transparent',
            fontSize: '14px',
            textDecoration: 'underline',
            padding: '0',
            color: color
          },
          type: "button",
          onClick: function onClick() {
            setShowReadMoreButton(true);
            setShowReadLessButton(false);
          },
          children: readLessTextTranslation
        })]
      })]
    }), !readMore && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      dangerouslySetInnerHTML: {
        __html: text
      }
    })]
  });
};

ReadMoreText.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes["default"].string.isRequired,
  charLimit: _propTypes["default"].number,
  color: _propTypes["default"].string,
  readMoreTextTranslation: _propTypes["default"].string,
  readLessTextTranslation: _propTypes["default"].string
} : {};
ReadMoreText.defaultProps = {
  charLimit: 250,
  color: '#04C7E5',
  readMoreTextTranslation: 'Read more',
  readLessTextTranslation: 'Read less'
};
var _default = ReadMoreText;
exports["default"] = _default;
module.exports = exports.default;