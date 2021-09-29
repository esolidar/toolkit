import CommentCrowdfunding from '../src/interfaces/commentCrowdfunding';
import user from './user';

export const userComment: CommentCrowdfunding = {
  id: 99,
  crowdfunding_id: 133,
  user_id: 9,
  company_id: null,
  comment_id: null,
  comment: 'Este comentário foi escrito pelo user loggado e não tem respostas',
  updated_at: '2021-04-29 12:59:03',
  created_at: '2021-04-29 12:59:03',
  deleted_at: null,
  user,
  responses_count: 0,
};

export const userCommentWithResponses: CommentCrowdfunding = {
  id: 100,
  crowdfunding_id: 133,
  user_id: 9,
  company_id: null,
  comment_id: null,
  comment: 'Este comentário foi escrito pelo user loggado e tem 2 respostas',
  updated_at: '2021-04-29 12:59:03',
  created_at: '2021-04-29 12:59:03',
  deleted_at: null,
  user,
  responses_count: 2,
  responses: [
    {
      id: 101,
      crowdfunding_id: 133,
      user_id: 9,
      company_id: null,
      comment_id: 100,
      comment: 'Esta resposta foi escrita pelo user loggado',
      updated_at: '2021-03-29 12:59:03',
      created_at: '2021-03-29 12:59:03',
      deleted_at: null,
      user,
      responses_count: 0,
    },
    {
      id: 102,
      crowdfunding_id: 133,
      user_id: 9,
      company_id: null,
      comment_id: 100,
      comment: 'Esta resposta também foi escrita pelo user loggado',
      updated_at: '2021-03-29 12:59:03',
      created_at: '2021-03-29 12:59:03',
      deleted_at: null,
      user,
      responses_count: 0,
    },
  ],
};

export const otherUserComment: CommentCrowdfunding = {
  id: 120,
  crowdfunding_id: 133,
  user_id: 9,
  company_id: null,
  comment_id: null,
  comment: 'Este comentário foi escrito por outro user',
  updated_at: '2021-03-29 12:59:03',
  created_at: '2021-03-29 12:59:03',
  deleted_at: null,
  user,
  responses_count: 0,
};
