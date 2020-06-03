/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Dropdown, DropdownButton, Modal,
} from 'react-bootstrap';
import Moment from 'react-moment';
import { FormattedMessage } from 'react-intl';
import Truncate from 'react-truncate';
import { findIndex } from 'lodash';
import CommentPost from '../commentPost/CommentPost';
import getEmployeeName from '../../utils/getEmployeeName';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteCommenId: '',
      showDeleteModal: false,
      readMoreComment: false,
      showEditModal: false,
      commentEditId: '',
      commentEditText: '',
      currentUser: localStorage.user ? JSON.parse(localStorage.user) : [],
    };

    this.updateState = this.updateState.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalEdit = this.toggleModalEdit.bind(this);
    this.renderReplies = this.renderReplies.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      commentUpdated, post,
    } = this.props;

    if (prevProps.commentUpdated !== commentUpdated) {
      if (Object.keys(commentUpdated).length > 0) {
        this.updateState({
          showEditModal: false,
        });
        if (commentUpdated.parent_id) {
          const index = findIndex(post.replies, (o) => o.id === commentUpdated.id);
          if (index >= 0 && post.id === commentUpdated.parent_id) {
            const newReplies = post.replies;
            newReplies[index].text = commentUpdated.text;
            this.renderReplies(newReplies);
          }
        }
      }
    }
  }

  updateState(state) {
    this.setState(state);
  }


  toggleModal(id) {
    const { showDeleteModal } = this.state;
    this.updateState({
      showDeleteModal: !showDeleteModal,
      deleteCommenId: id || '',
    });
  }

  toggleModalEdit(id, text) {
    const { showEditModal } = this.state;
    this.updateState({
      showEditModal: !showEditModal,
      commentEditId: id || '',
      commentEditText: text || '',
    });
  }

  toggleLines(event) {
    event.preventDefault();
    const { readMoreComment } = this.state;
    this.setState({
      readMoreComment: !readMoreComment,
    });
  }


  renderReplies(comments) {
    const { readMoreComment, currentUser } = this.state;
    if (comments.length > 0) {
      return comments.map((comment) => (
        <Col sm={12} className="no-padding" key={comment.id}>
          <div className="comment d-block" id={`comment-${comment.id}`}>
            <Col sm={12} className="header pt-3">
              <img alt="thumb" className="thumb" src={comment.user.thumbs.thumb} />
              <div className="user-post">{getEmployeeName(comment.company_id, comment.user)}</div>
              <div className="status">
                <Moment utc fromNow ago>{comment.created_at}</Moment>
                {(comment.user_id === currentUser.id)
                  && (
                    <div className="post-options-div">
                      <Dropdown id="post-options" className="post-options post-options-dropdown">
                        <DropdownButton alignRight className="post-options-dropdown" id="btn-toggle-edit" title="">
                          <Dropdown.Header>
                            <button
                              type="button"
                              onClick={() => this.toggleModalEdit(comment.id, comment.text)}
                            >
                              <FormattedMessage
                                id="feed.options.edit-comment"
                                defaultMessage="Edit comment"
                              />
                            </button>
                          </Dropdown.Header>

                          {/* (comment.user_id === user.id)
                        && (
                          <Dropdown.Header>
                            <button
                              type="button"
                              onClick={() => this.toggleModal(comment.id)}
                            >
                              <FormattedMessage
                                id="feed.options.delete-comment"
                                defaultMessage="Delete comment"
                              />
                            </button>
                          </Dropdown.Header>
                        ) */}
                        </DropdownButton>
                      </Dropdown>
                    </div>
                  )}
              </div>
            </Col>
            <div
              className="comments-box"
            >
              <Col sm={12} className="comment-text">
                <div className="comment-text-truncate">
                  <div className={`before-update before-update-${comment.id}`}>
                    <Truncate
                      lines={readMoreComment ? 0 : 3}
                      ellipsis={(
                        <span>
                          <a href="#" className="readmore-link" onClick={this.toggleLines}>
                            <FormattedMessage
                              id="feed.post.readmore"
                              defaultMessage="Read more"
                            />
                          </a>
                        </span>
                      )}
                    >
                      {comment.text.split('\n').map((item, index) => (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      ))}
                    </Truncate>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </Col>
      ));
    }
  }

  render() {
    const {
      post,
      user,
      editComment,
      deleteComment,
      onSubmitReply,
      replyValue,
      commentHereText,
      textareaOnChange,
      errorsReply,
      disabled,
    } = this.props;

    const {
      currentUser, showDeleteModal, deleteCommenId, showEditModal, commentEditId, commentEditText,
    } = this.state;

    return (
      <div className="box">
        <div className="post">
          <div className="col-sm-12 header">
            <img alt="Thumb" className="thumb" src={user.thumbs.thumb} />
            <div className="user-post">{getEmployeeName(post.company_id, post.user)}</div>
            <div className="status">
              <Moment utc fromNow ago>{post.created_at}</Moment>
              {(post.user_id === currentUser.id)
                && (
                  <div className="post-options-div">
                    <Dropdown id="post-options" className="post-options post-options-dropdown">
                      <DropdownButton alignRight className="post-options-dropdown" id="btn-toggle-edit-post" title="">

                        <Dropdown.Header>
                          <button
                            type="button"
                            onClick={() => this.toggleModalEdit(post.id, post.text)}
                          >
                            <FormattedMessage
                              id="feed.edit.post.title"
                              defaultMessage="Edit Post"
                            />
                          </button>
                        </Dropdown.Header>

                        {/* (post.user_id === user.id)
                      && (
                        <Dropdown.Header>
                          <button
                            type="button"
                            onClick={() => this.toggleModal(post.id)}
                          >
                            <FormattedMessage
                              id="feed.options.delete-post"
                              defaultMessage="Delete post"
                            />
                          </button>
                        </Dropdown.Header>
                      ) */}
                      </DropdownButton>
                    </Dropdown>
                  </div>
                )}
            </div>
          </div>
          <div className="post-item">
            <div className={`before-update before-update-${post.id}`}>
              {post.text.split('\n').map((item, index) => (
                <span key={index}>
                  {item}
                  <br />
                </span>
              ))}
            </div>
          </div>
          <div className="loves-comments">
            <div className="comments-count hidden-xs">
              <img
                src="https://static.esolidar.com/frontend/icons/ic-comment.svg"
                alt="Comments"
              />
              <div className="text">
                {post.replies && (
                  <span>
                    {post.replies.length}
                    <FormattedMessage
                      id="feed.post.commentPlural"
                      defaultMessage=" Comments"
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
          {post.replies && (this.renderReplies(post.replies))}
          <CommentPost
            postId={post.id}
            onSubmit={onSubmitReply}
            textareaValue={replyValue}
            commentHereText={commentHereText}
            textareaOnChange={textareaOnChange}
            errors={errorsReply}
            disabled={disabled}
          />
        </div>
        <Modal show={showEditModal} onHide={() => this.toggleModalEdit('', '')} className="md-delete">
          <Modal.Header closeButton>
            <Modal.Title>
              <FormattedMessage
                id="projects.comment.edit"
                defaultMessage="Edit Comment"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <form onSubmit={(e) => { e.preventDefault(); this.toggleModalEdit('', ''); editComment(commentEditId); }} method="post">
                  <Col sm={12}>
                    <textarea
                      type="text"
                      id={`text-${commentEditId}`}
                      name="text"
                      className="new-post background-post-comment w-100 b"
                      rows="4"
                      defaultValue={commentEditText}
                      onChange={(e) => textareaOnChange(e)}
                      maxLength={255}
                    />
                    <span>
                      <FormattedMessage
                        id="projects.comment.save"
                        defaultMessage="Save"
                      />
                    </span>
                    <button type="submit" className="btn-esolidar btn-info-full float-right">
                      <FormattedMessage
                        id="projects.comment.save"
                        defaultMessage="Save"
                      />
                    </button>
                  </Col>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={showDeleteModal} onHide={this.toggleModal} className="md-delete">
          <Modal.Header closeButton>
            <Modal.Title>
              <FormattedMessage
                id="projects.comment.delete"
                defaultMessage="Delete Comment"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p>
                  <FormattedMessage
                    id="projects.comment.delete.text"
                    defaultMessage="Are you sure do you want to delete this comment?"
                  />
                </p>
              </div>
              <div className="col-sm-12 text-right">
                <button
                  className="btn btn-submit"
                  type="button"
                  onClick={deleteComment(deleteCommenId)}
                >
                  <FormattedMessage
                    id="company.department.yes"
                    defaultMessage="Yes"
                  />
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  editComment: PropTypes.func,
  deleteComment: PropTypes.func,
  onSubmitReply: PropTypes.func,
  replyValue: PropTypes.string,
  commentHereText: PropTypes.string,
  textareaOnChange: PropTypes.func,
  errorsReply: PropTypes.array,
  commentUpdated: PropTypes.object,
  disabled: PropTypes.bool,
};
