/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import classnames from 'classnames';
import Props from './ProfileAvatar.types';

const ProfileAvatar: FC<Props> = ({
  isNameBold = false,
  name,
  thumb = 'https://static.testesolidar.com/frontend/assets/no-image/user.svg',
  thumbSize = 'lg',
  href,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const alt: string = name || intl.formatMessage({ id: 'toolkit.profile.picture' });

  const onClick = (): void => {
    if (!href) return;
    window.open(href, '_blank');
  };

  return (
    <div className="profile-avatar" data-testid="profile-avatar">
      {thumb && (
        <img
          className={classnames('profile-avatar__thumb', `thumb-${thumbSize}`, { click: href })}
          src={thumb}
          alt={alt}
          onClick={onClick}
        />
      )}
      {name && (
        <div
          className={classnames(
            'profile-avatar__name',
            'client__primary--color-hover',
            { margin: thumb },
            { bold: isNameBold },
            { click: href }
          )}
          onClick={onClick}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
