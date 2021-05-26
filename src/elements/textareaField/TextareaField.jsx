import PropTypes from 'prop-types';
import classnames from 'classnames';
import autosize from 'autosize';
import InputLabel from '../inputLabel';
import { isDefined } from '../../utils';

const TextareaField = ({
  field,
  id,
  value,
  defaultValue,
  label,
  error,
  onChange,
  placeholder,
  message,
  maxLength,
  disabled,
  help,
  required,
  resize,
  className,
  info,
  showOptionalLabel,
}) => {
  if (resize) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const item = document.getElementById(id || field);

        if (!isDefined(item)) return;

        autosize(item);
        const evt = document.createEvent('Event');
        evt.initEvent('autosize:update', true, false);
        item.dispatchEvent(evt);
      }, 500);
    }
  }

  return (
    <div
      className={classnames(
        'form-group',
        { 'has-error': error || message },
        { required },
        className
      )}
    >
      {label && <InputLabel field={field} label={label} showOptionalLabel={showOptionalLabel} />}
      {help && <p className="help">{help}</p>}
      <textarea
        id={id || field}
        disabled={disabled}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        name={field}
        maxLength={maxLength || ''}
        placeholder={placeholder}
        className={error ? 'form-control required-field' : 'form-control'}
      />
      {info && <span className="footer-label-info">{info}</span>}
      {error && <span className="help-block">{error}</span>}
      {message && <span className="help-block">{message}</span>}
    </div>
  );
};

TextareaField.propTypes = {
  field: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  message: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  resize: PropTypes.bool,
  className: PropTypes.string,
  info: PropTypes.string,
  showOptionalLabel: PropTypes.bool,
};

TextareaField.defaultProps = {
  showOptionalLabel: false,
};

export default TextareaField;