import PostResponses from '../../interfaces/postResponses.types';
import ProfileAvatar from '../../components/profileAvatar/ProfileAvatar.types';

interface Props {
  comment: any;
  onClickShowResponses?(comment: any): void;
  onClickShowCreateResponse?(id: number): void;
  userId?: number;
  responsesList?: PostResponses;
  showCount?: boolean;
  onClickDelete(): void;
  onClickCopy(): void;
  postUrl: string;
  profileAvatar: ProfileAvatar;
}

export default Props;
