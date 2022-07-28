import React from 'react';
import { useController } from 'react-hook-form';
import InputGroupComponent from '../../inputGroup';
import Props from './InputGroup.types';

const InputGroup = ({ control, name, required, inputGroupFormProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: inputGroupFormProps?.value,
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
      {...inputGroupFormProps}
    />
  );
};

export default InputGroup;
