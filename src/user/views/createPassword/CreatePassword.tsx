import React, { FC, useState, useEffect } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import PasswordField from '../../../elements/passwordField';
import Button from '../../../elements/button';
import clone from '../../../utils/clone';
import Props from './CreatePassword.types';

interface Form {
  password?: string;
  confirmPassword?: string;
}

const CreatePassword: FC<Props> = ({
  userId,
  code,
  actions,
  company,
  type = 'recover',
}: Props): JSX.Element => {
  const [errors, setErrors] = useState<Form>({});
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [form, setForm] = useState<Form>({
    password: '',
    confirmPassword: '',
  });

  const intl = useIntl();

  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    const frm = clone(form);
    frm[name] = value;

    setForm(frm);
  };

  const handleBlur = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    const frm = clone(errors);
    if (value.length < 6) {
      frm[name] = intl.formatMessage({ id: 'user.register.error.Min_6' });
    } else {
      frm[name] = '';
    }
    setErrors(frm);
  };

  const handleSubmit = () => {
    if (form.password.length >= 6 && form.password === form.confirmPassword) {
      setErrors({});
      setDisabledButton(true);
      if (type === 'set') {
        actions.postNewPassword({
          user_id: userId,
          password: form.password,
          password_confirmation: form.confirmPassword,
        });
      } else {
        actions.postRecoverPassword({
          user_id: userId,
          code,
          password: form.password,
          password_confirmation: form.confirmPassword,
        });
      }
    } else if (form.password !== form.confirmPassword) {
      const error = {
        password: intl.formatMessage({ id: 'user.register.error.password.match' }),
        confirmPassword: intl.formatMessage({ id: 'user.register.error.password.match' }),
      };
      setErrors(error);
    }
  };

  useEffect(() => {
    if (form.password && form.confirmPassword) setDisabledButton(false);
    else setDisabledButton(true);
  }, [form]);

  return (
    <div className="create-password">
      <div className="create-password__title">
        <h1>
          {intl.formatMessage({
            id: type === 'set' ? 'user.createPassword.title' : 'user.recoverPassword.title',
          })}
        </h1>
      </div>
      <div className="create-password__form">
        <div className="create-password__form__description">
          {type === 'set' && (
            <FormattedMessage id="user.createPassword.subtitle" values={{ company }} />
          )}
          {type === 'recover' && <FormattedMessage id="user.recoverPassword.subtitle" />}
        </div>
        <div className="create-password__form__input">
          <PasswordField
            label={intl.formatMessage({ id: 'user.createPassword.new.password' })}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            value={form.password}
            field="password"
            id="password"
          />

          <PasswordField
            label={intl.formatMessage({ id: 'user.createPassword.confirm.new.password' })}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmPassword}
            value={form.confirmPassword}
            field="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <Button
          extraClass="success-full"
          onClick={handleSubmit}
          disabled={disabledButton}
          text={intl.formatMessage({
            id: type === 'set' ? 'save' : 'user.recoverPassword.update',
          })}
        />
      </div>
    </div>
  );
};

export default CreatePassword;
