import CreateComment from '../comment/create/CreateComment.types';

export interface NoteSingleProps {
  thumb: string;
  name: string;
  date: Date;
  text: string;
  createCommentArgs: CreateComment;
  images?: any[];
  preview?: any;
  files?: any[];
  reply?: boolean;
  repliesTotal?: number;
  replies?: any[];
}

interface Props {
  noteSingleArgs: NoteSingleProps;
  handleViewAllReplies(): void;
  handleViewChildReplies(): void;
}

export default Props;
