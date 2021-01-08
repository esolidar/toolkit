import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextField = ({
  field,
  id,
  value,
  defaultValue,
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
  className,
  dataTestId,
}) => (
  <div className={classnames('form-group', { 'has-error': error || message }, { required }, className)}>
    {label && (
    <label htmlFor={id || field} className="control-label">
      {label}
    </label>
    )}
    {help && (
      <p className="help">
        {help}
      </p>
    )}
    <input
      data-testid={dataTestId}
      autoComplete="off"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      defaultValue={defaultValue}
      type={type}
      name={field}
      id={id || field}
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
  dataTestId: PropTypes.string,
  field: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default TextField;
