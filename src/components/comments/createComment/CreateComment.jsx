import { FormattedMessage, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const CreateComment = props => {
  const {
    comment,
    env,

    onSubmitComment,
    loadingNewComment,
    onChange,
    thumb,
  } = props;

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
          <FormattedMessage id="crowdfunding.create.comment" defaultMessage="Write a comment" />
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
                : useIntl().formatMessage({
                    id: 'commentHere.image',
                    defaultMessage: `url(${env}/frontend/assets/send-comment.png)`,
                  }),
              backgroundSize: loadingNewComment ? '16px' : '48px',
              backgroundColor: 'transparent',
            }}
            name="comment"
            onChange={onChange}
            onKeyDown={e => addMessage(e, false)}
            disabled={loadingNewComment}
            value={comment}
            placeholder={useIntl().formatMessage({
              id: 'commentHere',
              defaultMessage: 'Leave a comment',
            })}
            maxLength="500"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="mr-1 d-lg-none mt-3"
            onClick={e => addMessage(e, true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComment;

CreateComment.propTypes = {
  comment: PropTypes.array,
  env: PropTypes.object.isRequired,

  onSubmitComment: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loadingNewComment: PropTypes.bool.isRequired,
  thumb: PropTypes.string.isRequired,
};
