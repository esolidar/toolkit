import CommentCrowdfunding from '../../interfaces/commentCrowdfunding';
import User from '../../interfaces/user.types';

interface Props {
  commentList: CommentCrowdfunding[];
  user: User;
  isLoggedIn?: boolean;
  toggleLoginModal?(): void;
  onClickDeleteComment(id: number): void;
}

export default Props;
