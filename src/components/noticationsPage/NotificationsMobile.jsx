import PropTypes from 'prop-types';
import Moment from 'react-moment';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../loading';
import { cdnStaticUrl } from '../../constants/env';

const NotificationsMobile = ({
  notificationsHeadTitle,
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
                className={
                  notification.read_at === null
                    ? 'notification-row-box unread'
                    : 'notification-row-box'
                }
              >
                <div className="notification-thumb">
                  <img
                    alt="Thumb"
                    src={
                      notification.photo?.thumb
                        ? notification.photo.thumb
                        : 'https://static.esolidar.com/frontend/assets/no-image.png'
                    }
                  />
                </div>
                <div>
                  <span className="notification-row-text">
                    <div dangerouslySetInnerHTML={{ __html: notification.text }} />
                  </span>
                  <span className="notification-row-date">
                    <Moment fromNow ago>
                      {notification.created_at}
                    </Moment>
                  </span>
                  {notification.read_at === null && <div className="notification-bullet" />}
                </div>
              </div>
            </a>
          </li>
        );
      }
    });
  }

  return (
    <div className="notification-box-page">
      <div className="inline-block">
        <div className="notification-header">
          <span className="notification-header-title">{notificationsHeadTitle}</span>
          <span className="notification-header-mark-read">
            <button type="button" onClick={markAllAsReadFunc}>
              {markAllAsReadTitle}
            </button>
          </span>
        </div>
        <ul className="notification-list" style={{ overflow: 'auto' }} onScroll={handleScrollFunc}>
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
      </div>
    </div>
  );
};

NotificationsMobile.propTypes = {
  notificationsHeadTitle: PropTypes.string,
  markAllAsReadTitle: PropTypes.string,
  markAllAsReadFunc: PropTypes.func.isRequired,
  markAsReadFunc: PropTypes.func.isRequired,
  handleScrollFunc: PropTypes.func.isRequired,
  notifications: PropTypes.array,
  loadMoreFunc: PropTypes.func.isRequired,
  hasMoreToLoad: PropTypes.bool,
};

export default NotificationsMobile;