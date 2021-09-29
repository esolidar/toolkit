import User from './user.types';

interface CommentCrowdfunding {
  id: number;
  crowdfunding_id: number;
  user_id: number;
  company_id?: number;
  comment_id?: number;
  comment: string;
  updated_at?: string;
  created_at: string;
  deleted_at?: string;
  user?: User;
  responses_count: number;
  responses?: this[];
}

export default CommentCrowdfunding;
