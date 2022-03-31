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
  countdown?: any;
  title: string;
  body: any;
  support: Support;
  isPrivate?: boolean;
  average?: number;
  showCountdown?: boolean;
  dropdownItems?: any;
}

export default Props;
