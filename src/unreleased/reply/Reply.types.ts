/* eslint-disable camelcase */
import PostResponses from '../../interfaces/postResponses.types';
import ProfileAvatar from '../../components/profileAvatar/ProfileAvatar.types';
import Comment from '../../interfaces/comment';
import User from '../../interfaces/user.types';

interface Props {
  comment: Comment;
  onClickToggleLoginModal?(): void;
  user?: User;
  responsesList?: PostResponses;
  onClickDelete(id: number): void;
  profileAvatar: ProfileAvatar;
  isLoggedIn: boolean;
  isReply: boolean;
}

export default Props;
