interface Props {
  startDate?: string;
  endDate: string;
  onStart?: () => void;
  onExpiry?: () => void;
  mode: 'date' | 'timer-count' | 'timer-left';
  showBorder?: boolean;
}

export default Props;
