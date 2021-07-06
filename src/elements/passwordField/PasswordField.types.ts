interface Props {
  id: string;
  label: string;
  error: string;
  value: string;
  field: string;
  showPassword?: boolean;
  dataTestId?: string;
  onChange: () => void;
}

export default Props;
