"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Footer',
  component: _Footer["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      position: 'relative',
      minHeight: '300px'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], (0, _extends2["default"])({}, args))
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  newsletterTitle: 'Lorem Ipsum',
  socialTitle: 'Junte-se a nós',
  socialIcons: [{
    "class": 'icon-facebook',
    url: 'https://www.facebook.com/esolidar'
  }, {
    "class": 'icon-twitter',
    url: '#'
  }, {
    "class": 'icon-linkedin2',
    url: '#'
  }, {
    "class": 'icon-google-plus',
    url: '#'
  }],
  copyright: 'All rights reserved.',
  currentLang: 'pt',
  onChangeLang: function onChangeLang() {
    return console.log('');
  },
  currencyChanged: function currencyChanged() {
    return console.log('');
  },
  languages: [{
    id: 0,
    name: 'pt',
    translate: 'Português (PT)'
  }, {
    id: 1,
    name: 'br',
    translate: 'Português (BR)'
  }, {
    id: 2,
    name: 'en',
    translate: 'English'
  }],
  showCurrency: true,
  currentCurrency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03'
  },
  currencies: [{
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03'
  }, {
    id: 1,
    name: 'U. S. Dollar',
    small: 'USD',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03'
  }],
  mainMenuFooter: [{
    text: 'Follow us',
    url: '#',
    target: '_self',
    lang: ['pt', 'br', 'en']
  }, {
    text: 'Follow us',
    url: '#',
    target: '_self',
    lang: ['pt', 'br', 'en']
  }, {
    text: 'Follow us',
    url: '#',
    target: '_self',
    lang: ['pt', 'br', 'en']
  }, {
    text: 'Follow us',
    url: '#',
    target: '_self',
    lang: ['pt', 'br']
  }],
  secondMenuFooter: [{
    text: 'Follow us',
    url: '#',
    target: '_self',
    lang: ['pt', 'br', 'en']
  }, {
    text: 'Follow us',
    submenu: [{
      text: 'Follow us',
      url: '#',
      target: '_self',
      lang: ['pt', 'br', 'en']
    }, {
      text: 'Follow us',
      url: '#',
      target: '_self',
      lang: ['pt', 'br', 'en']
    }],
    lang: ['pt', 'br', 'en']
  }],
  bottomMenuFooter: [{
    text: 'Terms and Conditions',
    url: '#',
    target: '_self',
    lang: ['pt', 'br', 'en']
  }, {
    text: 'Privacy Policy',
    url: '#',
    target: '_self',
    lang: ['pt', 'br', 'en']
  }],
  addressText: 'Rua das Irmãs Missionárias do Espirito Santo, 33 Braga'
};