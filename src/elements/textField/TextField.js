import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import translateMessage from '../../utils/translateMessage/translateMessage';

const TextField = ({
  field, value, label, type, onChange, error, maxLength, onBlur, onFocus, placeholder, message, disabled, fieldTranslate,
}) => (
  <div className={classnames('form-group', { 'has-error': error || message })}>
    {label && (
      <label htmlFor={field} className="control-label">
        {translateMessage({
          id: fieldTranslate || field,
          defaultMessage: label,
        })}
      </label>
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
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  fieldTranslate: PropTypes.string,
};

export default TextField;
