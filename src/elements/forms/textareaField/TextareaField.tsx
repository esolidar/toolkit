import React from 'react';
import { useController } from 'react-hook-form';
import TextareaField from '../../textareaField';
import Props from './TextareaField.types';

const TextareaFieldForm = ({
  control,
  name,
  required,
  textareaFieldProps,
  onChange,
  onBlur,
}: Props) => {
  const {
    field: { onChange: handleChange, onBlur: handleBlur, name: fieldName, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: textareaFieldProps?.defaultValue,
    shouldUnregister: true,
  });

  return (
    <TextareaField
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
      {...textareaFieldProps}
    />
  );
};

export default TextareaFieldForm;
