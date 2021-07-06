interface Props {
  label: string;
  errors: string;
  value: string;
  field: string;
  showPassword?: boolean;
  dataTestId?: string;
  onChange: () => void;
}

export default Props;
