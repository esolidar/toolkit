import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../loading';
import Button from '../../elements/button';
import { cdnStaticUrl } from '../../constants/env';
import isDefined from '../../utils/isDefined';

const NotificationsBell = ({
  notificationsHeadTitle,
  totalNotifications,
  onToggle,
  markAllAsReadTitle,
  markAllAsReadFunc,
  handleScrollFunc,
  notifications,
  loadMoreFunc,
  hasMoreToLoad = false,
  markAsReadFunc,
  showMarkAllAsReadBtn = true,
}) => {
  const items = [];

  notifications.forEach(item => {
    const notification = item;

    if (!notification.id && !notification.notification_id) return;

    if (isDefined(notification.notification_title_name)) {
      notification.id = notification.notification_id;
      notification.url = notification.notification_url;
      notification.title = notification.notification_url_title;
      notification.target = '_self';
      notification.photo = { thumb: notification.notification_image };
      notification.text = `${notification.notification_title_name} ${notification.notification_description}`;
      notification.created_at = notification.notification_time;
      notification.read_at = notification.notification_read === '0' ? null : '1';
    }
  });

  notifications.map(notification => {
    items.push(
      <li key={notification.id} className="notification-row" data-testid="notification-row">
        <a
          href="#"
          target={notification.url === '#' ? '_self' : notification.target}
          title={notification.title}
          onClick={() => markAsReadFunc(notification)}
          className="btn-markAsRead"
        >
          <div
            className={`notification-row-box ${notification.read_at === null ? 'unread' : ''}`}
            data-testid="notification-row-box"
          >
            <img
              alt={notification.notification_image_alt || 'User photo'}
              src={
                notification.photo?.thumb
                  ? notification.photo.thumb
                  : `${cdnStaticUrl}/frontend/assets/no-image.png`
              }
            />
            <div>
              <div
                className="text"
                data-testid="text"
                dangerouslySetInnerHTML={{ __html: notification.text }}
              />
              <Moment fromNow ago className="date">
                {notification.created_at}
              </Moment>
            </div>
          </div>
        </a>
      </li>
    );
  });

  const hasUnreadNotifications = notifications.some(item => item.read_at === null);

  return (
    <>
      <Dropdown id="notification-box" className="notification-box" onToggle={onToggle}>
        <Dropdown.Toggle className="notification-icon" role="button">
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
            {showMarkAllAsReadBtn && hasUnreadNotifications && (
              <Button
                extraClass="link"
                className="notification-header-mark-read"
                onClick={markAllAsReadFunc}
                text={markAllAsReadTitle}
              />
            )}
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
  markAllAsReadFunc: PropTypes.func,
  markAsReadFunc: PropTypes.func,
  showMarkAllAsReadBtn: PropTypes.bool,
  handleScrollFunc: PropTypes.func.isRequired,
  notifications: PropTypes.array,
  loadMoreFunc: PropTypes.func.isRequired,
  hasMoreToLoad: PropTypes.bool,
};

export default NotificationsBell;
