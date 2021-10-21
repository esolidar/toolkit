import React, { FC, useState } from 'react';
import Props from './PasswordField.types';
import TextField from '../textField';
import Icon from '../../components/icon/Icon';
import InputLabel from '../inputLabel';

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
  onBlur,
}: Props): JSX.Element => {
  const [showPasswordText, setShowPasswordText] = useState(showPassword);

  const handleClick = () => {
    setShowPasswordText(!showPasswordText);
  };

  return (
    <div className="form-group">
      <InputLabel field={field} label={label} help={help} style={help ? { marginBottom: 0 } : {}} />
      <div className={`password-field ${help ? 'no-margin' : ''}`} data-testid={dataTestId}>
        <TextField
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          type={showPasswordText ? 'text' : 'password'}
          error={error}
          value={value}
          field={field}
          dataTestId="input-password"
        />
        <button onClick={handleClick} data-testid="button" type="button" style={{ top: '7px' }}>
          {showPasswordText ? (
            <Icon iconClass="icon-eye-blocked" dataTestId="eye-blocked" />
          ) : (
            <Icon iconClass="icon-eye" dataTestId="eye" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
