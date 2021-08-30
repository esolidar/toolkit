import React, { FC, useState } from 'react';
import Props from './PasswordField.types';
import TextField from '../../elements/textField';
import Icon from '../icon/Icon';

const PasswordField: FC<Props> = ({
  label,
  errors,
  value,
  field,
  showPassword = false,
  dataTestId = 'passwordField',
  onChange,
}: Props): JSX.Element => {
  const [showPasswordText, setShowPasswordText] = useState(showPassword);

  const handleClick = () => {
    setShowPasswordText(!showPasswordText);
  };

  return (
    <div className="password-field" data-testId={dataTestId}>
      <TextField
        label={label}
        onChange={onChange}
        type={showPasswordText ? 'text' : 'password'}
        error={errors}
        value={value}
        field={field}
        dataTestId="input-password"
      />
      <button onClick={handleClick} data-testid="button">
        {showPasswordText ? (
          <Icon iconClass="icon-eye-blocked" dataTestId="eye-blocked" />
        ) : (
          <Icon iconClass="icon-eye" dataTestId="eye" />
        )}
      </button>
    </div>
  );
};

export default PasswordField;
