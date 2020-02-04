import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextareaField = ({
  field,
  value,
  defaultValue,
  label,
  error,
  onChange,
  checkUserExists,
  placeholder,
  message,
  maxLength,
  disabled,
}) => (
  <div className={classnames('form-group', { 'has-error': error || message })}>
    {label && (
    <label htmlFor={field} className="control-label">
      {label}
    </label>
    )}
    <textarea
      disabled={disabled}
      onChange={onChange}
      onBlur={checkUserExists}
      value={value}
      defaultValue={defaultValue}
      name={field}
      maxLength={maxLength || ''}
      placeholder={placeholder}
      className="form-control"
    />
    {error && <span className="help-block">{error}</span>}
    {message && <span className="help-block">{message}</span>}
  </div>
);

TextareaField.propTypes = {
  field: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  checkUserExists: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  message: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
};

export default TextareaField;
