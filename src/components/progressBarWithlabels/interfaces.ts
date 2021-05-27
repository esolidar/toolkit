interface Props {
  text?: string;
  contributesSum: number;
  goal: number;
  currency?: 'EUR' | 'USD' | 'BRL' | 'GBP';
  showBottomLabels: boolean;
  showPercentage: boolean;
}

export default Props;
