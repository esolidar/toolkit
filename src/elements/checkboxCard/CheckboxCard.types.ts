interface Props {
  disabled?: boolean;
  id?: string;
  img: string;
  disabledImg?: string;
  isChecked: boolean;
  name: string;
  onChange?(value: boolean): void;
  size: 'sm' | 'md' | 'lg';
  subtitle?: string;
  title: string;
}

export default Props;
