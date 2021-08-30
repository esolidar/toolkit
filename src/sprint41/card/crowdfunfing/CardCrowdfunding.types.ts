import Crowdfunding from '../../../interfaces/crowdfunding.types';
import Campaign from '../../../interfaces/campaign.types';

interface Props {
  crowdfunding?: Crowdfunding;
  campaign?: Campaign;
  clickThumb(): void;
  communityUrl: string;
  lang: 'pt' | 'br' | 'en';
}

export default Props;
