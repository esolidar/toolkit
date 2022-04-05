import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Icon from '../../../elements/icon';
import Button from '../../../elements/button';

const CreateComment = props => {
  const {
    comment,
    env,

    onSubmitComment,
    loadingNewComment,
    onChange,
    thumb,
  } = props;

  const intl = useIntl();

  const addMessage = (e, isMobile) => {
    if (e.keyCode === 13 && e.shiftKey === false && !isMobile) {
      onSubmitComment(e);
    } else if (e.keyCode !== 13 && e.shiftKey === false && isMobile) {
      onSubmitComment(e);
    }
  };

  return (
    <div className="comments">
      <div className="create-comment">
        <div className="title">
          <FormattedMessage id="crowdfunding.create.comment" />
        </div>
        <div className="textarea">
          <div className="thumb">
            <img src={thumb} alt="user-thumb" />
          </div>
          <textarea
            data-testid="create-comment"
            className="input"
            style={{
              backgroundImage: loadingNewComment
                ? `url(${env}/frontend/assets/loader.svg)`
                : intl.formatMessage({ id: 'commentHere.image' }),
              backgroundSize: loadingNewComment ? '16px' : '48px',
              backgroundColor: 'transparent',
            }}
            name="comment"
            onChange={onChange}
            onKeyDown={e => addMessage(e, false)}
            disabled={loadingNewComment}
            value={comment}
            placeholder={intl.formatMessage({ id: 'commentHere' })}
            maxLength="500"
          />
          <Button
            ghost
            extraClass="primary-full"
            icon={<Icon name="Send" />}
            onClick={e => addMessage(e, true)}
            type="icon"
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComment;

CreateComment.propTypes = {
  comment: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  env: PropTypes.string.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loadingNewComment: PropTypes.bool.isRequired,
  thumb: PropTypes.string.isRequired,
};
