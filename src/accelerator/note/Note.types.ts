export interface NoteSingleProps {
  thumb: string;
  name: string;
  date: Date;
  text: string;
  user: any;
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
