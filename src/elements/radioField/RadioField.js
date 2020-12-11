import React from 'react';
import PropTypes from 'prop-types';

const RadioField = ({
  value, name, onChange, checked, label, error, disabled, message, id,
}) => (
  <div className="radio-inline">
    <div
      className="form-group"
    >
      <label htmlFor={name}>
        <input
          type="radio"
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        {label}
        <div className="checkbox" />
      </label>
      {message && (
        <div className="message">
          {message}
        </div>
      )}
      {error && <span className="help-block">{error}</span>}
    </div>
  </div>
);

RadioField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  message: PropTypes.string,
};

export default RadioField;
