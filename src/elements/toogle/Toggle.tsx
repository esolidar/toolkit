import React, { FC } from 'react';
import classNames from 'classnames';
import ReactToggle from 'react-toggle';
import Props from './Toggle.types';

const Toggle: FC<Props> = ({
  className,
  isChecked,
  hasIcons = false,
  name = 'status',
  value,
  onChange,
  disabled = false,
}: Props): JSX.Element => {
  const classes = classNames('toggle', className);

  return (
    <div className={classes}>
      <ReactToggle
        defaultChecked={isChecked}
        icons={hasIcons}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
export default Toggle;
