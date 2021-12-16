import Project from '../../../interfaces/project.types';
import { CurrencySmall } from '../../../interfaces/currency.types';

interface Props {
  project?: Project;
  clickThumb(): void;
  communityUrl: string;
  currency: CurrencySmall;
  showStatus?: boolean;
}

export default Props;
