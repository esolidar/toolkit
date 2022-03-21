import React from 'react';
import { useController } from 'react-hook-form';
import TextFieldNumber from '../../textFieldNumber';
import Props from './TextFieldNumber.types';

const TextFieldNumberForm = ({ control, name, required, textFieldProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: textFieldProps?.defaultValue,
    shouldUnregister: true,
  });

  return (
    <TextFieldNumber
      onChange={e => {
        handleChange(e.value);
        if (onChange) onChange(e.value);
      }}
      value={value}
      field={fieldName}
      error={error ? error.message || true : false}
      {...textFieldProps}
    />
  );
};

export default TextFieldNumberForm;
