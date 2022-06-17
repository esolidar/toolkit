import Crowdfunding from '../../../interfaces/crowdfunding.types';
import Campaign from '../../../interfaces/campaign.types';

interface Props {
  crowdfunding?: Crowdfunding;
  campaign?: Campaign;
  clickThumb(): void;
  communityUrl?: string;
}

export default Props;
