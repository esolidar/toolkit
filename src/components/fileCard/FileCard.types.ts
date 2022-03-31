interface Props {
  showDownloadButton?: boolean;
  title: string;
  subtitle?: string;
  dropdownItems?: any;
  disabled?: boolean;
  className?: string;
  image?: string;
  file?: string;
  showBadgePrivate?: boolean;
  showBadgeFailed?: boolean;
  size: string | number;
  dateUploaded?: string;
}

export default Props;
