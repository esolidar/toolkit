/* eslint-disable react/jsx-props-no-spreading */

import { shallow } from 'enzyme';
import TicketsComments from '../index';

const props = {
  ticketComments: [
    {
      project_comment: {
        attachment_files: [
          {
            created_at: '2020-05-29 08:48:55',
            file: '',
            file_size: 13264,
            file_type: 'pdf',
            id: 39,
            name: 'amazon.pdf',
            project_id: 31,
            updated_at: '2020-05-29 08:48:55',
            user_id: 51702,
          },
          {
            created_at: '2020-05-29 08:48:55',
            file: '',
            file_size: 13264,
            file_type: 'pdf',
            id: 40,
            name: 'teste.pdf',
            project_id: 31,
            updated_at: '2020-05-29 08:48:55',
            user_id: 51702,
          },
        ],
        user: {
          firstName: 'Patricia',
          id: 51859,
          image: null,
          institution: null,
          institution_id: null,
          lastName: 'Silva',
          name: 'Patricia Silva',
          streamImage: 'local',
          thumbs: {
            original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
            standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
            thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          },
        },
      },
      company_id: 1,
      created_at: '2020-05-29 22:24:50',
      id: 11,
      project_id: 13,
      text: 'Esta é uma descrição de teste',
      updated_at: '2020-05-29 22:24:50',
      user_id: 51859,
      project_comment_id: 11,
      ticket_id: 1,
    },
  ],
  activePage: 1,
  per_page: 10,
  total: 12,
  handlePageChange: () => {},
};

describe('TicketsComments component', () => {
  it('renders TicketsComments correctly', () => {
    const component = shallow(<TicketsComments {...props} />);
    expect(component).toHaveLength(1);
  });
});
