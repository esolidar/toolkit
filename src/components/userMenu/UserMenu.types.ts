interface Items {
  className?: string;
  eventKey?: string;
  href: string;
  id?: string;
  isVisible?: boolean;
  onClick?(): any;
  text?: string;
  plainText?: string;
}

interface Props {
  align?: 'left' | 'right';
  companyLogo: string;
  companyName: string;
  flip?: boolean;
  handleError?(): any;
  items: Items[];
}

export default Props;
