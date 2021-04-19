"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _loading = _interopRequireDefault(require("../loading"));

var _env = require("../../constants/env");

var _jsxRuntime = require("react/jsx-runtime");

var NotificationsMobile = function NotificationsMobile(_ref) {
  var notificationsHeadTitle = _ref.notificationsHeadTitle,
      markAllAsReadTitle = _ref.markAllAsReadTitle,
      markAllAsReadFunc = _ref.markAllAsReadFunc,
      handleScrollFunc = _ref.handleScrollFunc,
      notifications = _ref.notifications,
      loadMoreFunc = _ref.loadMoreFunc,
      hasMoreToLoad = _ref.hasMoreToLoad,
      markAsReadFunc = _ref.markAsReadFunc;
  var items = [];
  var notificationsList = notifications;

  if (notificationsList.length > 0) {
    notificationsList.map(function (notification, i) {
      if (notification.id) {
        var _notification$photo;

        items.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          className: "notification-row",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#",
            target: notification.url === '#' ? '_self' : notification.target,
            title: notification.title,
            onClick: function onClick() {
              return markAsReadFunc(notification);
            },
            className: "btn-markAsRead",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: notification.read_at === null ? 'notification-row-box unread' : 'notification-row-box',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "notification-thumb",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  alt: "Thumb",
                  src: ((_notification$photo = notification.photo) === null || _notification$photo === void 0 ? void 0 : _notification$photo.thumb) ? notification.photo.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png'
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "notification-row-text",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: notification.text
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "notification-row-date",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment["default"], {
                    fromNow: true,
                    ago: true,
                    children: notification.created_at
                  })
                }), notification.read_at === null && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "notification-bullet"
                })]
              })]
            })
          })
        }, i));
      }
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "notification-box-page",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "inline-block",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "notification-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "notification-header-title",
          children: notificationsHeadTitle
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "notification-header-mark-read",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: markAllAsReadFunc,
            children: markAllAsReadTitle
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        className: "notification-list",
        style: {
          overflow: 'auto'
        },
        onScroll: handleScrollFunc,
        children: [!notifications && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "notification-loader",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInfiniteScroller["default"], {
          pageStart: 0,
          loadMore: loadMoreFunc,
          hasMore: hasMoreToLoad,
          loader: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "Loading",
              src: _env.cdnStaticUrl + "/frontend/assets/loader.svg",
              style: {
                height: '18px',
                margin: '5px'
              }
            })
          }, 0),
          useWindow: false,
          threshold: 25,
          children: items
        })]
      })]
    })
  });
};

NotificationsMobile.propTypes = process.env.NODE_ENV !== "production" ? {
  notificationsHeadTitle: _propTypes["default"].string,
  markAllAsReadTitle: _propTypes["default"].string,
  markAllAsReadFunc: _propTypes["default"].func.isRequired,
  markAsReadFunc: _propTypes["default"].func.isRequired,
  handleScrollFunc: _propTypes["default"].func.isRequired,
  notifications: _propTypes["default"].array,
  loadMoreFunc: _propTypes["default"].func.isRequired,
  hasMoreToLoad: _propTypes["default"].bool
} : {};
var _default = NotificationsMobile;
exports["default"] = _default;
module.exports = exports.default;