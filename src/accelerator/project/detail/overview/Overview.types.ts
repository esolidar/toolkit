import { Form } from '../../../../components/uploadDocumentModal/UploadDocumentModal.types';
import Company from '../../../../interfaces/company.types';
import CreateCommentProps from '../../../comment/create/CreateComment.types';

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
  createCommentArgs: CreateCommentProps;
  comments: any;
  commentsData: any;
  isLoggedIn?: boolean;
  toggleLoginModal?(): void;
  handleDeleteComment(): void;
  handleViewAllReplies(): void;
}

export default Props;
