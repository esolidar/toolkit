import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Button from '../../elements/button';
import NoteSingle from './NoteSingle';
import Props from './Note.types';

export const Note: FC<Props> = ({
  noteSingleArgs,
  handleViewAllReplies,
  handleViewChildReplies,
}: Props) => {
  const intl: IntlShape = useIntl();
  const {
    note: { replies = [], replies_count: repliesCount, id, user },
  } = noteSingleArgs;

  return (
    <div className="view-comment">
      <NoteSingle
        {...noteSingleArgs}
        parentComment={{ parentId: id, parentName: `@${user.name} ` }}
      />

      {replies?.length > 0 && (
        <>
          <div className="view-comment__note__line" />

          {replies.map((item, key) => (
            <React.Fragment key={key}>
              <NoteSingle
                note={item}
                handleDeleteNote={noteSingleArgs.handleDeleteNote}
                parentComment={{ parentId: item.id, parentName: `@${item.user.name} ` }}
                createCommentArgs={noteSingleArgs.createCommentArgs}
                reply={true}
              />

              {item.replies && (
                <>
                  <div className="view-comment__note__secondLevel">
                    {item.replies.map((secondLevelReply, keySecondLevelReply) => (
                      <NoteSingle
                        handleDeleteNote={noteSingleArgs.handleDeleteNote}
                        key={keySecondLevelReply}
                        parentComment={{
                          parentId: item.id,
                          parentName: `@${secondLevelReply.user.name} `,
                        }}
                        note={secondLevelReply}
                        createCommentArgs={noteSingleArgs.createCommentArgs}
                        reply={true}
                      />
                    ))}

                    {item.replies.length !== item.replies_count && (
                      <Button
                        dataTestId={`view-replies${item.id}`}
                        extraClass="link"
                        onClick={() => handleViewChildReplies(item.id)}
                        text={intl.formatMessage(
                          { id: 'toolkit.comments.number.replies' },
                          { value: item.replies_count - item.replies.length }
                        )}
                      />
                    )}
                  </div>
                </>
              )}
            </React.Fragment>
          ))}

          {replies.length !== repliesCount && (
            <Button
              dataTestId={`view-allReplies${id}`}
              extraClass="link"
              onClick={() => handleViewAllReplies(id)}
              text={intl.formatMessage({ id: 'toolkit.comments.view.replies' })}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Note;
