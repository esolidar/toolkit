interface Support {
  url?: string;
  name?: string;
  label: any;
  target?: string;
}

interface Props {
  clickThumb(): void;
  image: string;
  countdown?: any;
  title: string;
  body: any;
  support: Support;
  isPrivate?: boolean;
}

export default Props;
