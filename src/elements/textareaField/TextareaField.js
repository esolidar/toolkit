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
  placeholder,
  message,
  maxLength,
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
    <textarea
      disabled={disabled}
      onChange={onChange}
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
  help: PropTypes.string,
  required: PropTypes.bool,
};

export default TextareaField;
