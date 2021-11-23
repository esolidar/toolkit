interface Props {
  className?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  handleChange(value: number): void;
}

export default Props;
