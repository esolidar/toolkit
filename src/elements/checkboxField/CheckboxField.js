import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({
  value, name, onChange, checked, label, error, disabled, id,
}) => (
  <div className="checkbox-inline">
    <div
      className="form-group"
    >
      <label htmlFor={name}>
        <input
          type="checkbox"
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
    </div>
    {error && <span className="help-block">{error}</span>}
  </div>
);

CheckboxField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

export default CheckboxField;
