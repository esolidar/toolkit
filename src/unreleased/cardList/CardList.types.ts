/* eslint-disable camelcase */
interface SeeAll {
  url?: string;
  text?: string;
}

interface Card {
  contributes_count: number;
  bid_start: number;
  type: 'crowdfunding' | 'auction' | 'project';
}

interface List {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number | string;
  to: number;
  total: number;
  data: Card[];
}

interface Props {
  title?: string;
  subtitle?: string;
  cardType: string;
  list: List;
  hasListFooter?: boolean;
  seeAll?: SeeAll;
  communityUrl?: string;
  lang: 'pt' | 'br' | 'en';
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
}

export default Props;
