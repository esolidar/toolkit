/* eslint-disable camelcase */
import User from '../../interfaces/user.types';
import CreateComment from '../comment/create/CreateComment.types';

interface Note {
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
}

interface ParentComment {
  parentId: number | null;
  parentName?: string;
}

interface Props {
  note: Note;
  parentComment?: ParentComment;
  createCommentArgs: CreateComment;
  reply?: boolean;
  isAdmin?: boolean;
  type?: 'comment' | 'note';
  isLoggedIn?: boolean;
  handleDeleteNote({ id, commentByUser, name, isAdmin }): void;
}

export default Props;
