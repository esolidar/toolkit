import React from 'react';

interface Props {
  id: string;
  label: string;
  error: string;
  value: string;
  field: string;
  showPassword?: boolean;
  help?: string;
  dataTestId?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(e: React.ChangeEvent<HTMLInputElement>): void;
  style?: object;
}

export default Props;
