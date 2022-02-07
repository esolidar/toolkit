import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  <div className={classnames('checkbox-inline', { 'has-error': error })}>
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
        <div className={classnames('checkbox', { [size]: size })} />
        {label && <div className={`label ${size}`}>{label}</div>}
      </label>
    </div>
    {error && <div className="help-block">{error}</div>}
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

CheckboxField.defaultProps = {
  size: 'md',
};

export default CheckboxField;
