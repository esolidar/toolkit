interface Props {
  startDate?: string;
  endDate: string;
  onStart?: () => void;
  onExpiry?: () => void;
  mode: 'date' | 'timer-count' | 'timer-left' | 'detail';
  showBorder?: boolean;
  minimal?: boolean;
}

export default Props;
