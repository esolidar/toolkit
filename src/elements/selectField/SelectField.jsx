import classnames from 'classnames';
import PropTypes from 'prop-types';
import InputLabel from '../inputLabel';

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
  dataTestId,
  optionTestId,
  info,
  help,
  showOptionalLabel,
}) => {
  const optionsList = options => {
    if (options) {
      return options.map((option, i) => (
        <option
          data-testid={`${optionTestId || field}-${option.id}`}
          value={option.id}
          key={option.id || i}
          disabled={option.disabled}
        >
          {option.name || option.title}
        </option>
      ));
    }
  };

  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      {label && <InputLabel field={field} label={label} showOptionalLabel={showOptionalLabel} />}
      {help && <span className="label-help">{help}</span>}
      <select
        data-testid={dataTestId}
        name={field}
        className={error ? `form-control ${className} required-field` : `form-control ${className}`}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        {!hiddenSelectText && <option value="">{selectText}</option>}
        {optionsList(options)}
      </select>
      {info && <span className="footer-label-info">{info}</span>}
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

export default SelectField;

SelectField.propTypes = {
  dataTestId: PropTypes.string,
  optionTestId: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  onChange: PropTypes.func,
  field: PropTypes.string,
  disabled: PropTypes.bool,
  selectText: PropTypes.string,
  className: PropTypes.string,
  hiddenSelectText: PropTypes.bool,
  info: PropTypes.string,
  help: PropTypes.string,
  showOptionalLabel: PropTypes.bool,
};

SelectField.defaultProps = {
  hiddenSelectText: false,
  className: '',
};
