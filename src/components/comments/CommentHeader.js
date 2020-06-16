import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import { FormattedMessage } from 'react-intl';

const CommentHeader = ({
  comment, deleteComment, newThumb, newName,
}) => (
  <div className="header">
    <img alt="Thumb" src={newThumb} />
    <div className="company-name">{newName}</div>
    <Dropdown
      id="options-reply"
      className="options-reply options-dropdown"
    >
      <Dropdown.Toggle className="options-dropdown">
        <img alt="Open" src="https://s3-eu-west-1.amazonaws.com/esolidar.com/frontend/icons/caret.png" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>
          <button
            onClick={deleteComment}
            type="button"
          >
            <FormattedMessage
              id="crowdfunding.delete.comments"
              defaultMessage="Delete comment"
            />
          </button>
        </Dropdown.Header>
      </Dropdown.Menu>
    </Dropdown>
    <div className="date">
      <Moment utc toNow ago>{comment.created_at}</Moment>
    </div>
  </div>
);

CommentHeader.propTypes = {
  comment: PropTypes.object,
  deleteComment: PropTypes.func.isRequired,
  newThumb: PropTypes.string,
  newName: PropTypes.string,
};

export default CommentHeader;
