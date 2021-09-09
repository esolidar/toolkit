interface Props {
  contributesSum: number;
  goal: number;
  currency?: string | 'EUR' | 'USD' | 'BRL' | 'GBP';
  showLabel: boolean;
  showRaisedOf: boolean;
  numberContributors?: number;
  onClickContributors?(): void;
  startDate?: string;
  endDate?: string;
}

export default Props;
