import React, { FC, useState, useEffect } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import Validator from 'validator';
import isEmpty from '../../../utils/isEmpty';
import TextField from '../../../elements/textField';
import Button from '../../../elements/button';
import Props from './SetPassword.types';

const SetPassword: FC<Props> = ({
  type,
  origin,
  onSuccess,
  actions: { postRecoverPassword },
  reducers: { recoverPassword },
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (isEmpty(recoverPassword)) return;

    const { code, data } = recoverPassword;

    if (code === 200) onSuccess(email);
    else if (code === 400) setError(data[0].message);
  }, [recoverPassword]);

  const handleChangeEmail = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(value);

  const handleSubmit = () => postRecoverPassword({ email, origin });

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
          error={error}
        />
        <Button
          extraClass="primary-full"
          text={intl.formatMessage({ id: 'user.setPassword.set.send' })}
          onClick={handleSubmit}
          disabled={!Validator.isEmail(email)}
        />
      </div>
    </div>
  );
};

export default SetPassword;
