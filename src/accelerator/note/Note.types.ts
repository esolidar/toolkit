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
  user_id: number;
  parent_id: number;
  deleted_at: string;
}

interface ParentComment {
  parentId: number;
  parentName?: string;
}

export interface NoteSingleProps {
  note: Note;
  parentComment?: ParentComment;
  createCommentArgs: CreateComment;
  reply?: boolean;
  handleDeleteNote(id: number): void;
}

interface Props {
  noteSingleArgs: NoteSingleProps;
  handleViewAllReplies(id: number): void;
  handleViewChildReplies(id: number): void;
  handleDeleteNote(id: number): void;
}

export default Props;
