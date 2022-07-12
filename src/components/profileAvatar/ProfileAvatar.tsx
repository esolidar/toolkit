/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import classnames from 'classnames';
import Button from '../../elements/button';
import Props from './ProfileAvatar.types';

const ProfileAvatar: FC<Props> = ({
  isNameBold = false,
  name,
  thumb = 'https://static.testesolidar.com/frontend/assets/no-image/user.svg',
  thumbSize = 'lg',
  href,
  buttonUrl,
  buttonText,
  buttonIconRight,
  date,
  className,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const alt: string = name || intl.formatMessage({ id: 'toolkit.profile.picture' });

  const onClick = (): void => {
    if (!href) return;
    window.open(href, '_blank');
  };

  return (
    <div className={`profile-avatar profile-avatar--${thumbSize}`} data-testid="profile-avatar">
      {thumb && (
        <img
          className={classnames('profile-avatar__thumb', { click: href })}
          src={thumb}
          alt={alt}
          onClick={onClick}
        />
      )}
      <div className={classnames('profile-avatar__info', { margin: thumb })}>
        {name && (
          <div
            className={classnames(
              'profile-avatar__info--name',
              'client__primary--color-hover',
              { margin: thumb },
              { bold: isNameBold },
              { click: href },
              className
            )}
            onClick={onClick}
          >
            {name}
          </div>
        )}
        {buttonText && (
          <Button
            className="profile-avatar__info--link"
            href={buttonUrl}
            target="_blank"
            text={buttonText}
            type="link"
            iconRight={buttonIconRight}
          />
        )}
      </div>
      {date && (
        <div
          className={classnames('profile-avatar__date', 'margin', { click: href })}
          onClick={onClick}
        >
          {date}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
