import User from '../../../interfaces/user.types';

interface Props {
  type: 'comment' | 'reply';
  comment?: any;
  files: any[];
  user: User;
  isAdmin: boolean;
  closedCommentRef: any;
  handlePostComment(post: any): void;
  postUploadFiles(form: any): void;
  postDeleteFile(id: number): void;
  getScraper(url: string): void;
  postUploadImages(file: any): void;
  postDeleteImage(id: number): void;
  onDropError?(errorList: any): void;
  handleCleanComment(): void;
  scrapper: any;
  placeholderText?: string;
  images: any[];
  galleryType: 'grid' | 'inline';
}

export interface CommentProps {
  user: User;
  editMode: boolean;
  handleChange(e: any): void;
  text: string;
  placeholderText?: string;
}
export interface ReplyProps {
  user: User;
  handleChange(e: any): void;
  text: string;
  placeholderText?: string;
}

export default Props;
