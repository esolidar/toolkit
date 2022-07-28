import React from 'react';
import { useController } from 'react-hook-form';
import InputTagsComponent from '../../inputTags';
import Props from './InputTags.types';

const InputTags = ({ control, name, required, inputTagsFormProps, onChange }: Props) => {
  const {
    field: { onChange: handleChange, name: fieldName, value },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: inputTagsFormProps?.tags,
    shouldUnregister: true,
  });

  return (
    <InputTagsComponent
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      tags={value}
      name={fieldName}
      {...inputTagsFormProps}
    />
  );
};

export default InputTags;
