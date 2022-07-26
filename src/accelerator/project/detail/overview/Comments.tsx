import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import ViewComment from '../../../comment/view';
import CreateComment from '../../../comment/create';
import EmptyState from '../../../../components/emptyState';
import Container from '../../../../elements/container';
import CreateCommentProps from '../../../comment/create/CreateComment.types';

interface Props {
  createCommentArgs: CreateCommentProps;
  comments: any;
}

const Comments = ({ createCommentArgs, comments }: Props) => {
  const intl: IntlShape = useIntl();

  return (
    <div className="content-comments">
      <CreateComment
        placeholderText={intl.formatMessage({ id: 'commentHere' })}
        {...createCommentArgs}
      />

      {comments?.length > 0 ? (
        <>
          {comments.map((item, key) => (
            <div key={key}>
              <ViewComment {...item} />
            </div>
          ))}
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

export default Comments;
