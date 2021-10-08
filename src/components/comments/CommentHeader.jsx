import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'react-intl';
import formatDistance from 'date-fns/formatDistance';
import ProfileAvatar from '../profileAvatar';
import { cdnStaticUrl } from '../../constants/env';
import { getToday } from '../../constants/date';
import getFNSDateLocale from '../../utils/getFNSDateLocale';

const CommentHeader = ({ comment, deleteComment, newThumb, newName, user }) => {
  const intl = useIntl();
  return (
    <div className="header">
      <ProfileAvatar thumb={newThumb} name={newName} isNameBold thumbSize="md" />
      <div className="date-dropdown">
        <div className="date">
          {formatDistance(new Date(comment.created_at || comment.dateAdded), getToday(), {
            addSuffix: true,
            locale: getFNSDateLocale(intl.locale),
          })}
        </div>
        {user && user.id === comment.user_id && (
          <Dropdown id="options-reply" className="options-reply options-dropdown">
            <Dropdown.Toggle className="options-dropdown">
              <img alt="Open" src={`${cdnStaticUrl}/frontend/icons/caret.png`} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Header>
                <button onClick={deleteComment} type="button">
                  <FormattedMessage id="comment.delete" />
                </button>
              </Dropdown.Header>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

CommentHeader.propTypes = {
  comment: PropTypes.object,
  deleteComment: PropTypes.func.isRequired,
  newThumb: PropTypes.string,
  newName: PropTypes.string,
  user: PropTypes.object,
};

export default CommentHeader;
