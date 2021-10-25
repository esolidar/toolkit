import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import formatDistance from 'date-fns/formatDistance';
import ConfirmModal from '../../elements/confirmModal';
import Icon from '../../components/icon';
import ProfileAvatar from '../../components/profileAvatar';
import Props from './CommentHeader.types';
import { getToday } from '../../constants/date';
import getFNSDateLocale from '../../utils/getFNSDateLocale/getFNSDateLocale';

const CommentHeader: FC<Props> = ({
  createdDate,
  isHighlighted = false,
  isPublic = false,
  isUserOwner,
  onClickDelete,
  profileAvatar,
  isPost = false,
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <div className="comment-header" data-testid="header">
      <ProfileAvatar {...profileAvatar} />
      <div className="comment-header__right">
        {formatDistance(new Date(createdDate), getToday(), {
          addSuffix: true,
          locale: getFNSDateLocale(intl.locale),
        })}
        {isPost && !isPublic && (
          <span className="comment-header__right--public">
            <Icon iconClass="icon-lock1" />
          </span>
        )}
        {isPost && isHighlighted && (
          <span className="comment-header__right--highlighted">
            <Icon iconClass="icon-star-full" />
          </span>
        )}
        {(isPublic || isUserOwner) && (
          <DropdownButton
            title={<Icon iconClass="icon-chevron-down" />}
            className="comment-header__right--options"
            menuAlign="right"
          >
            {isUserOwner && (
              <Dropdown.Item className="options-item" as="div">
                <ConfirmModal
                  body={intl.formatMessage({ id: 'toolkit.delete.comment.body' })}
                  cancelText={intl.formatMessage({ id: 'cancel' })}
                  confirmClass="danger-full"
                  confirmText={intl.formatMessage({ id: 'confirm' })}
                  onConfirm={onClickDelete}
                  showCancelButton
                  title={intl.formatMessage({ id: 'comment.delete' })}
                >
                  <button>
                    <FormattedMessage id="delete" />
                  </button>
                </ConfirmModal>
              </Dropdown.Item>
            )}
          </DropdownButton>
        )}
      </div>
    </div>
  );
};

export default CommentHeader;
