// import Post from '../../interfaces/post';
import ProfileAvatar from '../../components/profileAvatar/ProfileAvatar.types';

interface Props {
  // comment?: any;
  profileAvatar: ProfileAvatar;
  onClickDelete(): void;
  createdDate: string;
  isPublic: boolean;
  isHighlighted: boolean;
  isUserOwner: boolean;
}

export default Props;
