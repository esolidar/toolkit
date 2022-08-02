import React, { Fragment } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Button from '../../../../elements/button';
import Container from '../../../../elements/container';
import CreateComment from '../../../comment/create';
import EmptyState from '../../../../components/emptyState';
import Loading from '../../../../components/loading';
import ViewComment from '../../../comment/view';
import CreateCommentProps from '../../../comment/create/CreateComment.types';

interface Props {
  createCommentArgs: CreateCommentProps;
  comments: any;
  commentsData: any;
  isAdmin: boolean;
  handleDeleteComment(): void;
  handleViewAllReplies(): void;
}

const CommentsTab = ({
  createCommentArgs,
  comments,
  commentsData,
  isAdmin,
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
      <CreateComment
        placeholderText={intl.formatMessage({ id: 'commentHere' })}
        {...{ ...createCommentArgs, type: 'comment', galleryType: 'grid' }}
      />

      {comments?.pages && comments?.pages[0]?.data?.length > 0 ? (
        <>
          {comments.pages.map((page, index) => (
            <Fragment key={index}>
              {page.data.map(comment => (
                <ViewComment
                  key={comment.id}
                  isAdmin={isAdmin}
                  createCommentArgs={createCommentArgs}
                  handleDeleteComment={handleDeleteComment}
                  handleViewAllReplies={handleViewAllReplies}
                  {...comment}
                />
              ))}
            </Fragment>
          ))}
          {commentsData?.hasNextPage && (
            <Button
              extraClass="link"
              onClick={() => commentsData?.fetchNextPage()}
              text={intl.formatMessage({ id: 'business.comments.view.notes' })}
            />
          )}
        </>
      ) : (
        <Container>
          <EmptyState
            body="Peoples comments will be displayed here to share feedback with you"
            title="You have no comments... yet!"
            image="https://s3.eu-west-1.amazonaws.com/esolidar.com/frontend/assets/illustrations/sm/colored/comments.svg"
          />
        </Container>
      )}
    </div>
  );
};

export default CommentsTab;
