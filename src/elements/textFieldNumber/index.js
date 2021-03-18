/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
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
}) => {
  return (
    <TextField label={label} error={error} message={message} className={classStyle}>
      <NumberFormat
        value={value}
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
        className={error ? 'form-control required-field' : 'form-control'}
      />
    </TextField>
  );
};

TextFieldNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
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
};

TextFieldNumber.defaultProps = {
  type: 'text',
  thousandSeparator: false,
};

export default TextFieldNumber;
