import Auction from '../../../interfaces/auction.types';
import { CurrencySmall } from '../../../interfaces/currency.types';

interface Props {
  auction?: Auction;
  clickThumb(): void;
  communityUrl: string;
  currency?: CurrencySmall;
}

export default Props;
