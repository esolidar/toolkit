interface Button {
  label: string;
  onClick(): void;
}

interface Props {
  title: string;
  status?: 'info' | 'success' | 'warning' | 'danger';
  subtitle?: string;
  dataTestId?: string;
  style?: React.CSSProperties;
  variant?: 'snack-bar' | 'description';
  primaryButton?: Button;
  secondaryButton?: Button;
  onClose?(): void;
}

export default Props;
