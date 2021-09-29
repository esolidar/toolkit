import CommentCrowdfunding from '../../interfaces/commentCrowdfunding';
import User from '../../interfaces/user.types';

interface Props {
  commentList: CommentCrowdfunding[];
  user: User;
  isLoggedIn?: boolean;
  toggleLoginModal?(): void;
  isResponseList?: boolean;
  totalCommentsLength?: number;
  onClickLoadMoreComments?(): void;
  onClickDeleteComment(id: number): void;
  onSubmitComment(): void;
  onClickLoadReplies(id: number): void;
}

export default Props;
