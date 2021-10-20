import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import TextField from '../../../elements/textField';
import Button from '../../../elements/button';
import Props from './SetPassword.types';

const SetPassword: FC<Props> = ({ type, onClickSend }: Props): JSX.Element => {
  const intl = useIntl();
  const [email, setEmail] = useState('');

  const handleChangeEmail = ({ target }) => setEmail(target.value);

  return (
    <div className="set-password">
      <div className="set-password__title">
        <h1>
          {intl.formatMessage({
            id: type === 'set' ? 'user.setUpPasswordModal.button' : 'user.setPassword.reset.title',
          })}
        </h1>
      </div>

      <div className="set-password__form">
        <div className="set-password__form--description">
          <div>
            {intl.formatMessage({
              id:
                type === 'set'
                  ? 'user.setPassword.set.subtitle1'
                  : 'user.setPassword.reset.subtitle1',
            })}
          </div>
          <div>
            {intl.formatMessage({
              id:
                type === 'set'
                  ? 'user.setPassword.set.subtitle2'
                  : 'user.setPassword.reset.subtitle2',
            })}
          </div>
        </div>
        <TextField
          className="set-password__form--email-input"
          type="text"
          label={intl.formatMessage({ id: 'user.setPassword.set.email' })}
          value={email}
          onChange={handleChangeEmail}
        />
        <Button
          extraClass="primary-full"
          text={intl.formatMessage({ id: 'user.setPassword.set.send' })}
          onClick={() => onClickSend(email)}
          disabled={email === ''}
        />
      </div>
    </div>
  );
};

export default SetPassword;
