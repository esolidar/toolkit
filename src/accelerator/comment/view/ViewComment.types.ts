/* eslint-disable camelcase */
import User from '../../../interfaces/user.types';
import CreateComment from '../create/CreateComment.types';

// interface Reply {
//   user: User;
//   created_at: string;
//   text: any;
//   images?: any[];
//   preview?: any;
//   files?: any[];
//   replies_count?: number;
//   replies?: any[];
//   scraping_data: any;
//   id: number;
//   user_id: number | null;
//   parent_id: number | null;
//   deleted_at: string | null;
// }

// interface ParentComment {
//   parentId: number | null;
//   parentName?: string;
// }

// export interface CommentSingleProps {
//   comment: Reply;
//   parentComment?: ParentComment;
//   createCommentArgs: CreateComment;
//   reply?: boolean;
//   handleDeleteComment(id: number): void;
// }

interface Props {
  user: User;
  created_at: string;
  text: any;
  images?: any[];
  preview?: any;
  files?: any[];
  replies_count?: number;
  replies?: any[];
  scraping_data: any;
  id: number;
  user_id: number | null;
  parent_id: number | null;
  deleted_at: string | null;
  liked?: boolean;
  share?: any;
  likes?: number;
  companyName: string;
  handleViewAllReplies(id: number): void;
  handleDeleteComment({ id, commentByUser, name, isAdmin }): void;
  createCommentArgs: CreateComment;
  // commentSingleArgs: CommentSingleProps;
  isAdmin: boolean;
}

export default Props;
