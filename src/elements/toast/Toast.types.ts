interface Button {
  label: string;
  onClick(): void;
}

interface Props {
  boxShadow?: boolean;
  className?: string;
  dataTestId?: string;
  onClose?(): void;
  primaryButton?: Button;
  secondaryButton?: Button;
  status?: 'info' | 'success' | 'warning' | 'danger';
  style?: React.CSSProperties;
  subtitle?: string;
  title: string;
  variant?: 'snack-bar' | 'description';
}

export default Props;
