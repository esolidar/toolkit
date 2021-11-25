import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './SelectField.types';
import InputLabel from '../inputLabel';
import Icon from '../../components/icon';

const SelectField: FC<Props> = ({
  options,
  value,
  label,
  field,
  onChange,
  disabled = false,
  selectText,
  error,
  defaultValue,
  className = '',
  hiddenSelectText = false,
  dataTestId,
  optionTestId,
  info,
  help,
  showOptionalLabel,
  isLabelLeft = false,
  leftIcon,
  size = 'lg',
}: Props): JSX.Element => {
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
    <div
      className={classnames(
        'select-field',
        'form-group',
        `size-${size}`,
        { 'has-error': !!error },
        { 'left-label': isLabelLeft }
      )}
    >
      <div className="select-field__info">
        {label && (
          <InputLabel
            field={field}
            label={label}
            showOptionalLabel={showOptionalLabel}
            help={help}
          />
        )}
      </div>
      <div className="select-field__input">
        {leftIcon?.show && (
          <Icon
            iconClass={`icon left ${leftIcon?.name}`}
            onClick={leftIcon?.onClick}
            style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
            dataTestId="input-left-icon"
          />
        )}
        <select
          data-testid={dataTestId}
          name={field}
          className={
            error ? `form-control ${className} required-field` : `form-control ${className}`
          }
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          style={{
            paddingLeft: leftIcon?.show ? '36px' : '12px',
          }}
        >
          {!hiddenSelectText && <option value="">{selectText}</option>}
          {optionsList(options)}
        </select>
        {info && <span className="footer-label-info">{info}</span>}
        {typeof error === 'string' && <span className="help-block">{error}</span>}
      </div>
    </div>
  );
};

export default SelectField;
