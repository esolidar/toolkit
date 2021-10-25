import React, { FC } from 'react';
import classNames from 'classnames';
import ReactToggle from 'react-toggle';
import Props from './Toggle.types';

const Toggle: FC<Props> = ({
  className,
  isChecked,
  name = 'toggle',
  onChange,
  isDisabled = false,
}: Props): JSX.Element => {
  const classes = classNames('toggle', className);

  return (
    <div className={classes}>
      <ReactToggle
        checked={isChecked}
        icons={false}
        name={name}
        value={`${isChecked}`}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
};
export default Toggle;
