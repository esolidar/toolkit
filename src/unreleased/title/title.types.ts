interface Icon {
  class: string;
  href: string;
  target?: string;
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
