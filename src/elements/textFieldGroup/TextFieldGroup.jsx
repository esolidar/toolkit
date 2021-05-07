import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputLabel from '../inputLabel';

const TextFieldGroup = ({
  field,
  value,
  defaultValue,
  label,
  error,
  type,
  onChange,
  placeholder,
  message,
  groupText,
  disabled,
  help,
  info,
  showOptionalLabel,
}) => (
  <div className={classnames('form-group', { 'has-error': error || message })}>
    {label && <InputLabel field={field} label={label} showOptionalLabel={showOptionalLabel} />}
    {help && <p className="help">{help}</p>}
    <div className="input-group">
      <input
        onChange={onChange}
        value={value || ''}
        defaultValue={defaultValue}
        type={type}
        name={field}
        placeholder={placeholder}
        className={error ? 'form-control required-field' : 'form-control'}
        disabled={disabled}
      />
      {groupText && (
        <span
          className={`${error ? 'input-group-addon required-field' : 'input-group-addon'} ${
            disabled ? 'disabled-group' : ''
          }`}
        >
          {groupText}
        </span>
      )}
    </div>
    {info && <span className="footer-label-info">{info}</span>}
    {error && <span className="help-block">{error}</span>}
    {message && <span className="help-block">{message}</span>}
  </div>
);

export default TextFieldGroup;

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  help: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  groupText: PropTypes.string,
  showOptionalLabel: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: 'text',
  showOptionalLabel: false,
};
