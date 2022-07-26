import React, { FC } from 'react';
import classnames from 'classnames';
import Props from './InputGroup.types';
import Icon from '../icon';

const InputGroup: FC<Props> = ({
  prepend,
  append,
  inputPlaceholder,
  disabled,
  error,
}: Props): JSX.Element => (
  <div>
    <div className={classnames('inputGroup', { disabled, 'has-error': error })}>
      {prepend && (
        <div className="inputGroup__prepend">
          <span className="inputGroup__text">{prepend}</span>
        </div>
      )}
      <input
        type="text"
        className={classnames('form-control', {
          borderRadiusLeft: !prepend,
          borderRadiusRight: !append,
        })}
        placeholder={inputPlaceholder}
        disabled={disabled}
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
