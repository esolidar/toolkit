import { Form } from '../../../../components/uploadDocumentModal/UploadDocumentModal.types';
import Company from '../../../../interfaces/company.types';

interface Props {
  program: any;
  project: any;
  isOwner: boolean;
  handleFollow?(): void;
  handleUnfollow?(): void;
  handleCopyToClipboard(): void;
  company: Company;
  locale?: string;
  host: string;
  isAdmin?: boolean;
  handleChangeRating(): void;
  handleChangeStatus(): void;
  handleSaveComment(): void;
  handleAddInitiative(): void;
  files: any;
  onUploadFile(file: Form): void;
  onDeleteFile(fileId: number): void;
  userId: number;
}

export default Props;
