import React from 'react';
import { useController } from 'react-hook-form';
import RadioField from '../../radioField';
import Props from './RadioField.types';

const RadioFieldForm = ({ control, name, required, checkboxFieldProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: checkboxFieldProps?.value,
    shouldUnregister: true,
  });

  return (
    <RadioField
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      value={value}
      field={fieldName}
      inputRef={ref}
      error={error ? error.message || true : false}
      {...checkboxFieldProps}
    />
  );
};

export default RadioFieldForm;
