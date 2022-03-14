import React from 'react';
import { useController } from 'react-hook-form';
import TextField from '../../textField';
import Props from './TextField.types';

const TextFieldForm = ({ control, name, required, textFieldProps, onChange, onBlur }: Props) => {
  const {
    field: { onChange: handleChange, onBlur: handleBlur, name: fieldName, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: textFieldProps?.defaultValue,
    shouldUnregister: true,
  });

  return (
    <TextField
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      onBlur={e => {
        handleBlur();
        if (onBlur) onBlur(e);
      }}
      value={value}
      field={fieldName}
      inputRef={ref}
      error={error ? error.message || true : false}
      {...textFieldProps}
    />
  );
};

export default TextFieldForm;
