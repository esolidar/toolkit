import React, { FC, useState } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import classnames from 'classnames';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import ShareModal from '../shareModal';
import Props from './Follow.types';

const Follow: FC<Props> = ({
  follower,
  href,
  onClickCopyToClipboard,
  disabled = false,
  onClickFollow,
  onClickUnFollow,
  title,
}: Props): JSX.Element => {
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
            setFollowButtonText(intl.formatMessage({ id: 'toolkit.unfollow' }));
          }}
          onMouseLeave={() => {
            setFollowButtonText(intl.formatMessage({ id: 'toolkit.following' }));
          }}
          onFocus={() => {}}
        >
          <Button
            className={classnames(
              { 'follow-btn': !follower.follow },
              { 'following-btn': follower.follow }
            )}
            text={follower.follow ? followButtonText : intl.formatMessage({ id: 'toolkit.follow' })}
            theme={follower.follow ? 'dark' : 'light'}
            type="button"
            extraClass=""
            disabled={disabled}
            ghost={!!follower.follow}
            onClick={() => {
              if (follower.follow) onClickUnFollow();
              else onClickFollow();
            }}
          />
        </div>
        <div>
          <FormattedMessage
            id="toolkit.followers.count"
            values={{ value: follower?.followers || 0 }}
          />
        </div>
        <div className="follow-component__share">
          <Button
            text={intl.formatMessage({ id: 'share' })}
            theme="light"
            type="button"
            extraClass="primary-full"
            fullWidth={false}
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
