"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _lightboxGallery = _interopRequireDefault(require("../../lightboxGallery"));

var _textareaField = _interopRequireDefault(require("../../../elements/textareaField"));

var _button = _interopRequireDefault(require("../../../elements/button"));

var _env = require("../../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var RequestDetailThumb = function RequestDetailThumb(_ref) {
  var request = _ref.request,
      onReviewRequest = _ref.onReviewRequest,
      onCloseRequest = _ref.onCloseRequest,
      errors = _ref.errors,
      admin = _ref.admin;

  var _useState = (0, _react.useState)(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  var _useState2 = (0, _react.useState)('1'),
      allowEmployees = _useState2[0],
      setAllowEmployees = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      comment = _useState3[0],
      setComment = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      disabledButton = _useState4[0],
      setDisabledButton = _useState4[1];

  var statusPivot = request.pivot ? request.pivot.status : request.status;
  var status;
  var statusText;
  var joinedStatus = 'join-request';
  var joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
    id: 'joinRequest',
    defaultMessage: "I'm In"
  });

  var onChangCheckBox = function onChangCheckBox(e) {
    if (e.target.checked === true) {
      setAllowEmployees('1');
    } else {
      setAllowEmployees('0');
    }
  };

  var onImin = function onImin() {
    setDisabledButton(true); // postImin(institutionId, requestId, this.state);
  };

  switch (statusPivot) {
    case 'A':
      status = 'status-box status-active';
      statusText = (0, _reactIntl.useIntl)().formatMessage({
        id: 'statusActive',
        defaultMessage: 'Active'
      });
      joinedStatus = 'joined-active';
      joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
        id: 'joinRequest',
        defaultMessage: "I'm In"
      });
      break;

    case 'P':
      status = 'status-box status-pending';
      statusText = (0, _reactIntl.useIntl)().formatMessage({
        id: 'statusPending',
        defaultMessage: 'Pending'
      });
      joinedStatus = 'joined-pending';
      joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
        id: 'joinedStatusTextPending',
        defaultMessage: 'Waiting approval'
      });
      break;

    case 'F':
      if (request.pivot) {
        if (request.pivot.review) {
          status = 'status-box status-reviewed';
          statusText = (0, _reactIntl.useIntl)().formatMessage({
            id: 'statusReviewed',
            defaultMessage: 'Completed and revised'
          });
          joinedStatus = 'joined-finished';
          joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
            id: 'statusReviewed',
            defaultMessage: 'Completed and revised'
          });
        } else {
          status = 'status-box status-ended';
          statusText = (0, _reactIntl.useIntl)().formatMessage({
            id: 'statusEnded',
            defaultMessage: 'Ended'
          });
          joinedStatus = 'joined-finished';
          joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
            id: 'statusEnded',
            defaultMessage: 'Ended'
          });
        }
      } else {
        status = 'status-box status-ended';
        statusText = (0, _reactIntl.useIntl)().formatMessage({
          id: 'statusEnded',
          defaultMessage: 'Ended'
        });
        joinedStatus = 'joined-finished';
        joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
          id: 'statusEnded',
          defaultMessage: 'Ended'
        });
      }

      break;

    case 'D':
      status = 'status-box status-deleted';
      statusText = (0, _reactIntl.useIntl)().formatMessage({
        id: 'statusDeclined',
        defaultMessage: 'Declined'
      });
      joinedStatus = 'joined-declined';
      joinedStatusText = (0, _reactIntl.useIntl)().formatMessage({
        id: 'statusDeleted',
        defaultMessage: 'Deleted'
      });
      break;

    default:
      status = 'status-box';
      statusText = '';
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: status,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 4,
        sm: 4,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
          id: "request.detail.box.status",
          defaultMessage: "Status"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        xs: 8,
        sm: 8,
        className: "text-right",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
            children: statusText
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      className: "m-0 mt-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        sm: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lightboxGallery["default"], {
          images: request.images.map(function (_ref2) {
            var image = _ref2.image;
            return {
              image: image
            };
          }),
          thumbs: false
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 12,
        children: [statusPivot === 'A' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pt-3 text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "info-full " + joinedStatus,
            onClick: function onClick() {
              return setShowModal(true);
            },
            disabled: !!request.pivot || admin,
            text: joinedStatusText
          })
        }), request.pivot && statusPivot === 'A' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pt-3 text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "dark",
            onClick: function onClick() {
              return onCloseRequest;
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'charityneeds.detail.btn.close.request',
              defaultMessage: 'Close request'
            })
          })
        }), request.pivot && statusPivot === 'F' && !request.pivot.review && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pt-3 text-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            extraClass: "dark",
            onClick: function onClick() {
              return onReviewRequest;
            },
            text: (0, _reactIntl.useIntl)().formatMessage({
              id: 'charityneeds.detail.btn.review',
              defaultMessage: 'Review'
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          className: "pt-3 pb-3",
          children: [request.end_date && /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "Calendar",
              src: _env.cdnStaticUrl + "/frontend/icons/ic-box-calendar.svg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedDate, {
              value: request.start_date.split(' ')[0],
              month: "short",
              day: "2-digit"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: " - "
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedDate, {
              value: request.end_date.split(' ')[0],
              month: "short",
              day: "2-digit"
            })]
          }), request.local && /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "location",
              src: _env.cdnStaticUrl + "/frontend/icons/ic-location.svg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: request.local
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "timer",
              src: _env.cdnStaticUrl + "/frontend/icons/ic-box-clock-timer.svg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
                utc: true,
                to: request.start_date,
                ago: true,
                children: request.end_date
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "companies",
              src: _env.cdnStaticUrl + "/frontend/icons/ic-box-companies-joined.svg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "request.detail.companies.joined",
              defaultMessage: "{value, number} {value, plural, one {company} other {companies}}",
              values: {
                value: request.companies_joined
              }
            })]
          }), request.donation === 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "donations",
              src: _env.cdnStaticUrl + "/frontend/icons/ic-box-wallet-donation.svg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedNumber, {
              value: request.donation_value,
              style: "currency",
              currency: request.institution.currency.small
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      className: "footer",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
        sm: 12,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: request.institution.thumbs.thumb,
          alt: request.institution.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: request.institution.sigla
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
      show: showModal,
      onHide: function onHide() {
        return setShowModal(false);
      },
      className: "md-request-im-in",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-xs-12",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Title, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "request.detail.modal.imIn.title",
                defaultMessage: "You\u2019re confirming your commitment to this request."
              })
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-12",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "checkbox-inline",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                  id: "request.detail.modal.make.available",
                  defaultMessage: "Make this request available to your employees."
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "checkbox",
                  name: "allow_employees",
                  value: "1",
                  onChange: function onChange() {
                    return onChangCheckBox();
                  },
                  checked: allowEmployees === '1'
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "checkbox",
                  style: {
                    marginTop: '10px'
                  }
                })]
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-12",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
              label: "Message",
              onChange: function onChange(e) {
                return setComment(e.target.value);
              },
              error: errors.comment,
              value: comment,
              field: "comment",
              fieldTranslate: "requests.message"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-sm-12 text-center buttons-box",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "btn btn-confirm-modal",
              onClick: function onClick() {
                return onImin();
              },
              disabled: disabledButton,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                id: "modal.request.imIn.confirm",
                defaultMessage: "Confirm"
              })
            })
          })]
        })
      })]
    })]
  });
};

RequestDetailThumb.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseRequest: _propTypes["default"].string,
  onReviewRequest: _propTypes["default"].string,
  request: _propTypes["default"].shape({
    companies_joined: _propTypes["default"].number,
    donation: _propTypes["default"].number,
    donation_value: _propTypes["default"].string,
    end_date: _propTypes["default"].string,
    images: _propTypes["default"].array,
    institution: _propTypes["default"].shape({
      currency: _propTypes["default"].shape({
        small: _propTypes["default"].string
      }),
      name: _propTypes["default"].string,
      sigla: _propTypes["default"].string,
      thumbs: _propTypes["default"].shape({
        thumb: _propTypes["default"].string
      })
    }),
    local: _propTypes["default"].string,
    pivot: _propTypes["default"].shape({
      review: _propTypes["default"].bool,
      status: _propTypes["default"].string
    }),
    start_date: _propTypes["default"].string,
    status: _propTypes["default"].string
  }),
  errors: _propTypes["default"].object,
  admin: _propTypes["default"].bool
} : {};
var _default = RequestDetailThumb;
exports["default"] = _default;
RequestDetailThumb.defaultProps = {
  admin: false
};
module.exports = exports.default;