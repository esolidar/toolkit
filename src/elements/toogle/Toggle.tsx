import React, { FC } from 'react';
import classNames from 'classnames';
import Toggle from 'react-toggle';
import Props from './Toggle.types';

const Toogle: FC<Props> = ({
  className,
  isChecked = false,
  hasIcons = false,
  name = 'status',
  value,
  onChange,
  disabled,
}: Props): JSX.Element => {
  const classes = classNames('toggle', className);

  return (
    <div className={classes}>
      <Toggle
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
export default Toogle;
