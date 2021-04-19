"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _FeaturesMenu = _interopRequireDefault(require("./FeaturesMenu"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/FeaturesMenu',
  component: _FeaturesMenu["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeaturesMenu["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  project: 'whitelabel',
  location: '/',
  features: [{
    id: 1,
    name: 'feed',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:07',
    created_at: '2019-10-29 18:14:07',
    pivot: {
      subscription_id: 8,
      feature_id: 1,
      hide: 0
    }
  }, {
    id: 2,
    name: 'crowdfunding-public',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:07',
    created_at: '2019-10-29 18:14:07',
    pivot: {
      subscription_id: 8,
      feature_id: 1,
      hide: 0
    }
  }, {
    id: 3,
    name: 'crowdfunding',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:07',
    created_at: '2019-10-29 18:14:07',
    pivot: {
      subscription_id: 8,
      feature_id: 1,
      hide: 0
    }
  }, {
    id: 4,
    name: 'projects',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:07',
    created_at: '2019-10-29 18:14:07',
    pivot: {
      subscription_id: 8,
      feature_id: 1,
      hide: 0
    }
  }, {
    id: 7,
    name: 'whitelabel',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:35',
    created_at: '2019-10-29 18:14:35',
    pivot: {
      subscription_id: 8,
      feature_id: 7,
      hide: 0
    }
  }, {
    id: 8,
    name: 'manage-employees',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:40',
    created_at: '2019-10-29 18:14:40',
    pivot: {
      subscription_id: 8,
      feature_id: 8,
      hide: 0
    }
  }, {
    id: 9,
    name: 'giftcards',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-29 18:14:40',
    created_at: '2019-10-29 18:14:40'
  }],
  translations: {
    feed: 'Social Feed',
    auctions: 'Charity Auctions',
    manageEmployees: 'Manage Employees',
    charityneeds: 'Support a Charity',
    giftCards: 'Gift Cards',
    matchDonations: 'Match Donations',
    crowdfunding: 'Crowdfunding',
    projects: 'Manage Projects',
    crowdfundingPublic: 'Crowdfunding public',
    payments: 'Payments',
    impactAnalytics: 'Statistics',
    survey: 'Employee satisfaction'
  }
};