"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _jsxRuntime = require("react/jsx-runtime");

var CustomModal = function CustomModal(_ref) {
  var actionsChildren = _ref.actionsChildren,
      backdrop = _ref.backdrop,
      centered = _ref.centered,
      bodyChildren = _ref.bodyChildren,
      bodyClassName = _ref.bodyClassName,
      bodyPadding = _ref.bodyPadding,
      dialogClassName = _ref.dialogClassName,
      dividerBottom = _ref.dividerBottom,
      dividerTop = _ref.dividerTop,
      footerClassName = _ref.footerClassName,
      headerClassName = _ref.headerClassName,
      onHide = _ref.onHide,
      scrollable = _ref.scrollable,
      show = _ref.show,
      size = _ref.size,
      subtitle = _ref.subtitle,
      subtitleClassName = _ref.subtitleClassName,
      title = _ref.title,
      titleClassName = _ref.titleClassName,
      titleColor = _ref.titleColor;
  var border = '1px solid #dee2e6';
  var headerStyle = {
    borderBottom: dividerTop ? border : 'none'
  };
  var bodyStyle = {
    padding: bodyPadding || 'auto'
  };
  var footerStyle = {
    borderTop: dividerBottom ? border : 'none'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
    backdrop: backdrop,
    centered: centered,
    dialogClassName: "custom-modal " + dialogClassName,
    onHide: onHide,
    scrollable: scrollable,
    show: show,
    size: size,
    "data-testid": "modal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
      className: headerClassName,
      closeButton: true,
      closeLabel: "Close",
      onHide: onHide,
      style: headerStyle,
      "data-testid": "header",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal.Title, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "mr-2 " + titleClassName,
          "data-testid": "title",
          style: {
            color: titleColor
          },
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "font-weight-normal " + subtitleClassName,
          "data-testid": "subtitle",
          children: subtitle
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
      className: bodyClassName,
      style: bodyStyle,
      "data-testid": "body",
      children: bodyChildren
    }), actionsChildren && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Footer, {
      className: footerClassName,
      style: footerStyle,
      "data-testid": "footer",
      children: actionsChildren
    })]
  });
};

CustomModal.propTypes = process.env.NODE_ENV !== "production" ? {
  actionsChildren: _propTypes["default"].node,
  backdrop: _propTypes["default"].oneOf(['static', true, false]),
  centered: _propTypes["default"].bool,
  bodyChildren: _propTypes["default"].node.isRequired,
  bodyClassName: _propTypes["default"].string,
  bodyPadding: _propTypes["default"].string,
  dialogClassName: _propTypes["default"].string,
  dividerBottom: _propTypes["default"].bool,
  dividerTop: _propTypes["default"].bool,
  footerClassName: _propTypes["default"].string,
  headerClassName: _propTypes["default"].string,
  onHide: _propTypes["default"].func,
  scrollable: _propTypes["default"].bool,
  show: _propTypes["default"].bool.isRequired,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg', 'xl']),
  subtitle: _propTypes["default"].string,
  subtitleClassName: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  titleClassName: _propTypes["default"].string,
  titleColor: _propTypes["default"].string
} : {};
CustomModal.defaultProps = {
  backdrop: 'static',
  centered: true,
  bodyClassName: '',
  dialogClassName: '',
  dividerBottom: false,
  dividerTop: false,
  footerClassName: '',
  headerClassName: '',
  scrollable: true,
  size: 'md',
  subtitle: '',
  subtitleClassName: '',
  titleClassName: '',
  titleColor: '#04C7E5'
};
var _default = CustomModal;
exports["default"] = _default;
module.exports = exports.default;