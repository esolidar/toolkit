import Auction from '../../interfaces/auction.types';
import Campaign from '../../interfaces/campaign.types';
import Crowdfunding from '../../interfaces/crowdfunding.types';

interface Props {
  type: 'crowdfunding' | 'auction' | 'campaign';
  crowdfunding?: Crowdfunding;
  campaign?: Campaign;
  auction?: Auction;
  clickThumb(): void;
  communityUrl: string;
}

export default Props;
