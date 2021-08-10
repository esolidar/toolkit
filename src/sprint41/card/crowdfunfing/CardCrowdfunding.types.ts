import Crowdfunding from '../../../interfaces/crowdfunding.types';
import Campaign from '../../../interfaces/campaign.types';

interface Props {
  contributes_sum: number;
  contribution_raised: number;
  currencySmall: string;
  goal: number;
  crowdfunding?: Crowdfunding;
  campaign?: Campaign;
  clickThumb(): void;
  communityUrl: string;
  lang: 'pt' | 'br' | 'en';
}

export default Props;
