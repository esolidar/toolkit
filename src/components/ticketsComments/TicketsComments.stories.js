import React from 'react';
import TicketsComments from './TicketsComments';
import ticketComment from '../../../__mocks__/ticketComment';
import user from '../../../__mocks__/user';

export default {
  title: 'Components/Tickets/TicketsComments',
  component: TicketsComments,
  jest: ['TicketsComments.test.js'],
};

const Template = args => <TicketsComments {...args} />;

export const Default = Template.bind({});
export const withAttachments = Template.bind({});

Default.args = {
  ticketComments: [
    {
      company_id: 1,
      created_at: '2020-05-29 22:24:50',
      id: 11,
      project_id: 13,
      text: 'Lorem ipsum',
      updated_at: '2020-05-29 22:24:50',
      user_id: 51859,
      project_comment_id: 11,
      ticket_id: 1,
      user,
    },
  ],
  activePage: 1,
  per_page: 10,
  total: 1,
  handlePageChange: () => {},
};

withAttachments.args = {
  ticketComments: ticketComment,
  activePage: 1,
  per_page: 10,
  total: 12,
  handlePageChange: () => {},
};
