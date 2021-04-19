"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _button = _interopRequireDefault(require("../button"));

var _jsxRuntime = require("react/jsx-runtime");

var ConfirmModal = function ConfirmModal(props) {
  var border = '1px solid #dee2e6';
  var headerStyle = {
    borderBottom: props.dividerTop ? border : 'none'
  };
  var bodyStyle = {
    padding: props.bodyPadding || 'auto'
  };
  var footerStyle = {
    borderTop: props.dividerBottom ? border : 'none'
  };

  var _useState = (0, _react.useState)(props.visible),
      isOpened = _useState[0],
      setIsOpened = _useState[1];

  var onButtonClick = function onButtonClick() {
    // Since the modal is inside the button click events will propagate up.
    if (!isOpened) {
      setIsOpened(true);
    }
  };

  var onClose = function onClose(event) {
    if (event) {
      event.stopPropagation();
    }

    setIsOpened(false);

    if (typeof props.onClose === 'function') {
      props.onClose();
    }
  };

  var onConfirm = function onConfirm(event) {
    event.stopPropagation();
    setIsOpened(false);
    props.onConfirm();
  };

  var cancelButton = props.showCancelButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
    extraClass: "dark",
    onClick: onClose,
    text: props.cancelText
  }) : null;
  var modal = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
    show: isOpened,
    onHide: onClose,
    className: props.className,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    "data-testid": "modal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
      className: props.headerClassName,
      closeButton: true,
      closeLabel: "Close",
      onHide: props.onHide,
      style: headerStyle,
      "data-testid": "header",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Title, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "mr-2 " + props.titleClassName,
          "data-testid": "title",
          children: props.title
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
      className: props.bodyClassName,
      style: bodyStyle,
      "data-testid": "body",
      children: props.body
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal.Footer, {
      className: props.footerClassName,
      style: footerStyle,
      "data-testid": "footer",
      children: [cancelButton, /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        extraClass: props.confirmClass,
        onClick: onConfirm,
        text: props.confirmText,
        dataTestId: "btn-confirm"
      })]
    })]
  });
  var content;

  if (props.children) {
    var btn = _react["default"].Children.only(props.children);

    content = /*#__PURE__*/_react["default"].cloneElement(btn, {
      onClick: onButtonClick,
      style: props.style
    }, btn.props.children, modal);
  } else {
    content = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Button, {
      onClick: onButtonClick,
      cssStyle: props.style,
      "data-testid": "button-without-children",
      children: [props.buttonText, modal]
    });
  }

  return content;
};

ConfirmModal.propTypes = process.env.NODE_ENV !== "production" ? {
  body: _propTypes["default"].node.isRequired,
  buttonText: _propTypes["default"].node,
  cancelText: _propTypes["default"].node,
  className: _propTypes["default"].string,
  confirmClass: _propTypes["default"].string,
  confirmText: _propTypes["default"].node,
  dialogClassName: _propTypes["default"].string,
  keyboard: _propTypes["default"].bool,
  backdrop: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  enforceFocus: _propTypes["default"].bool,
  onConfirm: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func,
  showCancelButton: _propTypes["default"].bool.isRequired,
  title: _propTypes["default"].node.isRequired,
  visible: _propTypes["default"].bool
} : {};
ConfirmModal.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  confirmClass: 'danger-full',
  showCancelButton: true,
  className: 'condirm-modal'
};
var _default = ConfirmModal;
exports["default"] = _default;
module.exports = exports.default;