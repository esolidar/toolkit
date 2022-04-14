export interface PageStatus {
  published: boolean;
  active: string;
  edited: string[];
  done: string[];
}

interface Props {
  pages: any;
  pageStatus: PageStatus;
  handleChangeTab(i: number): void;
}

export default Props;
