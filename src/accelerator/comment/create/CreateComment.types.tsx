import User from '../../../interfaces/user.types';

interface Props {
  type: 'comment' | 'reply';
  comment?: any;
  user: User;
  isAdmin: boolean;
  closedCommentRef: any;
  handlePostComment(post: any): void;
  getScraper(url: string): void;
  onDropError?(errorList: any): void;
  handleCleanComment(): void;
  scrapper: any;
  placeholderText?: string;
  galleryType: 'grid' | 'inline';
  reference?: any;
  parentComment?: any;
}

export interface CommentProps {
  user: User;
  editMode: boolean;
  handleChange(e: any): void;
  text: string;
  placeholderText?: string;
  reference?: any;
  parentId: number;
}
export interface ReplyProps {
  user: User;
  handleChange(e: any): void;
  text: string;
  placeholderText?: string;
  reference?: any;
}

export default Props;
