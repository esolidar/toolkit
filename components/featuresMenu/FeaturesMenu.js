"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _sortBy = _interopRequireDefault(require("../../utils/sortBy"));

var _jsxRuntime = require("react/jsx-runtime");

var FeaturesMenu = function FeaturesMenu(_ref) {
  var location = _ref.location,
      translations = _ref.translations,
      features = _ref.features,
      project = _ref.project;

  var _useState = (0, _react.useState)({}),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      companyId = _useState2[0],
      setCompanyId = _useState2[1];

  (0, _react.useEffect)(function () {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    setCompanyId(JSON.parse(localStorage.getItem('config') || '{}').company_id);
  }, []);
  var userWorkEmail = 0;

  if (companyId) {
    var _user$work_email;

    userWorkEmail = ((_user$work_email = user.work_email) === null || _user$work_email === void 0 ? void 0 : _user$work_email.find(function (item) {
      return item.company_id === companyId;
    })) ? 1 : 0;
  }

  var menuItem = function menuItem() {
    var items = [];
    features.map(function (feature) {
      switch (feature.name) {
        case 'feed':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 1,
                pageRoute: '/',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 1,
                pageRoute: '/social-feed',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 1,
                pageRoute: '/feed',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 1,
                pageRoute: '/',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: 0
              });
          }

          break;

        case 'auctions':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 2,
                pageRoute: '/auctions',
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 2,
                pageRoute: "/search/auctions/?company=" + (typeof window !== 'undefined' ? JSON.parse(localStorage.company).id : ''),
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 2,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 2,
                pageRoute: '/',
                showItem: false,
                iconItem: '',
                itemText: translations.auctions,
                hide: 0
              });
          }

          break;

        case 'manage-employees':
        case 'manage-members':
          switch (project) {
            case 'business-frontend':
              if (items.find(function (o) {
                return o.pageRoute === '/community';
              })) break;
              items.push({
                position: 3,
                pageRoute: '/community',
                showItem: true,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: 0
              });
          }

          break;

        case 'volunteering':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 4,
                pageRoute: '/charityneeds',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 4,
                pageRoute: '/user/requests',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 4,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 4,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0
              });
          }

          break;

        case 'projects':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 5,
                pageRoute: '/projects',
                showItem: true,
                iconItem: 'icon projects',
                itemText: translations.projects,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: '',
                itemText: '',
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 5,
                pageRoute: '/user/projects',
                showItem: true,
                iconItem: 'icon projects',
                itemText: translations.projects,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon projects',
                itemText: translations.charityneeds,
                hide: 0
              });
          }

          break;

        case 'giftcards':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 6,
                pageRoute: '/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 6,
                pageRoute: '/user/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 6,
                pageRoute: '/user/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: userWorkEmail > 0 ? 0 : 1
              });
              break;

            default:
              items.push({
                position: 6,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: 0
              });
          }

          break;

        case 'matchdonation':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 7,
                pageRoute: '/match-donations',
                showItem: true,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: 0
              });
          }

          break;

        case 'crowdfunding':
        case 'crowdfunding-public':
          switch (project) {
            case 'business-frontend':
              if (items.find(function (o) {
                return o.pageRoute === '/crowdfunding';
              })) break;
              items.push({
                position: 8,
                pageRoute: '/crowdfunding',
                showItem: true,
                iconItem: 'icon crowdfunding-public',
                itemText: translations.crowdfunding,
                hide: 0
              });
              break;

            case 'esolidar':
              if (items.find(function (o) {
                return o.pageRoute === '/user/campaigns';
              })) break;
              items.push({
                position: 8,
                pageRoute: '/user/campaigns',
                showItem: true,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              if (items.find(function (o) {
                return o.pageRoute === '/crowdfunding';
              })) break;
              items.push({
                position: 8,
                pageRoute: '/crowdfunding',
                showItem: true,
                iconItem: 'icon crowdfunding-public',
                itemText: translations.crowdfunding,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 8,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: 0
              });
          }

          break;

        case 'payments':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 10,
                pageRoute: '/payments',
                showItem: true,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: 0
              });
          }

          break;

        case 'impact-analytics':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 11,
                pageRoute: '/impact-analytics',
                showItem: true,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 11,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 11,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: feature.pivot.hide
              });
              break;

            default:
              items.push({
                position: 11,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: 0
              });
          }

          break;

        case 'documents':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 13,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: 0
              });
              break;

            case 'esolidar':
              items.push({
                position: 13,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 13,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: userWorkEmail > 0 ? 0 : 1
              });
              break;

            default:
              items.push({
                position: 13,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: 0
              });
          }

          break;

        case 'survey':
          switch (project) {
            case 'business-frontend':
              if (items.find(function (o) {
                return o.pageRoute === '/impact-analytics';
              })) {
                items.push({
                  position: 12,
                  pageRoute: '/impact-analytics',
                  showItem: false,
                  iconItem: 'icon survey-icon',
                  itemText: translations.survey,
                  hide: 0
                });
              } else {
                items.push({
                  position: 11,
                  pageRoute: '/impact-analytics',
                  showItem: true,
                  iconItem: 'icon ic-statistics',
                  itemText: translations.survey,
                  hide: 0
                });
              }

              break;

            case 'esolidar':
              items.push({
                position: 12,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: feature.pivot.hide
              });
              break;

            case 'whitelabel':
              items.push({
                position: 12,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: userWorkEmail > 0 ? 0 : 1
              });
              break;

            default:
              items.push({
                position: 12,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: 0
              });
          }

          break;

        default:
      }
    });
    return (0, _sortBy["default"])(items, 'position').map(function (item) {
      if (item.showItem) {
        if (item.hide !== 1) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            className: location === item.pageRoute || item.pageRoute !== '/' && location.includes(item.pageRoute) ? 'active' : '',
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              href: "" + item.pageRoute,
              children: [(typeof window !== 'undefined' ? localStorage.getItem('fixedBar') : false) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.OverlayTrigger, {
                placement: "right",
                overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Tooltip, {
                  id: item.position,
                  children: item.itemText
                }),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  className: item.iconItem
                })
              }, item.position) : /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                className: item.iconItem
              }), item.itemText]
            })
          }, item.position);
        }
      }
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "sidebar",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "sidebar-menu",
      children: menuItem()
    })
  });
};

var _default = FeaturesMenu;
exports["default"] = _default;
FeaturesMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  translations: _propTypes["default"].object.isRequired,
  location: _propTypes["default"].string.isRequired,
  features: _propTypes["default"].array.isRequired,
  project: _propTypes["default"].string.isRequired
} : {};
module.exports = exports.default;