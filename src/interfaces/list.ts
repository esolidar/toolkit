import Crowdfunding from './crowdfunding.types';
import Auction from './auction.types';

interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

interface List {
  current_page: number;
  data: Crowdfunding[] | Auction[];
  first_page_url?: string;
  from?: number;
  last_page: number;
  last_page_url?: string;
  links?: Link[];
  next_page_url?: string;
  path?: string;
  per_page: number | string;
  prev_page_url?: null;
  to?: number;
  total: number;
}

export default List;
