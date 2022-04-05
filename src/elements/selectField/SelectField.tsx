import React, { FC, useEffect } from 'react';
import classnames from 'classnames';
import Props from './SelectField.types';
import InputLabel from '../inputLabel';
import Icon from '../../components/icon';

const toggleSelectAfter = () => {
  const arraySelect = document.querySelectorAll<HTMLElement>('.select-field__input');
  arraySelect.forEach((select: HTMLElement) => {
    select.classList.toggle('after', select.offsetWidth > 320);
  });
};

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
  readOnly = false,
}: Props): JSX.Element => {
  useEffect(() => {
    window.addEventListener('resize', toggleSelectAfter);

    return () => {
      window.removeEventListener('resize', toggleSelectAfter);
    };
  }, []);

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
        { 'left-label': isLabelLeft },
        { 'read-only': readOnly }
      )}
    >
      <div className="select-field__info">
        {label && (
          <InputLabel
            field={field}
            label={label}
            showOptionalLabel={showOptionalLabel}
            help={help}
            size={size}
          />
        )}
      </div>
      {readOnly ? (
        <InputLabel
          field={field}
          label={selectText}
          className="label-read"
          size={size}
          fontWeight={400}
        />
      ) : (
        <>
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
            {error && typeof error !== 'boolean' && <div className="help-block">{error}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default SelectField;
