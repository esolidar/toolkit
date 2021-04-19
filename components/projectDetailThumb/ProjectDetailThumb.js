"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _reactRating = _interopRequireDefault(require("react-rating"));

var _selectField = _interopRequireDefault(require("../../elements/selectField"));

var _lightboxGallery = _interopRequireDefault(require("../lightboxGallery"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */
var ProjectDetailThumb = function ProjectDetailThumb(_ref) {
  var _project$whitelabel_c, _project$company, _project$user;

  var project = _ref.project,
      status = _ref.status,
      lang = _ref.lang,
      serverlessResizeImage = _ref.serverlessResizeImage,
      color = _ref.color,
      admin = _ref.admin,
      showRequestInfoView = _ref.showRequestInfoView,
      showReview = _ref.showReview;
  var projectStatesMap = ['PENDING', 'IN_REVIEW', 'APPROVED', 'COMPLETED', 'REJECTED'];
  var projectState = projectStatesMap.indexOf(project.status);

  var handleChangeState = function handleChangeState(e) {
    var value = e.target.value;
    admin.changeStatus(projectStatesMap[+value]);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "project-detail",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "project-thumb",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: project.status + " status-bar",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "status",
          children: status
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "image",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lightboxGallery["default"], {
          images: project.images,
          serverlessResizeImage: serverlessResizeImage
        })
      }), showReview && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "ods-thumb",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          style: {
            color: color
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "project.review.average.rate",
            defaultMessage: "project.review.average.rate"
          })
        }), project.review_average ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRating["default"], {
          className: "rating ml-1",
          emptySymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            className: "empty",
            icon: _freeRegularSvgIcons.faStar
          }),
          fullSymbol: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            className: "full",
            icon: _freeSolidSvgIcons.faStar
          }),
          readonly: true,
          initialRating: project.review_average
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "category-name",
          children: "N/A"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "ods-thumb",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          style: {
            color: color
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "category",
            defaultMessage: "Category"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "category-name",
          children: project.project_category.name
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "ods-thumb",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
          style: {
            color: color
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "ods",
            defaultMessage: "ODS"
          })
        }), project.ods.map(function (item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "ods",
            src: _env.cdnStaticUrl + "/frontend/assets/ods/" + lang + "/" + item.tag_name + ".png",
            alt: item.tag_name
          }, item.id);
        })]
      }), !project.cover && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "owner",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: project.as_company === 1 ? project.whitelabel_config ? (_project$whitelabel_c = project.whitelabel_config.company) === null || _project$whitelabel_c === void 0 ? void 0 : _project$whitelabel_c.thumbs.thumb : (_project$company = project.company) === null || _project$company === void 0 ? void 0 : _project$company.thumbs.thumb : (_project$user = project.user) === null || _project$user === void 0 ? void 0 : _project$user.thumbs.thumb,
          alt: project.as_company === 1 ? project.whitelabel_config ? project.whitelabel_config.company.name : project.company.name : project.user.name
        }), project.as_company === 1 ? project.whitelabel_config ? project.whitelabel_config.company.name : project.company.name : project.user.name]
      })]
    }), admin && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
        className: "mb-4",
        options: [{
          id: 0,
          name: admin.pendingText,
          disabled: project.status === projectStatesMap[0]
        }, {
          id: 1,
          name: admin.inReviewText,
          disabled: project.status === projectStatesMap[1]
        }, {
          id: 2,
          name: admin.aproveText,
          disabled: project.status === projectStatesMap[2]
        }, {
          id: 3,
          name: admin.completeText,
          disabled: project.status === projectStatesMap[3]
        }, {
          id: 4,
          name: admin.rejectText,
          disabled: project.status === projectStatesMap[4]
        }],
        value: projectState,
        label: (0, _reactIntl.useIntl)().formatMessage({
          id: 'project.change.status.title',
          defaultMessage: 'Change project status'
        }),
        field: "changeState",
        onChange: handleChangeState,
        hiddenSelectText: true,
        disabled: showRequestInfoView
      }), project.status === projectStatesMap[1] && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        id: "request-info-btn",
        extraClass: "info-full w-100",
        onClick: function onClick() {
          return admin.changeStatus('REQUEST_INFO');
        },
        text: admin.requestInfoText,
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faInfoCircle,
          className: "mr-2"
        }),
        disabled: showRequestInfoView
      })]
    })]
  });
};

ProjectDetailThumb.propTypes = process.env.NODE_ENV !== "production" ? {
  project: _propTypes["default"].object.isRequired,
  color: _propTypes["default"].string,
  status: _propTypes["default"].string,
  lang: _propTypes["default"].string.isRequired,
  serverlessResizeImage: _propTypes["default"].string.isRequired,
  admin: _propTypes["default"].shape({
    changeStatus: _propTypes["default"].func,
    requestInfoText: _propTypes["default"].string,
    pendingText: _propTypes["default"].string,
    inReviewText: _propTypes["default"].string,
    aproveText: _propTypes["default"].string,
    completeText: _propTypes["default"].string,
    rejectText: _propTypes["default"].string
  }),
  showRequestInfoView: _propTypes["default"].bool,
  showReview: _propTypes["default"].bool
} : {};
ProjectDetailThumb.defaultProps = {
  showReview: false
};
var _default = ProjectDetailThumb;
exports["default"] = _default;
module.exports = exports.default;