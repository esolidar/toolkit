import React from 'react';
import { useController } from 'react-hook-form';
import HtmlEditor from '../../../components/htmlEditor';
import Props from './HtmlEditor.types';

const HtmlEditorForm = ({ control, name, required, htmlEditorProps, onChange, onBlur }: Props) => {
  const {
    field: { onChange: handleChange, onBlur: handleBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: htmlEditorProps?.defaultValue,
    shouldUnregister: true,
  });

  return (
    <HtmlEditor
      initialContent={value}
      onChange={e => {
        handleChange(e);
        if (onChange) onChange(e);
      }}
      onBlur={e => {
        handleBlur();
        if (onBlur) onBlur(e);
      }}
      error={error}
      {...htmlEditorProps}
    />
  );
};

export default HtmlEditorForm;
