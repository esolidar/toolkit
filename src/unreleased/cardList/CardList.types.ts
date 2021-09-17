/* eslint-disable camelcase */
import Crowdfunding from '../../interfaces/crowdfunding.types';

interface Button {
  url?: string;
  text?: string;
}

interface Footer {
  onChangeSelectPerPage(): void;
  onChangePagination(): void;
  perPageOptions?: number[];
}

interface Card extends Crowdfunding {
  bid_start?: number;
  project_category?: object;
  type: 'crowdfunding' | 'auction' | 'project';
}

export interface List {
  current_page?: number;
  from?: number;
  last_page?: number;
  per_page: number | string;
  to?: number;
  total: number;
  data: Card[];
}

export interface Props {
  title?: string;
  subtitle?: string;
  list: List;
  button?: Button;
  communityUrl?: string;
  lang: 'pt' | 'br' | 'en';
  footer?: Footer;
  onClickThumb(id: number): void;
}
