import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/loading/Loading';
import Comment from '../comment/Comment';
import CommentPost from '../commentPost/CommentPost';

const CommentMobile = ({
  post,
  isLoading,
  comments,
}) => {
  const commentsList = () => {
    if (comments.length > 0) {
      return comments.map((comment) => (
        <div className="col-sm-12 no-padding" key={comment.id}>
          <Comment comment={comment} companyPostId={post ? post.company_id : ''} />
        </div>
      ));
    }
  };

  if (isLoading) {
    return (
      <div className="mobile-loading">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {commentsList()}
      <CommentPost postId={post.id} />
    </div>
  );
};

CommentMobile.propTypes = {
  comments: PropTypes.array.isRequired,
  post: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default CommentMobile;
