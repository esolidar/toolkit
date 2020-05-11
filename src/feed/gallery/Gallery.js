import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { FormattedMessage } from 'react-intl';
import Tooltip from 'rc-tooltip';
import { Modal, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import CommentMobile from '../commentMobile/CommentMobile';
import CommentPost from '../commentPost/CommentPost';
// import PostOptions from '../postOptions/PostOptions';
// import GalleryBox from '../galleryBox/GalleryBox';
import Comment from '../comment/Comment';

const Gallery = ({
  post,
  comments,
  lovesCount,
  loves,
  commentsCount,
  highlightedOverlayText,
  feedType,
  lovesList,
  loveClick,
  openCommentsMobile,
  nextPage,
  queryCommentId,
  queryResponseId,
  showMobileComments,
  closeModal,
}) => {
  const getEmployeeName = (companyId, user) => {
    const workEmails = user ? user.work_email : [];
    if (companyId && workEmails.length > 0) {
      return find(workEmails, (employee) => employee.company_id === companyId) ? find(workEmails, (employee) => employee.company_id === companyId).name : `${user.firstName} ${user.lastName}`;
    }
    return `${user.firstName} ${user.lastName}`;
  };

  const renderText = () => (
    <div dangerouslySetInnerHTML={{ __html: post.text }} />
  );

  const userLoves = () => {
    if (lovesList.length > 0) {
      return lovesList.map((user) => (
        <div key={user.user_id}>
          {user.first_name}
          {' '}
          {user.last_name}
        </div>
      ));
    }
    return (
      <div>
        <FormattedMessage
          id="feed.loves.no-loves"
          defaultMessage="No loves"
        />
      </div>
    );
  };

  const renderUserLoves = () => (
    <span>{userLoves()}</span>
  );

  const loadMoreComments = () => {
    if ((post.comments_count) > 3 && (comments.length < commentsCount)) {
      return (
        <div className="more-comments">
          <button type="button" className="btn btn-load-more-comments" onClick={nextPage}>
            <FormattedMessage
              id="feed.seemore.comments"
              defaultMessage="See more comments"
            />
          </button>
        </div>
      );
    }
  };

  const commentsList = () => {
    if (comments.length > 0) {
      return comments.map((comment) => (
        <div className="col-sm-12 no-padding" key={comment.id}>
          <Comment
            publicPost={post.public}
            comment={comment}
            companyPostId={post.company_id}
            queryCommentId={queryCommentId}
            queryResponseId={queryResponseId}
          />
        </div>
      ));
    }
  };

  const loggedUser = localStorage.use ? JSON.parse(localStorage.user).id : '';
  let thumb;
  let userName;
  let options;

  if (+(post.as_company) === 1) {
    if (post.company) {
      thumb = post.company ? post.company.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png';
      userName = post.company.name;
    } else {
      thumb = localStorage.company ? JSON.parse(localStorage.company).thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png';
      userName = localStorage.company ? JSON.parse(localStorage.company).name : '';
    }
  } else if (post.user_id === loggedUser) {
    const user = localStorage.user ? JSON.parse(localStorage.user) : {};
    thumb = JSON.parse(localStorage.user).thumbs ? JSON.parse(localStorage.user).thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png';
    userName = getEmployeeName(post.company_id, user);
  } else {
    thumb = post.user ? post.user.thumbs.thumb : 'https://static.esolidar.com/frontend/assets/no-image.png';
    userName = getEmployeeName(post.company_id, post.user);
  }

  if ((post.user_id === loggedUser && +(post.as_company) === 0) || localStorage.role !== 'null') {
    options = true;
  } else {
    options = false;
  }

  return (
    <div className="post">
      <div className="col-sm-12 header">
        <img alt="Thumb" className="thumb" src={thumb} />
        <div className="user-post">{userName}</div>
        <div className="status">
          <Moment utc fromNow ago>{post.created_at}</Moment>
          <img
            src={post.public === 1 ? 'https://static.esolidar.com/frontend/icons/ic-public.png' : 'https://static.esolidar.com/frontend/icons/ic-private.png'}
            alt={post.public === 1 ? 'public' : 'private'}
          />
          {(post.highlighted === 1) && (
            <Tooltip placement="top" overlay={highlightedOverlayText}>
              <img src="https://static.esolidar.com/frontend/icons/ic-highlight.svg" alt="Highlighted" />
            </Tooltip>
          )}
          {(options && feedType === 'myFeed')
            && (
              <div>
                {/* <PostOptions post={post} /> */}
              </div>
            )}
        </div>
      </div>
      <div className="post-item">
        <div className={`before-update before-update-${post.id}`}>
          {renderText()}
        </div>
      </div>
      <div className="post-gallery">
        {/*
        <GalleryBox
          images={post.images.map(({ thumbs, image }) => ({
            src: image,
            thumbnail: thumbs.detail,
            srcset: [
              thumbs.standard,
            ],
          }))}
          showThumbnails
        />
        */}
      </div>
      <div className="loves-comments">
        <div className="loves-count">
          <Tooltip placement="top" overlay={renderUserLoves()}>
            <button type="button" onClick={loveClick} className="btn-love">
              <img
                id={`love-${post.id}`}
                src={loves.my === 1 ? 'https://static.esolidar.com/frontend/icons/ic-love-active.png' : 'https://static.esolidar.com/frontend/icons/ic-love.png'}
                alt="Loves"
              />
              <div className="text">
                <FormattedMessage
                  id="feedpost.loves"
                  defaultMessage={`{value: PropTypes.number,ber} {value, plural,
                                    one {love}
                                    other {loves}
                                  }`}
                  values={{ value: lovesCount }}
                />
              </div>
            </button>
          </Tooltip>
        </div>
        <div className="comments-count hidden-xs">
          <img
            src="https://static.esolidar.com/frontend/icons/ic-comment.svg"
            alt="Comments"
          />
          <div className="text">
            <FormattedMessage
              id="feed.post.comments"
              defaultMessage={`{value: PropTypes.number,ber} {value, plural,
                                one {comment}
                                other {comments}
                                many {comments}
                              }`}
              values={{ value: commentsCount }}
            />
          </div>
        </div>
        <div className="comments-count-mobile visible-xs">
          <button type="button" data-post={post.id} onClick={openCommentsMobile}>
            <img
              src="https://static.esolidar.com/frontend/icons/ic-comment.svg"
              alt="Comments"
            />
            <div className="text">
              <FormattedMessage
                id="feed.post.comments"
                defaultMessage={`{value: PropTypes.number,ber} {value, plural,
                                one {comment}
                                other {comments}
                                many {comments}
                              }`}
                values={{ value: commentsCount }}
              />
            </div>
          </button>
        </div>
      </div>
      {loadMoreComments()}
      {commentsList()}
      <CommentPost postId={post.id} companyId={post.company ? post.company.id : null} />
      <Modal show={showMobileComments} onHide={closeModal} className="md-mobile-comments">
        <Modal.Header closeButton>
          <Row>
            <Col>
              <Modal.Title>
                <FormattedMessage
                  id="feed.mobile.comment.title"
                  defaultMessage="Comments"
                />
              </Modal.Title>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="col-xs-12">
              <CommentMobile post={post} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Gallery.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  lovesCount: PropTypes.number,
  loves: PropTypes.object,
  commentsCount: PropTypes.number,
  highlightedOverlayText: PropTypes.string,
  feedType: PropTypes.string,
  lovesList: PropTypes.object.isRequired,
  loveClick: PropTypes.func.isRequired,
  openCommentsMobile: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  queryCommentId: PropTypes.number,
  queryResponseId: PropTypes.number,
  showMobileComments: PropTypes.bool,
  closeModal: PropTypes.bool,
};

export default Gallery;
