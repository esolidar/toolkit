import React, { FC } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import ReactSelect, { components } from 'react-select';
import classNames from 'classnames';
import InputLabel from '../inputLabel';
import isDefined from '../../utils/isDefined';
import Props, { CustomOptionProps, Option } from './Select.types';

const Select: FC<Props> = ({
  error,
  helperText,
  inputLabelProps,
  isClearable = false,
  isDisabled = false,
  isSearchable = false,
  name,
  onChange,
  onClear,
  options = [],
  placeholder,
  placeholderLeftIcon,
  size = 'lg',
  showDropdownArrow = true,
  value,
}: Props): JSX.Element => {
  const intl: IntlShape = useIntl();
  const classes: string = classNames(
    'esolidar-select',
    { 'esolidar-select-error': !!error },
    `size-${size}`
  );
  const helperTextClasses: string = classNames('esolidar-select__helper-text', {
    'esolidar-select__helper-text--error': !!error,
  });

  const handleChange = (option: Option) => {
    if (isDefined(option)) onChange(option.value);
    else onClear();
  };

  const filteredOptions: Option[] = options.filter((option: Option) => option.show);
  const helper: string = typeof error === 'string' ? error : helperText;

  return (
    <>
      <div className="form-group">
        {inputLabelProps && (
          <InputLabel
            {...inputLabelProps}
            style={{
              marginBottom: '8px',
            }}
          />
        )}
        <ReactSelect
          className={classes}
          classNamePrefix="esolidar-select"
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: showDropdownArrow ? components.DropdownIndicator : () => null,
            Option: CustomOption,
          }}
          formatOptionLabel={option => (
            <>
              {option.leftIcon && (
                <div className="esolidar-select__option--icon">{option.leftIcon}</div>
              )}
              {option.label}
            </>
          )}
          getOptionLabel={option => option.value}
          getOptionValue={option => option.value}
          isClearable={isClearable}
          isDisabled={isDisabled}
          isMulti={false}
          isOptionDisabled={option => option.disabled}
          isSearchable={isSearchable}
          name={name}
          noOptionsMessage={() => intl.formatMessage({ id: 'toolkit.select.noOptions' })}
          onChange={(option: Option) => {
            handleChange(option);
          }}
          options={filteredOptions}
          placeholder={
            <>
              {placeholderLeftIcon}
              <span>{placeholder || intl.formatMessage({ id: 'toolkit.select.placeholder' })}</span>
            </>
          }
          value={options.find((option: Option) => option.value === value)}
        />
        {!!helper && <div className={helperTextClasses}>{helper}</div>}
      </div>
    </>
  );
};

const CustomOption: FC<CustomOptionProps> = ({
  data,
  innerProps,
  isSelected,
  isDisabled,
}: CustomOptionProps): JSX.Element => {
  const { show, leftIcon, label, description } = data;

  const optionClasses: string = classNames(
    'esolidar-select__option',
    {
      'esolidar-select__option--is-selected': isSelected,
    },
    { 'esolidar-select__option--is-disabled': isDisabled }
  );

  return show ? (
    <div {...innerProps} className={optionClasses}>
      {leftIcon && <div className="esolidar-select__option--icon">{leftIcon}</div>}
      <div className="esolidar-select__option--text">
        <span>{label}</span>
        {description && <span>{description}</span>}
      </div>
    </div>
  ) : null;
};

export default Select;
