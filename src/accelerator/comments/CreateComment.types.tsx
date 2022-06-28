import User from '../../interfaces/user.types';

interface Props {
  type: 'comment' | 'reply';
  comment?: any;
  files: any[];
  user: User;
  isAdmin: boolean;
  handlePostComment(post: any): void;
  postUploadFiles(form: any): void;
  postDeleteFile(id: number): void;
  getScraper(url: string): void;
  postUploadImages(file: any): void;
  postDeleteImage(id: number): void;
  onDropError?(errorList: any): void;
  scrapper: any;
  placeholderText?: string;
  images: any[];
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
  handlePostComment(data: any): void;
  text: string;
  placeholderText?: string;
  videoData: any;
  attachmentOptions: any;
  isDisabledAttachments: boolean;
}

export default Props;
