import Comment from '../../interfaces/comment';
import User from '../../interfaces/user.types';

interface Props {
  commentList: Comment[];
  user: User;
  isLoggedIn?: boolean;
  toggleLoginModal?(): void;
  onClickDeleteComment(id: number): void;
}

export default Props;
