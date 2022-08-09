import React, { Fragment } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Button from '../../../../elements/button';
import Container from '../../../../elements/container';
import CreateComment from '../../../comment/create';
import EmptyState from '../../../../components/emptyState';
import Loading from '../../../../components/loading';
import ViewComment from '../../../comment/view';
import LoginToInteract from '../../../../components/loginToInteract';
import CreateCommentProps from '../../../comment/create/CreateComment.types';

interface Props {
  createCommentArgs: CreateCommentProps;
  comments: any;
  commentsData: any;
  companyName: string;
  isAdmin: boolean;
  isLoggedIn?: boolean;
  closedCommentRef: any;
  toggleLoginModal?(): void;
  handleDeleteComment(): void;
  handleViewAllReplies(): void;
}

const CommentsTab = ({
  createCommentArgs,
  comments,
  commentsData,
  companyName,
  isAdmin,
  isLoggedIn = true,
  closedCommentRef,
  toggleLoginModal,
  handleDeleteComment,
  handleViewAllReplies,
}: Props) => {
  const intl: IntlShape = useIntl();

  if (commentsData?.isLoading)
    return (
      <div className="loading-comments">
        <Loading />
      </div>
    );

  return (
    <div className="content-comments">
      {isLoggedIn ? (
        <CreateComment
          placeholderText={intl.formatMessage({ id: 'commentHere' })}
          {...{ ...createCommentArgs, type: 'comment', galleryType: 'grid' }}
        />
      ) : (
        <LoginToInteract onClick={toggleLoginModal} />
      )}

      {comments?.pages && comments?.pages[0]?.data?.length > 0 ? (
        <>
          {comments.pages.map((page, index) => (
            <Fragment key={index}>
              {page.data.map(comment => (
                <ViewComment
                  closedCommentRef={closedCommentRef}
                  key={comment.id}
                  isAdmin={isAdmin}
                  companyName={companyName}
                  createCommentArgs={createCommentArgs}
                  handleDeleteComment={handleDeleteComment}
                  handleViewAllReplies={handleViewAllReplies}
                  toggleLoginModal={toggleLoginModal}
                  isLoggedIn={isLoggedIn}
                  {...comment}
                />
              ))}
            </Fragment>
          ))}
          {commentsData?.hasNextPage && (
            <Button
              extraClass="link"
              onClick={() => commentsData?.fetchNextPage()}
              text={intl.formatMessage({ id: 'toolkit.comments.viewMore.comments' })}
            />
          )}
        </>
      ) : (
        <Container>
          <EmptyState
            body={
              isAdmin
                ? intl.formatMessage({ id: 'toolkit.comments.empty.owner.body' })
                : intl.formatMessage({ id: 'toolkit.comments.empty.body' })
            }
            title={
              isAdmin
                ? intl.formatMessage({ id: 'toolkit.comments.empty.owner.title' })
                : intl.formatMessage({ id: 'toolkit.comments.empty.title' })
            }
            image="https://s3.eu-west-1.amazonaws.com/esolidar.com/frontend/assets/illustrations/sm/colored/comments.svg"
          />
        </Container>
      )}
    </div>
  );
};

export default CommentsTab;
