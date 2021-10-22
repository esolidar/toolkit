interface Props {
  className?: string;
  isChecked: boolean;
  hasIcons?: boolean;
  name?: string;
  value: string;
  onChange(): void;
  disabled?: boolean;
}

export default Props;
