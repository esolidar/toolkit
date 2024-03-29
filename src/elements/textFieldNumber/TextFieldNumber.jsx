/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '../textField';
import isDefined from '../../utils/isDefined';

const TextFieldNumber = ({
  value,
  label,
  error,
  type,
  onChange,
  placeholder,
  message,
  disabled,
  format,
  thousandSeparator,
  displayType,
  decimalSeparator,
  decimalScale,
  fixedDecimalScale,
  allowNegative,
  prefix,
  suffix,
  isNumericString,
  removeFormatting,
  mask,
  isAllowed,
  renderText,
  classStyle,
  size,
  field,
  id,
  showArrows,
  max,
  min,
}) => {
  useEffect(() => {
    const el = document.getElementById(field || id);
    el?.addEventListener('keypress', evt => {
      if (evt.keyCode > 57) evt.preventDefault();
    });
  }, []);

  const handleChange = value => {
    onChange({
      formattedValue: value,
      value,
      floatValue: Number(value),
    });
  };

  const handleUp = () => {
    const defaultVal = isDefined(min) ? min : 1;
    const isMaxGreaterThanValue = Number(value) < max;

    if (!isDefined(value) || value === '') handleChange(defaultVal);
    else if (isDefined(max)) handleChange(isMaxGreaterThanValue ? Number(value) + 1 : max);
    else handleChange(Number(value) + 1);
  };

  const handleDown = () => {
    const defaultVal = isDefined(max) ? max : -1;
    const isValueGreaterThanMin = Number(value) > min;

    if (!isDefined(value) || value === '') handleChange(defaultVal);
    else if (isDefined(min)) handleChange(isValueGreaterThanMin ? Number(value) - 1 : min);
    else handleChange(Number(value) - 1);
  };

  const handleChangeInput = ({ target: { value } }) => {
    const isMaxLowerThanValue = max < Number(value);
    const isMinGreaterThanValue = min > Number(value);

    if (isDefined(max) && isMaxLowerThanValue) handleChange(max);
    else if (isDefined(min) && isMinGreaterThanValue) handleChange(min);
    else handleChange(Number(value));
  };

  return (
    <TextField label={label} error={error} message={message} className={classStyle}>
      <div className={classnames(`size-${size}`, 'input', 'textfield-number')}>
        {!showArrows && (
          <NumberFormat
            value={String(value)}
            displayType={displayType}
            prefix={prefix}
            placeholder={placeholder}
            decimalSeparator={decimalSeparator}
            decimalScale={decimalScale}
            fixedDecimalScale={fixedDecimalScale}
            allowNegative={allowNegative}
            suffix={suffix}
            isNumericString={isNumericString}
            type={type}
            format={format}
            thousandSeparator={thousandSeparator}
            removeFormatting={removeFormatting}
            mask={mask}
            onValueChange={onChange}
            isAllowed={isAllowed}
            renderText={renderText}
            disabled={disabled}
            className={`${!displayType ? 'form-control' : ''} ${error ? 'required-field' : ''}`}
          />
        )}

        {showArrows && (
          <>
            <input
              autoComplete="off"
              onChange={handleChangeInput}
              value={value}
              type="number"
              name={field}
              id={id || field}
              placeholder={placeholder}
              disabled={disabled}
              className={error ? 'form-control required-field' : 'form-control'}
            />
            <div className="textfield-number__arrows">
              <button type="button" onClick={handleUp}>
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 8 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.328835 7H7.67543L4.00213 0.818182L0.328835 7Z" fill="#1A1B1C" />
                </svg>
              </button>
              <button type="button" onClick={handleDown}>
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 8 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.328835 0.181818L3.99929 6.36364L7.67259 0.181818H0.328835Z"
                    fill="#1A1B1C"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </TextField>
  );
};

TextFieldNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  thousandSeparator: PropTypes.bool,
  displayType: PropTypes.string,
  decimalSeparator: PropTypes.string,
  decimalScale: PropTypes.number,
  fixedDecimalScale: PropTypes.string,
  allowNegative: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  isNumericString: PropTypes.bool,
  removeFormatting: PropTypes.bool,
  mask: PropTypes.string,
  isAllowed: PropTypes.bool,
  renderText: PropTypes.string,
  classStyle: PropTypes.string,
  size: PropTypes.string,
  field: PropTypes.string.isRequired,
  id: PropTypes.string,
  showArrows: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

TextFieldNumber.defaultProps = {
  type: 'text',
  thousandSeparator: false,
  size: 'lg',
  showArrows: false,
};

export default TextFieldNumber;
