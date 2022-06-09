import Company from '../../interfaces/company.types';

interface Props {
  program: any;
  project: any;
  isOwner: boolean;
  handleFollow(): void;
  handleUnfollow(): void;
  handleCopyToClipboard(): void;
  company: Company;
  locale: string;
  host: string;
  isAdmin?: boolean;
}

export default Props;
