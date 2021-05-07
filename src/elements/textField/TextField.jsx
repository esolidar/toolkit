import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputLabel from '../inputLabel';

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
}) => (
  <div
    className={classnames('form-group', { 'has-error': error || message }, { required }, className)}
  >
    {label && (
      <InputLabel field={id || field} label={label} showOptionalLabel={showOptionalLabel} />
    )}
    {help && <p className="help">{help}</p>}
    {!children && (
      <input
        data-testid={dataTestId}
        autoComplete="off"
        onChange={onChange}
        onFocus={onFocus}
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
      />
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
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputRef: PropTypes.object,
  children: PropTypes.node,
  showOptionalLabel: PropTypes.bool,
};

TextField.defaultProps = {
  children: null,
  showOptionalLabel: false,
};

export default TextField;
