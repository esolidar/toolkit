/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Loading from '../../components/loading';
import InputLabel from '../inputLabel';
import Icon from '../icon';

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
  inputLabelProps,
  showOptionalLabel,
  leftIcon,
  rightIcon,
  password,
  size,
  isLoading,
}) => (
  <div
    className={classnames(
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
        size={size}
      />
    )}
    {inputLabelProps && <InputLabel {...inputLabelProps} />}
    {!children && (
      <div className={classnames(`size-${size}`, 'input')}>
        {leftIcon?.show && (
          <div className="icon left">
            <Icon
              name={leftIcon?.name}
              size="sm"
              onClick={leftIcon?.onClick}
              style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
              dataTestId="input-left-icon"
            />
          </div>
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
            paddingLeft: leftIcon?.show ? '40px' : '12px',
            paddingRight: rightIcon?.show ? '40px' : '12px',
          }}
        />
        {rightIcon?.show && (
          <div className="icon right">
            <Icon
              name={rightIcon?.name}
              size="sm"
              onClick={rightIcon?.onClick}
              style={{ cursor: rightIcon?.onClick ? 'pointer' : 'default' }}
              dataTestId="input-right-icon"
            />
          </div>
        )}
        <div className="input__loading">
          <Loading
            loadingClass={classnames('small-loading', { setVisible: isLoading })}
            size="xxs"
          />
        </div>
      </div>
    )}
    {children && children}
    {info && <span className="footer-label-info">{info}</span>}
    {error && <div className="help-block">{error}</div>}
    {message && <div className="help-block">{message}</div>}
  </div>
);

TextField.propTypes = {
  dataTestId: PropTypes.string,
  info: PropTypes.string,
  inputLabelProps: PropTypes.object,
  field: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
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
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
  isLoading: PropTypes.bool,
};

TextField.defaultProps = {
  children: null,
  showOptionalLabel: false,
  size: 'lg',
  isLoading: false,
};

export default TextField;
