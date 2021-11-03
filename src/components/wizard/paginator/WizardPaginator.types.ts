interface Pages {
  title: string;
  status: 'done' | 'not-done';
  active: boolean;
}

interface Props {
  pages: Pages[];
  cdnStaticUrl: string;
}

export default Props;
