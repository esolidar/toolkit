import Company from './company.types';
import User from './user.types';

interface Comment {
  id: number;
  crowdfunding_id?: number;
  auction_id?: 457;
  user_id: number;
  company?: Company;
  company_id?: number;
  comment_id?: number;
  comment: string;
  updated_at?: string;
  created_at?: string;
  dateAdded?: string;
  deleted_at?: string;
  user?: User;
  responses_count: number;
  responses?: this[];
}

export default Comment;
