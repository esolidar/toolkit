interface RadioboxFieldProps {
  dataTestId?: string;
  value: string | number;
  name: string;
  label: string;
  error?: string | boolean;
  disabled?: boolean;
  id?: string;
  size?: 'xs' | 'sm' | 'md' | 'xl' | 'lg';
  checked?: boolean;
}

interface Props {
  name?: string;
  control: any;
  radioboxFieldProps: RadioboxFieldProps;
  required: boolean;
  dataTestId?: string;
  onChange(e: any): void;
}

export default Props;
