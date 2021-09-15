/* eslint-disable camelcase */
import Crowdfunding from '../../interfaces/crowdfunding.types';

interface SeeAll {
  url?: string;
  text?: string;
}

interface Card extends Crowdfunding {
  bid_start?: number;
  project_category?: object;
  type: 'crowdfunding' | 'auction' | 'project';
}

interface List {
  current_page: number;
  from?: number;
  last_page: number;
  per_page: number | string;
  to?: number;
  total: number;
  data: Card[];
}

interface Props {
  title?: string;
  subtitle?: string;
  list: List;
  hasListFooter?: boolean;
  seeAll?: SeeAll;
  communityUrl?: string;
  lang: 'pt' | 'br' | 'en';
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  perPageOptions?: number[];
}

export default Props;
