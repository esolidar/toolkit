import React, { FC } from 'react';
import Toggle from 'react-toggle';
import Props from './Toggle.types';

const Toogle: FC<Props> = ({ isChecked, status, onChange }: Props): JSX.Element => {
  return (
    <Toggle
      defaultChecked={isChecked}
      icons={false}
      name="status"
      value={status}
      onChange={onChange}
    />
  );
};
export default Toogle;
