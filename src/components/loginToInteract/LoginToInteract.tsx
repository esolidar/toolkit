import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Button from '../../elements/button';
import Props from './LoginToInteract.types';

const LoginToInteract: FC<Props> = ({ text, onClick, dataTestId }: Props): JSX.Element => {
  const intl = useIntl();

  return (
    <div className="login-to-interact" data-testId={dataTestId || 'login-to-interact'}>
      <span>{intl.formatMessage({ id: text })}</span>
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
