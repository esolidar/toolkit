import React, { FC } from 'react';
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
  return (
    <div className={className}>
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
