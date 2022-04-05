import React from 'react';
import { useController } from 'react-hook-form';
import TextFieldNumberComponent from '../../textFieldNumber';
import Props from './TextFieldNumber.types';

const TextFieldNumber = ({ control, name, required, TextfieldNumberProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: TextfieldNumberProps?.defaultValue,
    shouldUnregister: true,
  });

  return (
    <TextFieldNumberComponent
      onChange={e => {
        handleChange(e.value);
        if (onChange) onChange(e.value);
      }}
      value={value}
      field={fieldName}
      error={error ? error.message || true : false}
      {...TextfieldNumberProps}
    />
  );
};

export default TextFieldNumber;
