"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SliderImagesLanding = _interopRequireDefault(require("./SliderImagesLanding"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/SliderImages/SliderImagesLanding',
  component: _SliderImagesLanding["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SliderImagesLanding["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  autoPlay: true,
  imgList: [{
    id: 0,
    alt: 'Delfim',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/delfim.png",
    url: 'https://delfim.esolidar.com'
  }, {
    id: 1,
    alt: 'Happiness',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/happiness.png",
    url: 'https://happiness.esolidar.com'
  }, {
    id: 2,
    alt: 'Human Power Hub',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/hph.png",
    url: 'https://www.humanpowerhub.org'
  }, {
    id: 3,
    alt: 'Instituto CPFL',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/instituto_cpfl.png",
    url: 'https://www.institutocpfl.org.br'
  }, {
    id: 4,
    alt: 'Liga Portugal',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/liga_portugal.png",
    url: 'https://www.ligaportugal.pt/pt/homepage'
  }, {
    id: 5,
    alt: 'Odontoprev',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/odontoprev.png",
    url: 'https://www.odontoprevonline.com.br'
  }, {
    id: 6,
    alt: 'Tap',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/tap_logo.png",
    url: 'https://www.esolidar.com/b/tapresponsabilidadesocial'
  }, {
    id: 7,
    alt: 'The Lotus Yang',
    src: _env.cdnStaticUrl + "/frontend/assets/landing/the_lotus_yang.png",
    url: 'https://www.bbsk.agency'
  }],
  imgWidth: '150px',
  title: 'Clientes'
};