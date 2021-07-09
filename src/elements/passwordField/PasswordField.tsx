import React, { FC, useState, useEffect } from 'react';
import Props from './PasswordField.types';
import TextField from '../textField';
import Icon from '../../components/icon/Icon';

const PasswordField: FC<Props> = ({
  id,
  label,
  error,
  value,
  field,
  showPassword = false,
  dataTestId = 'passwordField',
  help,
  onChange,
}: Props): JSX.Element => {
  const [showPasswordText, setShowPasswordText] = useState(showPassword);

  const handleClick = () => {
    setShowPasswordText(!showPasswordText);
  };

  return (
    <div className={`password-field ${help ? 'no-margin' : ''}`} data-testid={dataTestId}>
      <TextField
        id={id}
        label={label}
        onChange={onChange}
        type={showPasswordText ? 'text' : 'password'}
        error={error}
        value={value}
        field={field}
        help={help}
        dataTestId="input-password"
      />
      <button
        onClick={handleClick}
        role="button"
        type="button"
        style={{ top: help ? '53px' : '34px' }}
      >
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
