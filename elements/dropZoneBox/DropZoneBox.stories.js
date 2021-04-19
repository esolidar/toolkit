"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _DropZoneBox = _interopRequireDefault(require("./DropZoneBox"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Elements/DropZoneBox',
  component: _DropZoneBox["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropZoneBox["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  accept: '.jpg, .jpeg, .png',
  onSelect: function onSelect() {},
  showImagesPreviews: true,
  imagesList: [{
    crowdfunding_id: 87,
    id: 385,
    image: 'crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg'
  }],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com'
  },
  deleteImageGallery: function deleteImageGallery() {}
};