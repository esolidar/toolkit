import React, { FC } from 'react';
import classnames from 'classnames';
import InputLabel from '../inputLabel';
import Icon from '../icon';
import Props from './InputGroup.types';

const InputGroup: FC<Props> = ({
  name,
  value,
  id,
  className,
  inputLabelProps,
  dataTestId,
  maxLength,
  prepend,
  append,
  placeholder,
  disabled,
  error,
  size = 'lg',
  onChange,
  onFocus,
  onBlur,
}: Props): JSX.Element => (
  <div className={classnames(`size-${size}`, 'form-group', className)}>
    {inputLabelProps && <InputLabel {...inputLabelProps} />}
    <div className={classnames('inputGroup', { disabled, 'has-error': error })}>
      {prepend && (
        <div className="inputGroup__prepend">
          <span className="inputGroup__text">{prepend}</span>
        </div>
      )}
      <input
        name={name}
        type="text"
        value={value}
        id={id}
        data-testid={dataTestId}
        className={classnames('form-control', {
          borderRadiusLeft: !prepend,
          borderRadiusRight: !append,
        })}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
      />
      {append && (
        <div className="inputGroup__append">
          <span className="inputGroup__text">{append}</span>
        </div>
      )}
    </div>
    {error && (
      <span className="inputGroup__error">
        <Icon name="AlertTriangle" size="sm" /> {error}
      </span>
    )}
  </div>
);

export default InputGroup;
