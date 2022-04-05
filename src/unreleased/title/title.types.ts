interface Icon {
  class: string;
  href: string;
  target?: string;
  disabled?: boolean;
  disabledText?: string;
  tooltipPlacement?: string;
}
interface Props {
  title: string;
  subtitle: string;
  supportingName?: string;
  supportingUrl?: string;
  goBackUrl?: string;
  onClickGoBack?(): void;
  icon?: Icon;
}

export default Props;
