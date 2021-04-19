"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _reactIntl = require("react-intl");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faPen = require("@fortawesome/free-solid-svg-icons/faPen");

var _faExternalLinkAlt = require("@fortawesome/free-solid-svg-icons/faExternalLinkAlt");

var _button = _interopRequireDefault(require("../../elements/button"));

var _slugify = _interopRequireDefault(require("../../utils/slugify"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable max-len */

/* eslint-disable no-nested-ternary */
var ProjectThumb = function ProjectThumb(_ref) {
  var _project$whitelabel_c, _project$company, _project$user;

  var project = _ref.project,
      serverlessResizeImage = _ref.serverlessResizeImage,
      cols = _ref.cols,
      lang = _ref.lang,
      followers = _ref.followers,
      showStatus = _ref.showStatus,
      status = _ref.status,
      myProject = _ref.myProject,
      select = _ref.select,
      selectText = _ref.selectText,
      selectedIds = _ref.selectedIds,
      selectProject = _ref.selectProject,
      selectedText = _ref.selectedText,
      whitelabelUrl = _ref.whitelabelUrl;
  var hasImages = project.images.length > 0 ? project.images[0].image : '';
  var thumbImage = project.cover ? project.cover : hasImages;
  var link = project.status === 'DRAFT' ? "/" + lang + "/user/projects/edit/" + project.id : "/" + lang + "/projects/detail/" + project.id + "-" + (0, _slugify["default"])(project.title) + (myProject ? "?owner=" + myProject : '');

  var clickThumb = function clickThumb() {
    if (select) {
      selectProject(project.id, project);
    } else if (whitelabelUrl) {
      window.open("https://" + whitelabelUrl + link);
    } else {
      window.location.href = link;
    }
  };

  var editThumb = function editThumb() {
    window.location.href = project.status === 'DRAFT' || project.status === 'PENDING' ? "/" + lang + "/user/projects/edit/" + project.id : "/" + lang + "/projects/detail/" + project.id + "-" + (0, _slugify["default"])(project.title) + (myProject ? "?owner=" + myProject : '');
  };

  var handleClickOpenTab = function handleClickOpenTab() {
    var win = window.open(whitelabelUrl ? "https://" + whitelabelUrl + link : link, '_blank');
    win.focus();
  };

  var isSelected = (selectedIds || []).filter(function (o) {
    return o === project.id;
  }).length;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
    xs: 12,
    sm: 6,
    md: 6,
    lg: cols,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "project-thumb",
      "data-testid": "projectThumb",
      children: [showStatus && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: project.status + " status-bar",
        children: [['DRAFT', 'PENDING'].includes(project.status) && project.user_id === JSON.parse(localStorage.user || '{}').id && /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          type: "button",
          className: "edit-button hover",
          onClick: editThumb,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _faPen.faPen,
            className: "mr-1",
            title: (0, _reactIntl.useIntl)().formatMessage({
              id: 'project.edit.title',
              defaultMessage: 'Edit project'
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
            id: "project.edit",
            defaultMessage: "Edit project"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "status",
          children: status
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.OverlayTrigger, {
          placement: "top",
          overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Tooltip, {
            id: 0,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
              id: "open.new.tab",
              defaultMessage: "Open in new tab"
            })
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _faExternalLinkAlt.faExternalLinkAlt,
            className: "ml-2 hover",
            onClick: handleClickOpenTab,
            style: {
              cursor: 'pointer'
            },
            title: (0, _reactIntl.useIntl)().formatMessage({
              id: 'open.new.tab',
              defaultMessage: 'Open in new tab'
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        type: "button",
        className: "project-button",
        onClick: clickThumb,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "thumb",
          style: {
            backgroundImage: "url('" + serverlessResizeImage + "/" + thumbImage + "')",
            height: '160px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "content",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "title",
              children: project.title
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "ods-thumb",
            children: project.ods.map(function (item, indx) {
              if (indx < 4) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: _env.cdnStaticUrl + "/frontend/assets/ods/" + lang + "/ods-" + item.id + ".png",
                  className: "ods",
                  alt: "ods-" + item.id
                }, item.id);
              }

              if (indx === 4) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "more-ods",
                  children: "+"
                }, item.id);
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "description",
          children: project.description
        }), project.user && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "owner",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: project.as_company === 1 ? project.whitelabel_config ? (_project$whitelabel_c = project.whitelabel_config.company) === null || _project$whitelabel_c === void 0 ? void 0 : _project$whitelabel_c.thumbs.thumb : (_project$company = project.company) === null || _project$company === void 0 ? void 0 : _project$company.thumbs.thumb : (_project$user = project.user) === null || _project$user === void 0 ? void 0 : _project$user.thumbs.thumb,
            alt: project.as_company === 1 ? project.whitelabel_config ? project.whitelabel_config.company.name : project.company.name : project.user.name
          }), project.as_company === 1 ? project.whitelabel_config ? project.whitelabel_config.company.name : project.company.name : project.user.name]
        }), followers && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})]
      }), select && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "select-project",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
          extraClass: isSelected === 1 ? 'info-full' : 'dark',
          onClick: function onClick() {
            return selectProject(project.id, project);
          },
          type: "submit",
          text: isSelected === 1 ? selectedText : selectText
        })
      })]
    })
  });
};

ProjectThumb.propTypes = process.env.NODE_ENV !== "production" ? {
  project: _propTypes["default"].shape({
    id: _propTypes["default"].number,
    user: _propTypes["default"].object,
    user_id: _propTypes["default"].number,
    ods: _propTypes["default"].array,
    cover: _propTypes["default"].string,
    title: _propTypes["default"].string.isRequired,
    description: _propTypes["default"].string,
    status: _propTypes["default"].string.isRequired,
    images: _propTypes["default"].array,
    as_company: _propTypes["default"].number,
    whitelabel_config: _propTypes["default"].shape({
      company: _propTypes["default"].object
    }),
    company: _propTypes["default"].object
  }),
  serverlessResizeImage: _propTypes["default"].string.isRequired,
  cols: _propTypes["default"].number,
  lang: _propTypes["default"].string.isRequired,
  followers: _propTypes["default"].array,
  showStatus: _propTypes["default"].bool,
  status: _propTypes["default"].string,
  myProject: _propTypes["default"].bool,
  select: _propTypes["default"].bool,
  selectText: _propTypes["default"].string,
  selectedText: _propTypes["default"].string,
  selectedIds: _propTypes["default"].array,
  selectProject: _propTypes["default"].func,
  whitelabelUrl: _propTypes["default"].string
} : {};
ProjectThumb.defaultProps = {
  cols: 4
};
var _default = ProjectThumb;
exports["default"] = _default;
module.exports = exports.default;