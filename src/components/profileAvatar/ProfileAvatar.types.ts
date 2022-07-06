interface Props {
  isNameBold?: boolean;
  name?: string;
  thumb?: string;
  thumbSize?: 'sm' | 'md' | 'lg';
  href?: string;
  buttonUrl?: string;
  buttonText?: string;
  buttonIconRight?: JSX.Element;
  className?: string;
}

export default Props;
