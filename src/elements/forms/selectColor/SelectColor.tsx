import React from 'react';
import { useController } from 'react-hook-form';
import SelectColorComponent from '../../selectColor';
import Props from './SelectColor.types';

const SelectColor = ({ control, name, required, validate, selectColorProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required, validate },
    defaultValue: selectColorProps?.value,
    shouldUnregister: true,
  });

  return (
    <SelectColorComponent
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      value={value}
      name={fieldName}
      textFieldProps={{ error: error ? error.message : undefined }}
      {...selectColorProps}
    />
  );
};

export default SelectColor;
