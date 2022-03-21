import React from 'react';
import { useController } from 'react-hook-form';
import Select from '../../select';
import Props from './Select.types';

const SelectFom = ({ control, name, required, selectFormProps, onChange }: Props) => {
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
    <Select
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

export default SelectFom;
