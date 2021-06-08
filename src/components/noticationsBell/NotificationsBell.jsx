import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../loading';
import Button from '../../elements/button';
import { cdnStaticUrl, cdnUploadsUrl } from '../../constants/env';

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
      if (notification.id) {
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
                className={`notification-row-box ${notification.read_at === null ? 'unread' : ''}`}
              >
                <img
                  alt="Thumb"
                  src={
                    notification.photo?.thumb
                      ? notification.photo.thumb
                      : `${cdnUploadsUrl}/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png`
                  }
                />
                <div>
                  <div className="text" dangerouslySetInnerHTML={{ __html: notification.text }} />
                  <Moment fromNow ago className="date">
                    {notification.created_at}
                  </Moment>
                </div>
              </div>
            </a>
          </li>
        );
      }
    });
  }

  return (
    <>
      <Dropdown id="notification-box" className="notification-box" onToggle={onToggle}>
        <Dropdown.Toggle className="notification-icon">
          <img
            src={`${cdnStaticUrl}/frontend/icons/ic-notification-bell.svg`}
            className="notification-image"
            alt="Notifications"
          />
          {+totalNotifications > 0 && (
            <span className="number">{+totalNotifications > 100 ? '+99' : totalNotifications}</span>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu flip align="right">
          <div className="notification-header">
            <span className="notification-header-title">{notificationsHeadTitle}</span>
            <Button
              extraClass="link"
              className="notification-header-mark-read"
              onClick={markAllAsReadFunc}
              text={markAllAsReadTitle}
            />
          </div>
          <ul
            className="notification-list"
            style={{ overflow: 'auto' }}
            onScroll={handleScrollFunc}
          >
            {!notifications && (
              <div className="notification-loader">
                <Loading />
              </div>
            )}
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMoreFunc}
              hasMore={hasMoreToLoad}
              loader={
                <div key={0} className="text-center">
                  <img
                    alt="Loading"
                    src={`${cdnStaticUrl}/frontend/assets/loader.svg`}
                    style={{ height: '18px', margin: '5px' }}
                  />
                </div>
              }
              useWindow={false}
              threshold={25}
            >
              {items}
            </InfiniteScroll>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

NotificationsBell.propTypes = {
  notificationsHeadTitle: PropTypes.string,
  totalNotifications: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  markAllAsReadTitle: PropTypes.string,
  onToggle: PropTypes.func,
  markAllAsReadFunc: PropTypes.func.isRequired,
  markAsReadFunc: PropTypes.func.isRequired,
  handleScrollFunc: PropTypes.func.isRequired,
  notifications: PropTypes.array,
  loadMoreFunc: PropTypes.func.isRequired,
  hasMoreToLoad: PropTypes.bool,
};

export default NotificationsBell;
