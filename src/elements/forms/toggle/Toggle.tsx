import React from 'react';
import { useController } from 'react-hook-form';
import ToggleComponent from '../../toogle';
import Props from './Toggle.types';

const Toggle = ({ control, name, required, toggleProps, onChange }: Props) => {
  const {
    field: { onChange: onChangeForm, name: fieldName, value },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: toggleProps?.defaultChecked,
    shouldUnregister: true,
  });

  const handleChange = React.useCallback(e => {
    onChangeForm(e);
    if (onChange) onChange(e);
  }, []);

  return (
    <ToggleComponent onChange={handleChange} isChecked={value} name={fieldName} {...toggleProps} />
  );
};

export default Toggle;
