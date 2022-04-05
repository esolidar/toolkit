import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RadioField = ({
  value,
  name,
  onChange,
  checked,
  label,
  error,
  disabled,
  message,
  id,
  dataTestId,
  size,
}) => (
  <div className={classnames('radio-inline', { 'has-error': error })}>
    <div className="form-group">
      <label htmlFor={id}>
        <input
          data-testid={dataTestId}
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <div className={classnames('radio', { [size]: size })} />
        {label && <div className={`label ${size}`}>{label}</div>}
      </label>
    </div>
    {message && <div className="message">{message}</div>}
    {error && <div className="help-block">{error}</div>}
  </div>
);

RadioField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  message: PropTypes.string,
  dataTestId: PropTypes.string,
  size: PropTypes.string,
};

RadioField.defaultProps = {
  size: 'md',
};

export default RadioField;
