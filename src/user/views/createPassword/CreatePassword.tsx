import React, { FC, useState, useEffect } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
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
  const [disabledButton, setDisabledButton] = useState(true);
  const [form, setForm] = useState<Form>({
    password: '',
    confirmPassword: '',
  });

  const intl = useIntl();

  const handleChange = e => {
    const frm = clone(form);
    frm[e.target.name] = e.target.value;

    setForm(frm);
  };

  const handleBlur = ({ target }) => {
    const frm = clone(errors);
    if (target.value.length < 6) {
      frm[target.name] = intl.formatMessage({ id: 'user.register.error.Min_6' });
    } else {
      frm[target.name] = '';
    }
    setErrors(frm);
  };

  const handleSubmit = () => {
    if (
      form.password.length > 0 &&
      form.confirmPassword.length &&
      form.password === form.confirmPassword
    ) {
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
    } else {
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
      <div className="create-password__header">
        <Row>
          <Col sm={12} className="text-center">
            <h1>
              {intl.formatMessage({
                id: type === 'set' ? 'user.createPassword.title' : 'user.recoverPassword.title',
              })}
            </h1>
          </Col>
        </Row>
      </div>
      <div className="create-password__body">
        <div className="create-password__body__subtitle">
          {type === 'set' && (
            <FormattedMessage id="user.createPassword.subtitle" values={{ company }} />
          )}
          {type === 'recover' && <FormattedMessage id="user.recoverPassword.subtitle" />}
        </div>
        <div>
          <PasswordField
            label={intl.formatMessage({ id: 'user.createPassword.new.password' })}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            value={form.password}
            field="password"
            id="password"
          />
        </div>
        <div>
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
        <div className="d-flex justify-content-center">
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
    </div>
  );
};

export default CreatePassword;
