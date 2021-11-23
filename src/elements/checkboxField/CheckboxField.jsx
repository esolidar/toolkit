import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({
  value,
  name,
  onChange,
  checked,
  label,
  error,
  disabled,
  id,
  dataTestId,
  size,
}) => (
  <div className="checkbox-inline">
    <div className="form-group">
      <label htmlFor={name}>
        <input
          data-testid={dataTestId}
          type="checkbox"
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <div className="checkbox" />
        {label && <div className={`label ${size}`}>{label}</div>}
      </label>
    </div>
    {error && <span className="help-block">{error}</span>}
  </div>
);

CheckboxField.propTypes = {
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  size: PropTypes.string,
};

CheckboxField.defaultValues = {
  size: 'md',
};

export default CheckboxField;
