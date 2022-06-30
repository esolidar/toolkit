import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import Props from './ViewComment.types';
import ProfileAvatar from '../../../components/profileAvatar';
import ReadMoreText from '../../../components/readMoreText';
import Dropdown from '../../../elements/dropdown';
import Button from '../../../elements/button';
import Icon from '../../../elements/icon';
import dateDistance from '../../../utils/dateDistance';

const ViewComment = ({ thumb, name, date, dropdown, text, social, reply }: Props) => {
  const intl: IntlShape = useIntl();
  return (
    <div className="view-comment">
      <div className="view-comment__header">
        <ProfileAvatar
          thumb={thumb}
          name={name}
          date={dateDistance({ date, formatMessage: intl.formatMessage })}
          thumbSize="lg"
        />
        {dropdown.length > 0 && <Dropdown items={dropdown} toggleIcon="MoreVertical" />}
      </div>

      <div className="view-comment__content">
        <ReadMoreText text={text} charLimit="512" />
      </div>
      {social && (
        <>
          <div className="view-comment__social view-comment--inline">
            <div>0 likes</div>
            <div>0 comments</div>
          </div>
          <div className="view-comment__line" />
          <div className="view-comment--inline">
            <Button
              extraClass="secondary"
              ghost
              theme="dark"
              text="Like"
              iconLeft={<Icon name="ThumbsUp" />}
            />
            <Button
              extraClass="secondary"
              ghost
              theme="dark"
              text="Comment"
              iconLeft={<Icon name="Comment" />}
            />
            <Button
              extraClass="secondary"
              ghost
              theme="dark"
              text="Share"
              iconLeft={<Icon name="Share3" />}
            />
          </div>
        </>
      )}
      {reply && <Button extraClass="secondary" text="Reply" />}
    </div>
  );
};

export default ViewComment;
