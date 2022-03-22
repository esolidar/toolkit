import React from 'react';
import { useController } from 'react-hook-form';
import CheckboxField from '../../checkboxField';
import Props from './CheckboxField.types';

const CheckboxFieldForm = ({
  control,
  name,
  required,
  checkboxFieldProps,
  onChange,
  reply,
}: Props) => {
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
    <CheckboxField
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      value={value}
      field={fieldName}
      inputRef={ref}
      checked={reply?.includes(value)}
      error={error ? error.message || true : false}
      {...checkboxFieldProps}
    />
  );
};

export default CheckboxFieldForm;
