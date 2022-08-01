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

export interface NoteSingleProps {
  note: Note;
  parentComment?: ParentComment;
  createCommentArgs: CreateComment;
  reply?: boolean;
  isAdmin?: boolean;
  type?: 'comment' | 'note';
  handleDeleteNote(id: number): void;
}

interface Props {
  noteSingleArgs: NoteSingleProps;
  handleViewAllReplies(id: number): void;
  handleViewChildReplies(id: number): void;
  handleDeleteNote(id: number): void;
}

export default Props;
