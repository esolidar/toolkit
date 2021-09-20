import { CurrencySmall } from '../../interfaces/currency.types';

interface Countdown {
  startDate: string;
  endDate: string;
  onStart: () => void;
  onExpiry: () => void;
}

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
  hasStarted?: boolean;
  countdown?: Countdown;
}

export default Props;
