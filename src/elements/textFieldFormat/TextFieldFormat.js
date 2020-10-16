import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import FormatCurrency from 'react-format-currency';
import NumberFormat from 'react-number-format';

const TextFieldFormat = ({
  field,
  value,
  label,
  error,
  type,
  onChange,
  placeholder,
  message,
  disabled,
  fieldTranslate,
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
  if (prefix) {
    return (
      <div className={classnames('form-group', { 'has-error': error || message } || { disabled })}>
        {label
          && (
          <h3 className="control-label">
            <FormattedMessage
              id={fieldTranslate || field}
              defaultMessage={label}
            />
          </h3>
          )}
        <FormatCurrency
          currency={prefix}
          placeholder={placeholder}
          className={classStyle}
          value={value}
          disabled={disabled}
          onChange={(values) => {
            onChange(values);
          }}
        />
        {error && <span className="help-block">{error}</span>}
        {message && <span className="help-block">{message}</span>}
      </div>
    );
  }
  return (
    <div className={classnames('form-group', { 'has-error': error || message } || { disabled })}>
      {label && (
        <h3 className="control-label">
          <FormattedMessage
            id={fieldTranslate || field}
            defaultMessage={label}
          />
        </h3>
      )}
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
        className={classStyle}
      />
      {error && <span className="help-block">{error}</span>}
      {message && <span className="help-block">{message}</span>}
    </div>
  );
};

TextFieldFormat.propTypes = {
  field: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  fieldTranslate: PropTypes.string,
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

TextFieldFormat.defaultProps = {
  type: 'text',
  classStyle: 'form-control',
};

export default TextFieldFormat;
