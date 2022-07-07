/* eslint-disable camelcase */
import User from '../../interfaces/user.types';
import CreateComment from '../comment/create/CreateComment.types';

interface Note {
  user: User;
  created_at: string;
  text: string;
  images?: any[];
  preview?: any;
  files?: any[];
  repliesCount?: number;
  replies?: any[];
  scraping_data: any;
}

interface ParentComment {
  parentId: number;
  parentName: string;
}

export interface NoteSingleProps {
  note: Note;
  parentComment?: ParentComment;
  createCommentArgs: CreateComment;
  reply?: boolean;
}

interface Props {
  noteSingleArgs: NoteSingleProps;
  handleViewAllReplies(): void;
  handleViewChildReplies(): void;
}

export default Props;
