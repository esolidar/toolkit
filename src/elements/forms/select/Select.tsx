import React from 'react';
import { useController } from 'react-hook-form';
import SelectComponent from '../../select';
import Props from './Select.types';

const Select = ({ control, name, required, selectFormProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: selectFormProps?.defaultValue,
    shouldUnregister: true,
  });

  return (
    <SelectComponent
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      value={value}
      name={fieldName}
      error={error ? error.message || true : false}
      {...selectFormProps}
    />
  );
};

export default Select;
