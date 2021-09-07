import React, { FC } from 'react';
import Props from './AccountSelector.types';

const AccountSelector: FC<Props> = ({ onClick, name, email, imageSrc }: Props): JSX.Element => (
  <div
    className="account-selector"
    onClick={onClick}
    data-testid="account-selector"
    onKeyUp={onClick}
  >
    <img className="account-selector__img" src={imageSrc} alt="account-img" />
    <div className="account-selector__text">
      <div className="account-selector__name">{name}</div>
      <div className="account-selector__email">{email}</div>
    </div>
  </div>
);

export default AccountSelector;
