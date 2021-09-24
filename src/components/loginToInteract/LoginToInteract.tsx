import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Props from './LoginToInteract.types';

const LoginToInteract: FC<Props> = ({
  text,
  onClick,
  dataTestId = 'login-to-interact',
}: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <div className="login-to-interact" data-testid={dataTestId}>
      <span className="login-to-interact__text">{text}</span>
      <Button
        dataTestId="login-button"
        extraClass="link"
        className="login-to-interact__button"
        onClick={onClick}
        text={intl.formatMessage({ id: 'header.menu.login' })}
      />
    </div>
  );
};

export default LoginToInteract;
