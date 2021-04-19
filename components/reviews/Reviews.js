"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRating = _interopRequireDefault(require("react-rating"));

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

var Reviews = function Reviews(_ref) {
  var averageRate = _ref.averageRate,
      companyId = _ref.companyId,
      errors = _ref.errors,
      myUser = _ref.myUser,
      review = _ref.review,
      onClickCancel = _ref.onClickCancel,
      onClickEdit = _ref.onClickEdit,
      onChangeRate = _ref.onChangeRate,
      onChangeText = _ref.onChangeText,
      otherReviewsList = _ref.otherReviewsList,
      serverlessResizeImage = _ref.serverlessResizeImage,
      showEditReviewForm = _ref.showEditReviewForm,
      submitReview = _ref.submitReview,
      texts = _ref.texts,
      totalReviews = _ref.totalReviews,
      userReview = _ref.userReview;
  var maxRate = '/5';
  var noImagePlaceholder = 'https://static.esolidar.com/frontend/assets/no-image.png';

  var Average = function Average() {
    return (0, _react.useMemo)(function () {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box overall-rating",
        "data-testid": "average-review",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "title",
          children: texts.averageTitle
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "info",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "numbers",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "average",
              children: averageRate
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: maxRate
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRating["default"], {
            className: "rating",
            emptySymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              className: "empty",
              icon: _freeRegularSvgIcons.faStar
            }),
            fullSymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              className: "full",
              icon: _freeSolidSvgIcons.faStar
            }),
            readonly: true,
            initialRating: averageRate
          })]
        })]
      });
    });
  };

  var OtherReviews = function OtherReviews() {
    return (0, _react.useMemo)(function () {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "box other-reviews",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "title",
          children: texts.reviewTitle
        }), !otherReviewsList.length && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "no-reviews",
          "data-testid": "no-reviews",
          children: texts.noReviews
        }), !!otherReviewsList.length && otherReviewsList.map(function (review) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "review",
            "data-testid": "other-review",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "header",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                className: "img",
                src: review.user.s3_key ? serverlessResizeImage + "/" + review.user.s3_key + "?width=40" : noImagePlaceholder,
                alt: (0, _utils.getEmployeeName)(companyId, review.user)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "name",
                children: (0, _utils.getEmployeeName)(companyId, review.user)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRating["default"], {
                className: "rating",
                emptySymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  className: "empty",
                  icon: _freeRegularSvgIcons.faStar
                }),
                fullSymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  className: "full",
                  icon: _freeSolidSvgIcons.faStar
                }),
                readonly: true,
                initialRating: review.rate || 0
              })]
            }), !!review.review && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "body",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                children: review.review
              })
            })]
          }, review.id);
        })]
      });
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "reviews",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
      children: [totalReviews > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        md: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Average, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        md: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "box user-review",
          "data-testid": "user-review",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "title",
            children: texts.myReview
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "review",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "header",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                className: "img",
                src: myUser.s3_key ? serverlessResizeImage + "/" + myUser.s3_key + "?width=40" : noImagePlaceholder,
                alt: (0, _utils.getEmployeeName)(companyId, myUser)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "name",
                children: (0, _utils.getEmployeeName)(companyId, myUser)
              }), !showEditReviewForm && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRating["default"], {
                className: "rating",
                emptySymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  className: "empty",
                  icon: _freeRegularSvgIcons.faStar
                }),
                fullSymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                  className: "full",
                  icon: _freeSolidSvgIcons.faStar
                }),
                readonly: true,
                initialRating: (0, _utils.isDefined)(userReview) ? userReview.rate : 0
              })]
            }), !showEditReviewForm && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "body",
                children: [(0, _utils.isDefined)(userReview) && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  children: userReview.review
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                  extraClass: "info",
                  className: "edit-button",
                  onClick: onClickEdit,
                  text: texts.editReviewButton
                })]
              })
            }), showEditReviewForm && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form",
                "data-testid": "edit-form",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                  className: "input",
                  field: "review",
                  onChange: onChangeText,
                  value: review.review,
                  minRows: 5,
                  placeholder: texts.writeReview
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "rate",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
                    id: "projects.review.rate",
                    defaultMessage: "Review this project"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRating["default"], {
                    className: "rating",
                    emptySymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                      className: "empty",
                      icon: _freeRegularSvgIcons.faStar
                    }),
                    fullSymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                      className: "full",
                      icon: _freeSolidSvgIcons.faStar
                    }),
                    initialRating: review.rate,
                    onChange: function onChange(rate) {
                      return onChangeRate(rate);
                    }
                  })]
                })]
              }), (0, _utils.isDefined)(errors.rate) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "has-error",
                style: {
                  display: 'inline'
                },
                "data-testid": "rate-error",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "help-block",
                  children: errors.rate
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "actions",
                children: [(0, _utils.isDefined)(userReview) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                  extraClass: "dark",
                  onClick: onClickCancel,
                  text: texts.cancel
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                  extraClass: "success-full",
                  onClick: submitReview,
                  text: (0, _utils.isDefined)(userReview) ? texts.updateLabel : texts.saveLabel
                })]
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
        md: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(OtherReviews, {})
      })
    })]
  });
};

Reviews.propTypes = process.env.NODE_ENV !== "production" ? {
  averageRate: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  companyId: _propTypes["default"].number.isRequired,
  errors: _propTypes["default"].object,
  myUser: _propTypes["default"].object.isRequired,
  review: _propTypes["default"].object.isRequired,
  onClickCancel: _propTypes["default"].func.isRequired,
  onClickEdit: _propTypes["default"].func.isRequired,
  onChangeRate: _propTypes["default"].func.isRequired,
  onChangeText: _propTypes["default"].func.isRequired,
  otherReviewsList: _propTypes["default"].array.isRequired,
  serverlessResizeImage: _propTypes["default"].string.isRequired,
  showEditReviewForm: _propTypes["default"].bool.isRequired,
  submitReview: _propTypes["default"].func.isRequired,
  texts: _propTypes["default"].object,
  totalReviews: _propTypes["default"].number.isRequired,
  userReview: _propTypes["default"].object.isRequired
} : {};
Reviews.defaultProps = {
  texts: {
    averageTitle: 'Overall rating',
    myReview: 'My review',
    reviewTitle: 'Reviews',
    myReviewTitle: 'Review from',
    editReviewButton: '(Edit)',
    writeReview: 'Write a review of this project',
    updateLabel: 'Update',
    saveLabel: 'Save',
    cancel: 'Cancel',
    noReviews: 'This project has no other reviews yet'
  }
};
var _default = Reviews;
exports["default"] = _default;
module.exports = exports.default;