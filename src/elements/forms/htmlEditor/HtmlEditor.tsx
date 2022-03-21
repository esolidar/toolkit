import React from 'react';
import { useController } from 'react-hook-form';
import HtmlEditorComponent from '../../../components/htmlEditor';
import Props from './HtmlEditor.types';

const HtmlEditor = ({ control, name, required, htmlEditorProps, onChange, onBlur }: Props) => {
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
    <HtmlEditorComponent
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

export default HtmlEditor;
