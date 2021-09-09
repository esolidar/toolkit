import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Props from './ProfileAvatar.types';

const ProfileAvatar: FC<Props> = ({ isNameBold = false, name, thumb }: Props): JSX.Element => {
  const intl = useIntl();
  const alt = name || intl.formatMessage({ id: 'toolkit.profile.picture' });

  return (
    <div className="profile-avatar" data-testid="profile-avatar">
      {thumb && <img className="profile-avatar__thumb" src={thumb} alt={alt} />}
      {name && <div className={`profile-avatar__name ${isNameBold ? 'bold' : ''}`}>{name}</div>}
    </div>
  );
};

export default ProfileAvatar;
