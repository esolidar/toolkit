interface Props {
  className?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  onChange?(value: number, direction: 'left' | 'right'): void;
  disabled?: boolean;
  showButtons?: boolean;
}

export default Props;
