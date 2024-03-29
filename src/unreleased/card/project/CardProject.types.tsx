import Project from '../../../interfaces/project.types';
import { CurrencySmall } from '../../../interfaces/currency.types';

interface Props {
  project?: Project;
  clickThumb(): void;
  communityUrl: string;
  currency: CurrencySmall;
  showStatus?: boolean;
  cdnUploadsUrl: string;
  dropdownItems?: any;
  isAdmin?: boolean;
}

export default Props;
