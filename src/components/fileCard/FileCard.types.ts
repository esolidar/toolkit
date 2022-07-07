interface Props {
  showDownloadButton?: boolean;
  title: string;
  url?: string;
  subtitle?: string | JSX.Element;
  dropdownItems?: any;
  disabled?: boolean;
  className?: string;
  image?: string;
  file?: string;
  showBadgePrivate?: boolean;
  showBadgeFailed?: boolean;
  size?: string | number;
  dateUploaded?: string;
  link?: string;
}

export default Props;
