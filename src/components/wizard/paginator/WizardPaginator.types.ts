interface Pages {
  title: string;
  status: 'done' | 'not-done';
  active: boolean;
}

interface Props {
  pages: Pages[];
  cdnStaticUrl: string;
  handleChangeTab(i: number): void;
}

export default Props;
