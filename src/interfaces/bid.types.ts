import User from './user.types';

interface Bid {
  id: number;
  auction_id: number;
  value: number;
  hidden: number;
  stripelast4: null;
  dateAdded: string;
  user: User;
}

export default Bid;
