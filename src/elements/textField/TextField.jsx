/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputLabel from '../inputLabel';
import Icon from '../../components/icon';

const TextField = ({
  field,
  id,
  value,
  defaultValue,
  label,
  type,
  onChange,
  error,
  maxLength,
  onBlur,
  onFocus,
  autofocus,
  placeholder,
  message,
  disabled,
  help,
  required,
  className,
  dataTestId,
  inputRef,
  children,
  info,
  showOptionalLabel,
  leftIcon,
  rightIcon,
  password,
  size,
}) => (
  <div
    className={classnames(
      { 'width-sm': size === 'sm' },
      { 'width-md': size === 'md' },
      { 'width-lg': size === 'lg' },
      { 'form-group': !password },
      { 'has-error': error || message },
      { required },
      className
    )}
  >
    {label && (
      <InputLabel
        field={id || field}
        label={label}
        showOptionalLabel={showOptionalLabel}
        help={help}
      />
    )}
    {!children && (
      <div className="input">
        {leftIcon?.show && (
          <Icon
            iconClass={`icon left ${leftIcon?.name}`}
            onClick={leftIcon?.onClick}
            style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
            dataTestId="input-left-icon"
          />
        )}
        <input
          data-testid={dataTestId}
          autoComplete="off"
          onChange={onChange}
          onFocus={onFocus}
          autoFocus={autofocus}
          onBlur={onBlur}
          value={value}
          defaultValue={defaultValue}
          type={type}
          name={field}
          id={id || field}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={error ? 'form-control required-field' : 'form-control'}
          ref={inputRef}
          style={{
            paddingLeft: leftIcon?.show ? '36px' : '12px',
            paddingRight: rightIcon?.show ? '36px' : '12px',
          }}
        />
        {rightIcon?.show && (
          <Icon
            iconClass={`icon right ${rightIcon?.name}`}
            onClick={rightIcon?.onClick}
            style={{ cursor: rightIcon?.onClick ? 'pointer' : 'default' }}
            dataTestId="input-right-icon"
          />
        )}
      </div>
    )}
    {children && children}
    {info && <span className="footer-label-info">{info}</span>}
    {error && <span className="help-block">{error}</span>}
    {message && <span className="help-block">{message}</span>}
  </div>
);

TextField.propTypes = {
  dataTestId: PropTypes.string,
  info: PropTypes.string,
  field: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  autofocus: PropTypes.bool,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputRef: PropTypes.object,
  children: PropTypes.node,
  showOptionalLabel: PropTypes.bool,
  password: PropTypes.bool,
  leftIcon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
  }),
  rightIcon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
  }),
  size: PropTypes.string,
};

TextField.defaultProps = {
  children: null,
  showOptionalLabel: false,
  size: 'lg',
};

export default TextField;
