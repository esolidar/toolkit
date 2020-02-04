import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextField = ({
  field,
  value,
  label,
  type,
  onChange,
  error,
  maxLength,
  onBlur,
  onFocus,
  placeholder,
  message,
  disabled,
  help,
  required,
}) => (
  <div className={classnames('form-group', { 'has-error': error || message }, { required })}>
    {label && (
    <label htmlFor={field} className="control-label">
      {label}
    </label>
    )}
    {help && (
    <p>
      {help}
    </p>
    )}
    <input
      autoComplete="off"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      type={type}
      name={field}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      className="form-control"
    />
    {error && (<span className="help-block">{error}</span>)}
    {message && (<span className="help-block">{message}</span>)}
  </div>
);

TextField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
};

export default TextField;
