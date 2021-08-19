import React from 'react';
import CommentHeader from './CommentHeader';

export default {
  title: 'Components/Comments/CommentHeader',
  component: CommentHeader,
};

const Template = args => <CommentHeader {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CommentHeader.test.js'],
};
Default.args = {
  comment: {
    comment: 'teste 2',
    comment_id: null,
    company_id: null,
    created_at: '2020-08-07 13:07:29',
    crowdfunding_id: 45,
    id: 382,
    updated_at: '2020-08-07 13:07:29',
    user: {
      institution: {
        id: 106,
        image:
          'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b.jpeg',
        name: 'Associação Um Milhão Contra a Pobreza e Exclusão Social em Portugal',
        s3_cover_key: null,
        s3_image_key: 'institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b.jpeg',
        sigla: 'CD',
        thumbs: {
          detail:
            'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b-DETAIL.jpeg',
          thumb:
            'https://cdn.testesolidar.com/institutions/8ae29557-7b9c-4af8-9ea9-3f5637a5b46b-THUMB.jpeg',
        },
      },
    },
    user_id: 1275,
  },
  deleteComment: () => {},
  newName: 'Teste',
  newThumb: null,
  user: null,
};
