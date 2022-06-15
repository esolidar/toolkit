import React, { FC, useState } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import classnames from 'classnames';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import ShareModal from '../shareModal';
import FollowProps from './Follow.types';

const Follow: FC<FollowProps> = ({
  followers,
  href,
  onClickCopyToClipboard,
  disabled = false,
  onClickFollow,
  onClickUnFollow,
  title,
}: FollowProps): JSX.Element => {
  const intl: IntlShape = useIntl();
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [followButtonText, setFollowButtonText] = useState<string>(
    intl.formatMessage({ id: 'toolkit.following' })
  );

  return (
    <>
      <div className="follow-component">
        <div
          className="follow-component__button"
          onMouseOver={() => {
            if (!disabled) setFollowButtonText(intl.formatMessage({ id: 'toolkit.unfollow' }));
          }}
          onMouseLeave={() => {
            if (!disabled) setFollowButtonText(intl.formatMessage({ id: 'toolkit.following' }));
          }}
          onFocus={() => {}}
        >
          <Button
            className={classnames(
              { 'follow-btn': !followers.following },
              { 'following-btn': followers.following }
            )}
            text={
              followers.following ? followButtonText : intl.formatMessage({ id: 'toolkit.follow' })
            }
            theme={followers.following ? 'dark' : 'light'}
            disabled={disabled}
            ghost={!!followers.following}
            onClick={() => {
              if (followers.following) onClickUnFollow();
              else onClickFollow();
            }}
          />
        </div>
        <div>
          <FormattedMessage
            id="toolkit.followers.count"
            values={{ value: followers?.followersCount || 0 }}
          />
        </div>
        <div className="follow-component__share">
          <Button
            text={intl.formatMessage({ id: 'share' })}
            extraClass="primary-full"
            ghost
            onClick={() => setIsShareModalOpen(true)}
            iconLeft={<Icon name="Share3" />}
          />
        </div>
      </div>
      <ShareModal
        showFacebook
        showTwitter
        showLinkedin
        stickToBottomMobile
        showEmail
        showWhatsapp
        showCopyToClipboard
        onClickCopyToClipboard={onClickCopyToClipboard}
        onCloseModal={() => setIsShareModalOpen(false)}
        openModal={isShareModalOpen}
        title={title}
        windowLocationHref={href}
      />
    </>
  );
};

export default Follow;
