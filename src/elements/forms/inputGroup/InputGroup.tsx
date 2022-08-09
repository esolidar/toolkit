import React from 'react';
import { useController } from 'react-hook-form';
import InputGroupComponent from '../../inputGroup';
import Props from './InputGroup.types';

const InputGroup = ({ control, name, required, validate, inputGroupProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required, validate },
    defaultValue: inputGroupProps?.value,
    shouldUnregister: true,
  });

  return (
    <InputGroupComponent
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      value={value}
      name={fieldName}
      error={error ? error.message : undefined}
      {...inputGroupProps}
    />
  );
};

export default InputGroup;
