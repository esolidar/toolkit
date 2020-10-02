import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectField = ({
  options,
  value,
  label,
  field,
  onChange,
  disabled,
  selectText,
  error,
  defaultValue,
  className,
  hiddenSelectText,
}) => {
  const optionsList = (options) => {
    if (options) {
      return options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.name || option.title}
        </option>
      ));
    }
  };

  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      {label
        && (
          <label htmlFor={field} className="control-label">
            {label}
          </label>
        )}
      <select
        name={field}
        className={`form-control ${className}`}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        {!hiddenSelectText && (
          <option value="">
            {selectText}
          </option>
        )}
        {optionsList(options)}
      </select>
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

export default SelectField;

SelectField.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  field: PropTypes.string,
  disabled: PropTypes.bool,
  selectText: PropTypes.string,
  className: PropTypes.string,
  hiddenSelectText: PropTypes.bool,
};

SelectField.defaultProps = {
  hiddenSelectText: false,
};
