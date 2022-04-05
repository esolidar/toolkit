import React, { FC, useState } from 'react';
import Props from './PasswordField.types';
import TextField from '../textField';
import Icon from '../icon';
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
  style,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  const [showPasswordText, setShowPasswordText] = useState(showPassword);

  const handleClick = () => {
    setShowPasswordText(!showPasswordText);
  };

  return (
    <div className="form-group" style={style}>
      <InputLabel field={field} label={label} help={help} style={help ? { marginBottom: 0 } : {}} />
      <div className={`password-field ${help ? 'no-margin' : ''}`} data-testid={dataTestId}>
        <TextField
          password={true}
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
            <Icon name="EyeOff" size="sm" dataTestId="eye-blocked" />
          ) : (
            <Icon name="Eye" size="sm" dataTestId="eye" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
