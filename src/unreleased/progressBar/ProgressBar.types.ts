import { CurrencySmall } from '../../interfaces/currency.types';

interface Props {
  contributesSum: number;
  goal: number;
  currency?: CurrencySmall;
  showLabel: boolean;
  showRaisedOf: boolean;
  numberContributors?: number;
  onClickContributors?(): void;
  startDate?: string;
  endDate?: string;
}

export default Props;
