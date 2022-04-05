import React, { FC, useState, useEffect } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import Validator from 'validator';
import isEmpty from '../../../utils/isEmpty/isEmpty';
import TextField from '../../../elements/textField';
import Button from '../../../elements/button';
import Props from './EnterEmail.types';

const EnterEmail: FC<Props> = ({
  type,
  onSuccess,
  actions: { postRecoverPassword },
  reducers: { recoverPassword },
  helpLabel,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (isEmpty(recoverPassword)) return;

    const { code, data } = recoverPassword;

    if (code === 200) {
      onSuccess(email);
    } else if (code === 400) {
      setIsDisabled(false);
      setError(data[0].message);
    } else {
      setIsDisabled(false);
    }
  }, [recoverPassword]);

  const handleChangeEmail = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);

    setIsDisabled(!Validator.isEmail(value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setIsDisabled(true);
    postRecoverPassword({ email, origin: 'esolidar' });
  };

  return (
    <div className="set-password">
      <div className="set-password__title">
        <h1>
          {intl.formatMessage({
            id: type === 'set' ? 'user.setUpPasswordModal.button' : 'user.enterEmail.reset.title',
          })}
        </h1>
      </div>
      <form onSubmit={handleSubmit} method="post">
        <div className="set-password__form">
          <div className="set-password__form--description">
            <div>
              {intl.formatMessage({
                id:
                  type === 'set'
                    ? 'user.enterEmail.set.subtitle1'
                    : 'user.enterEmail.reset.subtitle1',
              })}
            </div>
            <div>
              {intl.formatMessage({
                id:
                  type === 'set'
                    ? 'user.enterEmail.set.subtitle2'
                    : 'user.enterEmail.reset.subtitle2',
              })}
            </div>
          </div>
          <TextField
            className="set-password__form--email-input"
            type="text"
            label={intl.formatMessage({ id: 'user.enterEmail.set.email' })}
            help={helpLabel}
            value={email}
            onChange={handleChangeEmail}
            error={error}
            dataTestId="enter-email"
          />
          <Button
            extraClass="primary-full"
            text={intl.formatMessage({ id: 'user.enterEmail.set.send' })}
            type="submit"
            disabled={isDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default EnterEmail;
