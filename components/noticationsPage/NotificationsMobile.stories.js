"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _NotificationsMobile = _interopRequireDefault(require("./NotificationsMobile"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Notifications/NotificationsMobile',
  component: _NotificationsMobile["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationsMobile["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  notificationsHeadTitle: 'Notificações',
  totalNotifications: '20',
  onToggle: function onToggle() {
    return console.log('');
  },
  markAllAsReadTitle: 'Marcar todas como lidas',
  markAllAsReadFunc: function markAllAsReadFunc() {
    return console.log('');
  },
  handleScrollFunc: function handleScrollFunc() {
    return console.log('');
  },
  notifications: [{
    id: '49690f5e-ea1f-4475-af94-a4588dcac136',
    sender_id: null,
    receiver_id: '9',
    photo: {},
    detail: 'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png',
    thumb: 'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png',
    cover_image: 'https://cdn.testesolidar.com/companies/1/cover/,c761bea5-709f-4ac9-8195-9c347c78bc84.jpg',
    read_at: '2020-02-07T15:47:28.000000Z',
    url: 'https://business.testesolidar.com/requests/detail/117#report',
    text: 'Finalize a sua iniciativa <u>Lorem Ipsum</u>, faça uma avaliação e anexe arquivos.',
    type: 'RequestNotReviewedByCompanyNotification',
    target: '_SELF',
    updated_at: '2020-02-07T15:47:28.000000Z',
    created_at: '2020-01-23T14:42:08.000000Z'
  }, {
    id: '49690f5e-ea1f-4475-af94-a4588dcac137',
    sender_id: null,
    receiver_id: '9',
    photo: {},
    detail: 'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png',
    thumb: 'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png',
    cover_image: 'https://cdn.testesolidar.com/companies/1/cover/,c761bea5-709f-4ac9-8195-9c347c78bc84.jpg',
    read_at: null,
    url: 'https://business.testesolidar.com/requests/detail/117#report',
    text: 'Finalize a sua iniciativa <u>Lorem Ipsum</u>, faça uma avaliação e anexe arquivos.',
    type: 'RequestNotReviewedByCompanyNotification',
    target: '_SELF',
    updated_at: '2020-02-07T15:47:28.000000Z',
    created_at: '2020-01-23T14:42:08.000000Z'
  }],
  loadMoreFunc: function loadMoreFunc() {
    return console.log('');
  },
  hasMoreToLoad: false,
  markAsReadFunc: function markAsReadFunc() {
    return console.log('');
  }
};