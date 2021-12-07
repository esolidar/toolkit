/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '../textField';

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
  const [val, setVal] = useState(value);

  useEffect(() => {
    document.getElementById(field || id).addEventListener('keypress', evt => {
      if (evt.keyCode > 57) {
        evt.preventDefault();
      }
    });
  }, []);

  const handleUp = () => {
    if (!val) {
      setVal(min || 1);
    } else if (max) {
      if (val < max) {
        setVal(+val + 1);
      } else {
        setVal(max);
      }
    } else {
      setVal(+val + 1);
    }
  };

  const handleDown = () => {
    if (!val) {
      setVal(min || -1);
    } else if (min) {
      if (val > min) setVal(+val - 1);
    } else {
      setVal(+val - 1);
    }
  };

  const handleChange = ({ target: { value } }) => {
    if (max && max < +value) {
      setVal(max);
    } else if (min && min > +value) {
      setVal(min);
    } else {
      setVal(value);
    }

    onChange({
      formattedValue: value,
      value,
      floatValue: +value,
    });
  };

  return (
    <TextField label={label} error={error} message={message} className={classStyle}>
      <div className={classnames(`size-${size}`, 'input', 'textfield-number')}>
        {!showArrows && (
          <NumberFormat
            value={`${val}`}
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
              onChange={handleChange}
              value={val}
              type="number"
              name={field}
              id={id || field}
              placeholder={placeholder}
              disabled={disabled}
              className={error ? 'form-control required-field' : 'form-control'}
            />
            <div className="textfield-number__arrows">
              <button onClick={handleUp}>
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
              <button onClick={handleDown}>
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
