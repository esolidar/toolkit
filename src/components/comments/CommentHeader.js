import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import { FormattedMessage } from 'react-intl';
import cdnStaticUrl from '../../constants/env';

const CommentHeader = ({ comment, deleteComment, newThumb, newName, user }) => (
  <div className="header">
    <img alt="Thumb" src={newThumb} />
    <div className="company-name">{newName}</div>
    {user && user.id === comment.user_id && (
      <Dropdown id="options-reply" className="options-reply options-dropdown">
        <Dropdown.Toggle className="options-dropdown">
          <img alt="Open" src={`${cdnStaticUrl}/frontend/icons/caret.png`} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>
            <button onClick={deleteComment} type="button">
              <FormattedMessage id="crowdfunding.delete.comments" defaultMessage="Delete comment" />
            </button>
          </Dropdown.Header>
        </Dropdown.Menu>
      </Dropdown>
    )}
    <div className="date">
      <Moment utc toNow ago>
        {comment.created_at || comment.dateAdded}
      </Moment>
    </div>
  </div>
);

CommentHeader.propTypes = {
  comment: PropTypes.object,
  deleteComment: PropTypes.func.isRequired,
  newThumb: PropTypes.string,
  newName: PropTypes.string,
  user: PropTypes.object,
};

export default CommentHeader;
