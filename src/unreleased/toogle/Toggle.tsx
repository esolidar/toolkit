import React, { FC } from 'react';
import Toggle from 'react-toggle';
import Props from './Toggle.types';

const Toogle: FC<Props> = ({
  isChecked = false,
  hasIcons = false,
  name = 'status',
  value,
  onChange,
  disabled,
}: Props): JSX.Element => {
  return (
    <Toggle
      defaultChecked={isChecked}
      icons={hasIcons}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
export default Toogle;
