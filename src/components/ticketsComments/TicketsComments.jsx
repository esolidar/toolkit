/* eslint-disable camelcase */

import React from 'react';
import { useIntl } from 'react-intl';
import Moment from 'react-moment';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../elements/button';
import FileCard from '../fileCard';
import ProfileAvatar from '../profileAvatar';
import Popover from '../../elements/popover';
import Tooltip from '../../elements/tooltip';

const TicketsComments = ({ ticketComments, activePage, total, handlePageChange, supportTag }) => {
  const intl = useIntl();
  const createHtmlMarkup = text => ({ __html: text });
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let reverse = false;

  const renderComments = () =>
    ticketComments.map((ticketComment, index) => {
      const {
        text,
        ticket_id: ticketId,
        created_at: createdAt,
        attachment_files: files = [],
      } = ticketComment?.project_comment || ticketComment;
      const user = ticketComment?.project_comment?.user || ticketComment.user;
      let thumb = '';
      let userName = '';
      if (user) {
        thumb = user?.institution?.thumbs?.thumb || user.thumbs.thumb;
        userName = user?.institution?.sigla || user.name;
      }
      const lastUserId =
        ticketComments[index - 1]?.project_comment?.user_id || ticketComments[index - 1]?.user_id;

      if (index > 0 && user.id !== lastUserId) {
        reverse = !reverse;
      }

      const isImage = type => {
        const typeImages = ['jpg', 'jpeg', 'png', 'gif'];
        return typeImages.includes(type);
      };

      return (
        <div className={classNames('ticketCard__comment', { reverse })} key={ticketId}>
          {user && (
            <div>
              <Popover
                popoverHeaderChildren={
                  supportTag && (
                    <span className="support">
                      {intl.formatMessage({ id: 'tickets.supportTag' })}
                    </span>
                  )
                }
                popoverBodyChildren={<ProfileAvatar thumb={thumb} name={userName} />}
                overlayTrigger={<ProfileAvatar thumb={thumb} />}
              />
            </div>
          )}
          <div className="ticketCard__comment-content">
            <div className="ticketCard__comment-text">
              {text && (
                <div className="ticketCard__comment-text-content">
                  {text.split('\n').map((item, index) => (
                    <div
                      dangerouslySetInnerHTML={createHtmlMarkup(
                        item.replace(urlRegex, url => `<a href="${url}" target="_blank">${url}</a>`)
                      )}
                      key={index}
                    />
                  ))}
                </div>
              )}
            </div>
            {files.length > 0 &&
              files.map((file, index) => (
                <FileCard
                  showDownloadButton={true}
                  title={file.name}
                  image={isImage(file.file_type) && file.file}
                  file={file.file}
                  size={file.file_size || file.size}
                  key={index}
                />
              ))}
            <Tooltip
              tooltipBodyChild={
                <Moment utc fromNow ago>
                  {createdAt}
                </Moment>
              }
              overlay={
                <Moment utc tz={moment.tz.guess()} format="YYYY-MM-DD HH:mm:ss">
                  {createdAt}
                </Moment>
              }
            />
          </div>
        </div>
      );
    });

  return (
    <div>
      {renderComments()}
      {ticketComments.length < total && (
        <div>
          <Button
            extraClass="dark"
            className="ml-auto mr-auto"
            onClick={() => handlePageChange(activePage)}
            text={intl.formatMessage({ id: 'readmore' })}
          />
        </div>
      )}
    </div>
  );
};

TicketsComments.propTypes = {
  ticketComments: PropTypes.array,
  activePage: PropTypes.number,
  total: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
  supportTag: PropTypes.bool,
};

export default TicketsComments;
