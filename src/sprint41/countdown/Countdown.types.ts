interface Props {
  startDate?: string;
  endDate: string;
  onStart?: () => void;
  onExpiry?: () => void;
  mode: 'date' | 'timer-count' | 'timer-left';
}

export default Props;
