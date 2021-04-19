"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _projectDetailInfo = _interopRequireDefault(require("../projectDetailInfo"));

var _projectDetailThumb = _interopRequireDefault(require("../projectDetailThumb"));

var _jsxRuntime = require("react/jsx-runtime");

var ProjectDetail = function ProjectDetail(_ref) {
  var project = _ref.project,
      color = _ref.color,
      status = _ref.status,
      lang = _ref.lang,
      serverlessResizeImage = _ref.serverlessResizeImage,
      admin = _ref.admin;
  if ((0, _isEmpty["default"])(project) || !project) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
    className: "project-detail",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 9,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          sm: 12,
          className: "box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_projectDetailInfo["default"], {
            project: project,
            color: color
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
      sm: 3,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_projectDetailThumb["default"], {
        project: project,
        status: status,
        lang: lang,
        serverlessResizeImage: serverlessResizeImage,
        admin: admin
      })
    })]
  });
};

ProjectDetail.propTypes = process.env.NODE_ENV !== "production" ? {
  project: _propTypes["default"].object.isRequired,
  color: _propTypes["default"].string,
  status: _propTypes["default"].string,
  lang: _propTypes["default"].string.isRequired,
  serverlessResizeImage: _propTypes["default"].string.isRequired,
  admin: _propTypes["default"].shape({
    changeStatus: _propTypes["default"].func,
    inReviewText: _propTypes["default"].string,
    aproveText: _propTypes["default"].string,
    completeText: _propTypes["default"].string,
    rejectText: _propTypes["default"].string
  })
} : {};
var _default = ProjectDetail;
exports["default"] = _default;
module.exports = exports.default;