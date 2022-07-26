interface Props {
  isNameBold?: boolean;
  name?: string;
  thumb?: string;
  thumbSize?: 'sm' | 'md' | 'lg';
  href?: string;
  buttonUrl?: string;
  buttonText?: string;
  buttonIconRight?: JSX.Element;
  date?: string;
  className?: string;
  companyLogo?: string;
}

export default Props;
