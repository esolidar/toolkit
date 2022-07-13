import CreateComment from '../create/CreateComment.types';

interface Props {
  thumb: string;
  name: string;
  date: Date;
  text: string;
  social: boolean;
  user: any;
  images?: any[];
  preview?: any;
  files?: any[];
  liked?: boolean;
  share?: any;
  likes?: number;
  comments?: number;
  replies?: number;
  createCommentProps: CreateComment;
}

export default Props;
