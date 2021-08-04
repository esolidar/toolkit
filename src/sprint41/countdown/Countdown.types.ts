interface Props {
  startDate: string;
  endDate: string;
  onStart?: () => void;
  onExpiry?: () => void;
  mode?: 'auction' | 'crowdfunding';
}

export default Props;
