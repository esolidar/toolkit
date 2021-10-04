/* eslint-disable camelcase */
import PostResponses from '../../interfaces/postResponses.types';
import ProfileAvatar from '../../components/profileAvatar/ProfileAvatar.types';
import CommentCrowdfunding from '../../interfaces/commentCrowdfunding';
import User from '../../interfaces/user.types';

interface Props {
  comment: CommentCrowdfunding;
  onClickLoadReplies?(commentId: any, responsesCount: number): void;
  onClickToggleLoginModal?(): void;
  user?: User;
  responsesList?: PostResponses;
  onClickDelete(id: number): void;
  onSubmitComment(comment: string, commentId?: number): void;
  profileAvatar: ProfileAvatar;
  isLoggedIn: boolean;
  isReply: boolean;
}

export default Props;
