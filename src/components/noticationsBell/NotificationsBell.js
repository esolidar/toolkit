import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../loading/Loading';

const NotificationsBell = ({
  notificationsHeadTitle,
  totalNotifications,
  onToggle,
  markAllAsReadTitle,
  markAllAsReadFunc,
  handleScrollFunc,
  notifications,
  loadMoreFunc,
  hasMoreToLoad,
  markAsReadFunc,
}) => {
  const items = [];
  const notificationsList = notifications;
  if (notificationsList.length > 0) {
    notificationsList.map((notification, i) => {
      if (notification) {
        items.push(
          <li key={i} className="notification-row">
            <a
              href="#"
              target={notification.url === '#' ? '_self' : notification.target}
              title={notification.title}
              onClick={() => markAsReadFunc(notification)}
              className="btn-markAsRead"
            >
              <div
                className={(notification.read_at === null) ? 'notification-row-box unread' : 'notification-row-box'}
              >
                <div className="notification-thumb">
                  <img alt="Thumb" src={notification.photo.thumb ? notification.photo.thumb : 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png'} />
                </div>
                <div>
                  <span className="notification-row-text">
                    <div dangerouslySetInnerHTML={{ __html: notification.text }} />
                  </span>
                  <span className="notification-row-date">
                    <Moment fromNow ago>{notification.created_at}</Moment>
                  </span>
                  {(notification.read_at === null)
                    && <div className="notification-bullet" />}
                </div>
              </div>
            </a>
          </li>,
        );
      }
    });
  }


  return (
    <div className="inline-block">
      <Dropdown id="notification-box" className="notification-box" onToggle={onToggle}>
        <Dropdown.Toggle className="notification-icon">
          {+totalNotifications > 0
            && (
              <div className="notification-unread-count">
                {+totalNotifications > 100 ? '+99' : totalNotifications}
              </div>
            )}
          <img
            src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-notification-bell.svg"
            className="notification-image"
            alt="Notifications"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="notification-header">
            <span className="notification-header-title">
              {notificationsHeadTitle}
            </span>
            <span className="notification-header-mark-read">
              <button
                type="button"
                onClick={markAllAsReadFunc}
              >
                {markAllAsReadTitle}
              </button>
            </span>
          </div>
          <ul
            className="notification-list"
            style={{ height: '500px', overflow: 'auto' }}
            onScroll={handleScrollFunc}
          >
            {!notifications
              && (
                <div className="notification-loader">
                  <Loading />
                </div>
              )}
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMoreFunc}
              hasMore={hasMoreToLoad}
              loader={(
                <div className="text-center">
                  <img
                    alt="Loading"
                    src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/assets/loader.svg"
                    style={{ height: '18px', margin: '5px' }}
                  />
                </div>
              )}
              useWindow={false}
              threshold={25}
            >
              {items}
            </InfiniteScroll>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};


NotificationsBell.propTypes = {
  notificationsHeadTitle: PropTypes.string,
  totalNotifications: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  markAllAsReadTitle: PropTypes.string,
  onToggle: PropTypes.func,
  markAllAsReadFunc: PropTypes.func.isRequired,
  markAsReadFunc: PropTypes.func.isRequired,
  handleScrollFunc: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf({
    code: PropTypes.number,
    data: PropTypes.shape({
      data: PropTypes.array,
      current_page: PropTypes.number,
      total: PropTypes.number,
      last_page: PropTypes.number,
    }),
  }),
  loadMoreFunc: PropTypes.func.isRequired,
  hasMoreToLoad: PropTypes.bool,
};

export default NotificationsBell;
