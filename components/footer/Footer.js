"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _socialNetworks = _interopRequireDefault(require("../socialNetworks"));

var _changeLanguage = _interopRequireDefault(require("../changeLanguage"));

var _changeCurrency = _interopRequireDefault(require("../changeCurrency"));

var _index = _interopRequireDefault(require("../errorBoundary/index"));

var _jsxRuntime = require("react/jsx-runtime");

var Footer = function Footer(_ref) {
  var socialTitle = _ref.socialTitle,
      copyright = _ref.copyright,
      socialIcons = _ref.socialIcons,
      languages = _ref.languages,
      onChangeLang = _ref.onChangeLang,
      currentLang = _ref.currentLang,
      showCurrency = _ref.showCurrency,
      currentCurrency = _ref.currentCurrency,
      currencies = _ref.currencies,
      currencyChanged = _ref.currencyChanged,
      mainMenuFooter = _ref.mainMenuFooter,
      secondMenuFooter = _ref.secondMenuFooter,
      bottomMenuFooter = _ref.bottomMenuFooter,
      newsletterID = _ref.newsletterID,
      newsletterTitle = _ref.newsletterTitle,
      addressText = _ref.addressText;
  var copyrightText = "\xA9" + new Date().getFullYear() + " " + copyright;

  var submenu = function submenu(items) {
    return items.map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: item.url,
          title: item.text,
          target: item.target,
          children: item.text
        })
      }, index);
    });
  };

  var menu = function menu(items) {
    return items.map(function (item, index) {
      if (item.lang.includes(currentLang)) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
          children: [item.url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: item.url,
            title: item.text,
            target: item.target,
            children: item.text
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            title: item.text,
            children: item.text
          }), item.submenu && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            children: submenu(item.submenu)
          })]
        }, index);
      }
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: "landing-footer",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Container, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            children: mainMenuFooter && menu(mainMenuFooter)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            children: secondMenuFooter && menu(secondMenuFooter)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            id: "newsletterID",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
              children: newsletterTitle
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              id: newsletterID
            })]
          })
        }), socialIcons && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 4,
          className: "text-right no-padding-mobile",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_socialNetworks["default"], {
              icons: socialIcons,
              headingText: socialTitle
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
        className: "bottom-footer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          xs: {
            span: 12,
            order: 2
          },
          sm: {
            span: 12,
            order: 2
          },
          md: {
            span: 4,
            order: 0
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: copyrightText
          }), addressText && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "address",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), addressText]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
          xs: {
            span: 12,
            order: 0
          },
          sm: {
            span: 6,
            order: 0
          },
          md: {
            span: 5,
            order: 1
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            children: bottomMenuFooter && menu(bottomMenuFooter)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
          xs: {
            span: 12,
            order: 1
          },
          sm: {
            span: 6,
            order: 1
          },
          md: {
            span: 3,
            order: 3
          },
          className: "text-right",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_changeLanguage["default"], {
              languages: languages,
              onChangeLang: onChangeLang,
              currentLang: currentLang
            })
          }), showCurrency && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_changeCurrency["default"], {
              currentCurrency: currentCurrency,
              currencies: currencies,
              onChange: currencyChanged
            })
          })]
        })]
      })]
    })
  });
};

Footer.propTypes = process.env.NODE_ENV !== "production" ? {
  socialTitle: _propTypes["default"].string,
  copyright: _propTypes["default"].string.isRequired,
  languages: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number,
    name: _propTypes["default"].string,
    translate: _propTypes["default"].string
  })).isRequired,
  onChangeLang: _propTypes["default"].func.isRequired,
  currentLang: _propTypes["default"].string.isRequired,
  showCurrency: _propTypes["default"].bool.isRequired,
  socialIcons: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    "class": _propTypes["default"].string,
    url: _propTypes["default"].string
  })),
  currentCurrency: _propTypes["default"].object,
  currencies: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    small: _propTypes["default"].string,
    symbol: _propTypes["default"].string
  })),
  currencyChanged: _propTypes["default"].func,
  mainMenuFooter: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    text: _propTypes["default"].string,
    url: _propTypes["default"].string,
    target: _propTypes["default"].string,
    lang: _propTypes["default"].array
  })),
  secondMenuFooter: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    text: _propTypes["default"].string,
    url: _propTypes["default"].string,
    target: _propTypes["default"].string
  })),
  bottomMenuFooter: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    text: _propTypes["default"].string,
    url: _propTypes["default"].string,
    target: _propTypes["default"].string
  })),
  newsletterID: _propTypes["default"].string,
  newsletterTitle: _propTypes["default"].string,
  addressText: _propTypes["default"].string
} : {};
var _default = Footer;
exports["default"] = _default;
module.exports = exports.default;