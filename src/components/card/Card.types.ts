interface Support {
  url?: string;
  name?: string;
  label: any;
  target?: string;
  revert: boolean;
}

interface Props {
  clickThumb?(): void;
  image: string;
  middleContent?: any;
  title: string;
  body: any;
  logo?: string;
  support?: Support;
  isPrivate?: boolean;
  average?: number;
  dropdownItems?: any;
  extraClass?: string;
}

export default Props;
